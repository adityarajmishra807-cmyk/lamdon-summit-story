import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * A topographic Himalayan ridge, drawn as contour lines over displaced
 * geometry. It is a background system rather than an object: the camera drifts
 * forward with page scroll, so the ridgeline behaves like landscape passing a
 * moving viewpoint instead of a decorative animation.
 */

const NOISE = /* glsl */ `
  vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
  vec3 permute(vec3 x){return mod289((x*34.+1.)*x);}
  float snoise(vec2 v){
    const vec4 C=vec4(.211324865,.366025403,-.577350269,.024390243);
    vec2 i=floor(v+dot(v,C.yy)),x0=v-i+dot(i,C.xx);
    vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
    vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
    i=mod289(i);
    vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
    vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
    m=m*m; m=m*m;
    vec3 x=2.*fract(p*C.www)-1., h=abs(x)-.5, ox=floor(x+.5), a0=x-ox;
    m*=1.79284291-.85373472*(a0*a0+h*h);
    vec3 g;
    g.x=a0.x*x0.x+h.x*x0.y;
    g.yz=a0.yz*x12.xz+h.yz*x12.yw;
    return 130.*dot(m,g);
  }
  float ridge(vec2 p){
    float sum=0., amp=.5, freq=1.;
    for(int i=0;i<5;i++){
      float n=snoise(p*freq);
      n=1.-abs(n);
      n*=n;
      sum+=n*amp;
      freq*=2.03; amp*=.47;
    }
    return sum;
  }
`;

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  varying float vHeight;
  varying vec2 vUv;
  ${NOISE}
  void main(){
    vUv = uv;
    vec3 p = position;
    vec2 q = vec2(p.x * 0.055, (p.y + uScroll * 26.0) * 0.055);
    float h = ridge(q);
    // Flatten the near field so the valley floor reads as a plateau.
    float valley = smoothstep(0.0, 26.0, abs(p.x)) * 0.65 + 0.35;
    h *= valley;
    h += snoise(q * 4.0) * 0.06;
    vHeight = h;
    p.z = h * 13.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform vec3 uLine;
  uniform vec3 uFill;
  uniform vec3 uBackground;
  uniform float uOpacity;
  varying float vHeight;
  varying vec2 vUv;
  void main(){
    float h = vHeight * 13.0;
    // Contour banding: a hairline every 0.55 world units of elevation.
    float band = fract(h / 0.55);
    float d = min(band, 1.0 - band);
    float line = 1.0 - smoothstep(0.0, 0.055, d);
    float elevation = clamp(vHeight * 0.85, 0.0, 1.0);
    vec3 col = mix(uFill, uLine, line * (0.35 + elevation * 0.65));
    // Aerial perspective: fade the far ridges into the page background.
    float depth = smoothstep(0.02, 0.62, vUv.y);
    col = mix(uBackground, col, depth);
    float alpha = uOpacity * mix(0.15, 1.0, depth);
    gl_FragColor = vec4(col, alpha);
  }
`;

function Ridge({ segments, tone }: { segments: number; tone: Tone }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const scroll = useRef(0);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uLine: { value: new THREE.Color(tone.line) },
      uFill: { value: new THREE.Color(tone.fill) },
      uBackground: { value: new THREE.Color(tone.background) },
      uOpacity: { value: tone.opacity },
    }),
    [tone],
  );

  useFrame((state, delta) => {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const target = window.scrollY / max;
    scroll.current += (target - scroll.current) * Math.min(1, delta * 3.2);
    const uniforms = mat.current?.uniforms;
    if (uniforms) {
      if (uniforms["uTime"]) uniforms["uTime"].value = state.clock.elapsedTime;
      if (uniforms["uScroll"]) uniforms["uScroll"].value = scroll.current;
    }
    state.camera.position.y = -34 + scroll.current * 6;
    state.camera.position.z = 15 - scroll.current * 3.5;
    state.camera.lookAt(0, 10, 2);
  });

  const width = size.width > 1400 ? 150 : 120;

  return (
    <mesh rotation={[-Math.PI / 2.32, 0, 0]} position={[0, 8, 0]}>
      <planeGeometry args={[width, 110, segments, Math.round(segments * 0.72)]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export interface Tone {
  line: string;
  fill: string;
  background: string;
  opacity: number;
}

export default function TerrainScene({
  tone,
  quality = "high",
}: {
  tone: Tone;
  quality?: "high" | "low";
}) {
  const segments = quality === "high" ? 200 : 96;
  return (
    <Canvas
      dpr={quality === "high" ? [1, 1.75] : 1}
      gl={{ antialias: quality === "high", powerPreference: "high-performance", alpha: true }}
      camera={{ position: [0, -34, 15], fov: 42, near: 0.1, far: 400 }}
      frameloop="always"
      style={{ pointerEvents: "none" }}
    >
      <Ridge segments={segments} tone={tone} />
    </Canvas>
  );
}
