import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SimpleShape = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};


interface ThreeJSBackgroundProps {
  theme?: 'developer' | 'marketer' | 'creative' | 'professional';
  className?: string;
}

const ThreeJSBackground = ({ theme = 'developer', className = "" }: ThreeJSBackgroundProps) => {
  const shapes = [
    { position: [-2, 1, -3] as [number, number, number], color: "#10b981" },
    { position: [2, -1, -2] as [number, number, number], color: "#059669" },
    { position: [0, 2, -4] as [number, number, number], color: "#34d399" },
  ];

  return (
    <div className={`absolute inset-0 -z-10 opacity-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        
        <Stars radius={100} depth={50} count={50} factor={1} saturation={0} fade />
        
        {shapes.map((shape, index) => (
          <SimpleShape
            key={index}
            position={shape.position}
            color={shape.color}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;