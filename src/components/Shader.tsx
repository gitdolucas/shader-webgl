import { useEffect, useState } from 'react';
import { ShaderMaterial, Vector3 } from 'three';

export function Shader() {

  const [lastHover, setLastHover] = useState<Vector3>(new Vector3(0, 0, 0));

  // .1 to avoid z-fighting 
  const vertices = new Float32Array([
    -0.5, -0.5, 0.0,
    0.5, -0.5, 0.0,
    0.0, 0.5, 0.0
  ])
  const material = new ShaderMaterial({
    uniforms: {
      uHover: { value: lastHover },
    },
    vertexShader: `
      uniform vec3 uHover;
      varying vec3 vHover;
      varying vec3 vPosition;

      void main() {
        vHover = uHover;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,
    fragmentShader: `
      varying vec3 vHover;
      varying vec3 vPosition;

      void main() {
          float dist = 0.0;
          dist = distance(vPosition, vHover);
          vec3 color = vec3(dist);
          vec3 orange = vec3(1.0f, 0.6f, 0.2f);
          if(dist < 0.1 ){
            gl_FragColor = vec4(orange + color, dist); // set the color to orange (default is red)
          } else {
            gl_FragColor = vec4(1.0f, 0.6f, 0.2f, 1.0f); // set the color to orange (default is red)
          }

        }
      `,
  })
  return (
    <mesh onPointerMove={(event) => setLastHover(event.point)}>
      <bufferGeometry>
        <bufferAttribute args={[vertices, 3, false]} attach={'attributes-position'} />
      </bufferGeometry>;
      <shaderMaterial attach="material" args={[material]} />
    </mesh>)
}