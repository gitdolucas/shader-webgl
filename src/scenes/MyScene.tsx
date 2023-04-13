import { OrbitControls, Sphere, Stats, Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Shader } from "../components/triangle/Shader";
import { PlaneShader } from "../components/plane/PlaneShader";
export function MyScene() {

    return (
        <div style={{ width: "100%", height: "100vh" }}>

            <Canvas orthographic camera={{zoom: 60}}>
                <color attach="background" args={['#333']} />

                {/* Grid cartesiano*/}
                {/* <gridHelper
                    position={[0, 0, 0]}
                    args={[10, 10, "#84beee", '#202020']}
                    rotation={[Math.PI / 2, 0, 0]}
                    /> */}
                
                {/* Objetos */}
                <Shader />
                {/* <PlaneShader /> */}

                {/* Controle de câmera */}
                {/* <OrbitControls camera={{}}/> */}

                {/* Status app */}
                <Stats showPanel={0} className="stats"  />
            </Canvas>
        </div>
    )
}