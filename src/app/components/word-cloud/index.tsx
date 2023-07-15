'use client';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const arrayOfTech = [
  'node',
  'bootstrap',
  'tailwind',
  'three.js',
  'JavaScript',
  'React',
  'CSS',
  'HTML',
  'Three.js',
  'WordPress',
  'Sass',
  'MySQL',
  'Next.js',
  'REST API',
  'Git',
  'Github',
  'Node',
  'JSON',
  'npm',
  'Prisma',
  'Adobe XD',
  'Express',
  'Netlify',
  'nextjs',
];

function Word({ children, ...props }: any) {
  const fontProps = {
    fontSize: 2,
    letterSpacing: -0.02,
    'material-toneMapped': false,
  };

  const ref = useRef<any>(null);

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
      const material = ref.current.material as THREE.MeshBasicMaterial;
      material.color.set('#38bdf8');
    }
  });

  return <Text ref={ref} {...props} {...fontProps} children={children} />;
}

function Sphere({ count, radius }: { count: number; radius: number }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      spherical.set(radius, phi, theta);
      temp.push([
        new THREE.Vector3().setFromSpherical(spherical),
        arrayOfTech[i % arrayOfTech.length],
      ]);
    }
    return temp;
  }, [count, radius]);

  return (
    <group>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}

export default function Skills() {
  return (
    <div className="bg-transparent w-full h-[250px] sm:h-[300px]">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 30],
          fov: 90,
        }}
      >
        <fog attach="fog" args={['#FFFFFF', 0.1, 80]} />
        <Sphere count={arrayOfTech.length} radius={20} />
        <OrbitControls
          enableRotate={false}
          autoRotate
          autoRotateSpeed={2.5}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}
