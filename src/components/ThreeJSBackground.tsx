import { Canvas } from "@react-three/fiber";
import { Sphere, Box, Torus, Float, Stars, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AnimatedShapeProps {
  position: [number, number, number];
  scale: number;
  color: string;
  shape: 'sphere' | 'box' | 'torus';
  rotationSpeed?: number;
}

const AnimatedShape = ({ position, scale, color, shape, rotationSpeed = 0.01 }: AnimatedShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  const ShapeComponent = () => {
    switch (shape) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale} />;
      case 'box':
        return <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale} />;
      case 'torus':
        return <Torus ref={meshRef} args={[1, 0.4, 16, 32]} position={position} scale={scale} />;
      default:
        return <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
    </Float>
  );
};

const CodeParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" opacity={0.6} transparent />
    </points>
  );
};

interface ThreeJSBackgroundProps {
  theme?: 'developer' | 'marketer' | 'creative' | 'professional';
  className?: string;
}

const ThreeJSBackground = ({ theme = 'developer', className = "" }: ThreeJSBackgroundProps) => {
  const themeConfig = {
    developer: {
      shapes: [
        { position: [-3, 2, -4] as [number, number, number], scale: 0.6, color: "#3b82f6", shape: 'box' as const },
        { position: [3, -1, -3] as [number, number, number], scale: 0.4, color: "#8b5cf6", shape: 'sphere' as const },
        { position: [-1, -2, -5] as [number, number, number], scale: 0.5, color: "#06b6d4", shape: 'torus' as const },
      ],
      cameraPosition: [0, 0, 8] as [number, number, number],
      lightColor: "#3b82f6"
    },
    marketer: {
      shapes: [
        { position: [-2, 1, -3] as [number, number, number], scale: 0.7, color: "#f59e0b", shape: 'sphere' as const },
        { position: [2, -1, -4] as [number, number, number], scale: 0.5, color: "#ef4444", shape: 'box' as const },
        { position: [0, 2, -5] as [number, number, number], scale: 0.6, color: "#10b981", shape: 'torus' as const },
      ],
      cameraPosition: [0, 0, 8] as [number, number, number],
      lightColor: "#f59e0b"
    },
    creative: {
      shapes: [
        { position: [-2, 0, -3] as [number, number, number], scale: 0.8, color: "#8b5cf6", shape: 'sphere' as const },
        { position: [2, 1, -4] as [number, number, number], scale: 0.6, color: "#ec4899", shape: 'torus' as const },
        { position: [0, -2, -5] as [number, number, number], scale: 0.4, color: "#06b6d4", shape: 'box' as const },
      ],
      cameraPosition: [0, 0, 8] as [number, number, number],
      lightColor: "#8b5cf6"
    },
    professional: {
      shapes: [
        { position: [-1, 1, -4] as [number, number, number], scale: 0.5, color: "#6366f1", shape: 'box' as const },
        { position: [1, -1, -3] as [number, number, number], scale: 0.6, color: "#3b82f6", shape: 'sphere' as const },
      ],
      cameraPosition: [0, 0, 8] as [number, number, number],
      lightColor: "#6366f1"
    }
  };

  const config = themeConfig[theme];

  return (
    <div className={`absolute inset-0 -z-10 opacity-30 ${className}`}>
      <Canvas camera={{ position: config.cameraPosition, fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color={config.lightColor} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ffffff" />
        
        <Stars radius={50} depth={50} count={200} factor={2} saturation={0} fade />
        
        {config.shapes.map((shape, index) => (
          <AnimatedShape
            key={index}
            position={shape.position}
            scale={shape.scale}
            color={shape.color}
            shape={shape.shape}
            rotationSpeed={0.005 + index * 0.002}
          />
        ))}
        
        <CodeParticles />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;