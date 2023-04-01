import { useEffect, useState } from 'react';
import { ShaderMaterial, Vector3 } from 'three';
import {vertexShader} from './vertexShader';
import {fragmentShader} from './fragmentShader';

export function Shader() {

  const [lastHover, setLastHover] = useState<Vector3>(new Vector3(0, 0, 0));

  // .1 to avoid z-fighting 
  const vertices = new Float32Array([
    -5.0, -5.0, 0.0,
    5.0, -5.0, 0.0,
    0.0, 5.0, 0.0
  ])
  const material = new ShaderMaterial({
    uniforms: {
      uHover: { value: lastHover },
    },
    // index0AttributeName: 'position',
    // wireframe: true,
    fog: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  return (
    <mesh onPointerMove={(event) => setLastHover(event.point)}>
      <bufferGeometry>
        <bufferAttribute args={[vertices, 3, false]} attach={'attributes-position'} />
      </bufferGeometry>;
      <shaderMaterial attach="material" args={[material]} />
    </mesh>)
}