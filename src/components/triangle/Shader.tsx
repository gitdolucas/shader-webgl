import { useState } from 'react';
import { ShaderMaterial, Vector3 } from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';
import { useControls } from 'leva';
import { Plane } from '@react-three/drei';

export function Shader() {

  const [lastHover, setLastHover] = useState<Vector3>(new Vector3(0, 0, 0));
  const { uInnerCircleDistortion, uMaxDist, uVerticals, uInvertion, uBrightness, uDarkAccent, uSharpness } = useControls('Shader Options', {
    uBrightness: {
      min: 0.05,
      max: 0.5,
      value: 0.05,
      label: 'Brightness'
    },
    uVerticals: {
      min: 0.1,
      max: 50,
      value: 0.1,
      step: 0.5,
      label: 'Verticals'
    },
    uDarkAccent: {
      min: 0.0,
      max: 1,
      value: 0.1,
      label: 'Dark Accent'
    },
    uInnerCircleDistortion: {
      min: 0.1,
      max: 20,
      value: 0.1,
      label: 'Inner circle distortion'
    },
    uMaxDist: {
      min: 0,
      max: 15,
      value: 15,
      label: 'Max Distance'
    },
    uInvertion: {
      min: 0,
      max: 30,
      value: 0,
      label: 'Invertion'
    },
    uSharpness: {
      min: -0.25,
      max: 0.25,
      value: 0.0,
      step: 0.01,
      label: 'Sharpness'
    },

  })

  // .1 to avoid z-fighting 
  const vertices = new Float32Array([
    -5.0, -5.0, 0.0,
    5.0, -5.0, 0.0,
    0.0, 5.0, 0.0
  ])
  const material = new ShaderMaterial({
    uniforms: {
      uHover: { value: lastHover },
      u_inner_circle_distortion: { value: uInnerCircleDistortion },
      u_max_distance: { value: uMaxDist },
      u_verticals: { value: uVerticals },
      u_invertion: { value: uInvertion },
      u_brightness: { value: uBrightness },
      u_dark_accent: { value: uDarkAccent },
      u_sharpness: { value: uSharpness },
    },
    // index0AttributeName: 'position',
    // wireframe: true,
    fog: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  return (
    <Plane args={[20, 10]} onPointerMove={(event) => setLastHover(event.point)}>
      <shaderMaterial attach="material" args={[material]} />
    </Plane>
    // <mesh onPointerMove={(event) => setLastHover(event.point)}>
    //   <bufferGeometry>
    //     <bufferAttribute args={[vertices, 3, false]} attach={'attributes-position'} />
    //   </bufferGeometry>;
    //   <shaderMaterial attach="material" args={[material]} />
    // </mesh>
  )
}