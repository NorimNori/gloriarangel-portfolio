import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense } from "react"
import * as random from 'maath/random';
import * as THREE from "three";
import './stars.scss'

const Stars = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = new Float32Array(random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 20;
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled 
      >
        <PointMaterial
          transparent
          color='#7ba6de'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="StarsCanvas">
      <Canvas 
      camera={{ position: [0, 0 , 1]}}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas