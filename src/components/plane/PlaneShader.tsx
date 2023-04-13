import { useState } from 'react';
import { ShaderMaterial, Vector3 } from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';
import { useControls } from 'leva';
import { Plane } from '@react-three/drei';

export function PlaneShader() {

  const [lastHover, setLastHover] = useState<Vector3>(new Vector3(0, 0, 0));
  const {  } = useControls('Shader Options', {
    uBrightness: {
      min: 0.05,
      max: 0.5,
      value: 0.05,
      label: 'Brightness'
    }
  })
  const material = new ShaderMaterial({
    uniforms: {
      uHover: { value: lastHover },
    },
    fog: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  return (
    <group position={[0, 0, 0]} >
      <Plane args={[50,50]} onPointerMove={(event) => setLastHover(event.point)}>
        <shaderMaterial attach="material" args={[material]} />
      </Plane>
    </group>
  )
}