"use client";

import { ContactShadows, Edges, Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export type RoomId = "living" | "kitchen" | "studio" | "suite";

interface HouseSceneProps {
  selectedRoom: RoomId;
  onSelectRoom: (room: RoomId) => void;
  reducedMotion: boolean;
}

interface RoomVolumeProps {
  id: RoomId;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  selectedRoom: RoomId;
  onSelectRoom: (room: RoomId) => void;
}

function RoomVolume({
  id,
  position,
  size,
  color,
  selectedRoom,
  onSelectRoom,
}: RoomVolumeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const active = selectedRoom === id;

  useFrame(() => {
    const material = meshRef.current?.material;
    if (material instanceof THREE.MeshStandardMaterial) {
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        active ? 0.82 : 0.08,
        0.08,
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      receiveShadow
      onClick={(event) => {
        event.stopPropagation();
        onSelectRoom(id);
      }}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={active ? color : "#202723"}
        emissive={color}
        emissiveIntensity={active ? 0.82 : 0.08}
        metalness={0.12}
        roughness={0.42}
      />
      <Edges color={active ? "#dfffaa" : "#536057"} opacity={active ? 1 : 0.5} />
    </mesh>
  );
}

function Wall({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color="#95a49a"
        metalness={0.15}
        opacity={0.24}
        roughness={0.18}
        transparent
        transmission={0.32}
      />
    </mesh>
  );
}

function Furniture() {
  return (
    <group>
      <group position={[-2.15, 0.58, 1.05]}>
        <mesh castShadow>
          <boxGeometry args={[2.2, 0.45, 0.8]} />
          <meshStandardMaterial color="#d4d0c6" roughness={0.78} />
        </mesh>
        <mesh position={[0, 0.36, 0.28]} castShadow>
          <boxGeometry args={[2.05, 0.42, 0.2]} />
          <meshStandardMaterial color="#aaa69c" roughness={0.8} />
        </mesh>
      </group>
      <mesh position={[-2.15, 0.4, 2.05]} castShadow>
        <cylinderGeometry args={[0.62, 0.72, 0.32, 32]} />
        <meshStandardMaterial color="#6c5b40" metalness={0.52} roughness={0.3} />
      </mesh>

      <group position={[2.05, 0.55, 1.05]}>
        <mesh castShadow>
          <boxGeometry args={[2.5, 0.8, 0.72]} />
          <meshStandardMaterial color="#2d332f" roughness={0.48} />
        </mesh>
        {[[-0.72, 0.66], [0, 0.66], [0.72, 0.66]].map(([x, z]) => (
          <mesh key={`${x}-${z}`} position={[x, 0.48, z]} castShadow>
            <cylinderGeometry args={[0.22, 0.28, 0.12, 24]} />
            <meshStandardMaterial color="#a88a57" metalness={0.7} roughness={0.25} />
          </mesh>
        ))}
      </group>

      <group position={[-2.1, 0.46, -1.75]}>
        <mesh castShadow>
          <boxGeometry args={[1.6, 0.12, 0.9]} />
          <meshStandardMaterial color="#9b7d50" metalness={0.4} roughness={0.38} />
        </mesh>
        <mesh position={[0, 0.54, -0.35]} castShadow>
          <boxGeometry args={[1.3, 0.88, 0.08]} />
          <meshStandardMaterial color="#17211c" emissive="#80ffb0" emissiveIntensity={0.16} />
        </mesh>
      </group>

      <group position={[2.05, 0.52, -1.72]}>
        <mesh castShadow>
          <boxGeometry args={[2.18, 0.45, 1.5]} />
          <meshStandardMaterial color="#d8d4ca" roughness={0.84} />
        </mesh>
        <mesh position={[0, 0.42, -0.58]} castShadow>
          <boxGeometry args={[2.05, 0.56, 0.18]} />
          <meshStandardMaterial color="#ada89e" roughness={0.78} />
        </mesh>
      </group>
    </group>
  );
}

function HouseModel({ selectedRoom, onSelectRoom, reducedMotion }: HouseSceneProps) {
  const houseRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!reducedMotion && houseRef.current) {
      houseRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.035;
      houseRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <Float speed={reducedMotion ? 0 : 0.6} rotationIntensity={0} floatIntensity={0.08}>
      <group ref={houseRef} rotation={[0, -0.42, 0]}>
        <mesh position={[0, -0.25, 0]} receiveShadow castShadow>
          <boxGeometry args={[8.9, 0.45, 6.8]} />
          <meshStandardMaterial color="#111713" metalness={0.32} roughness={0.58} />
          <Edges color="#526155" opacity={0.62} />
        </mesh>

        <RoomVolume
          id="living"
          position={[-2.1, 0.06, 1.55]}
          size={[3.75, 0.18, 2.65]}
          color="#a4ff74"
          selectedRoom={selectedRoom}
          onSelectRoom={onSelectRoom}
        />
        <RoomVolume
          id="kitchen"
          position={[2.05, 0.06, 1.55]}
          size={[3.55, 0.18, 2.65]}
          color="#ffd36a"
          selectedRoom={selectedRoom}
          onSelectRoom={onSelectRoom}
        />
        <RoomVolume
          id="studio"
          position={[-2.1, 0.06, -1.62]}
          size={[3.75, 0.18, 2.45]}
          color="#70d7ff"
          selectedRoom={selectedRoom}
          onSelectRoom={onSelectRoom}
        />
        <RoomVolume
          id="suite"
          position={[2.05, 0.06, -1.62]}
          size={[3.55, 0.18, 2.45]}
          color="#c9a7ff"
          selectedRoom={selectedRoom}
          onSelectRoom={onSelectRoom}
        />

        <Wall position={[-4.32, 1.45, 0]} size={[0.18, 2.9, 6.2]} />
        <Wall position={[4.32, 1.45, 0]} size={[0.18, 2.9, 6.2]} />
        <Wall position={[0, 1.45, -3.18]} size={[8.5, 2.9, 0.18]} />
        <Wall position={[-2.1, 1.15, 0]} size={[0.12, 2.3, 0.36]} />
        <Wall position={[2.05, 1.15, 0]} size={[0.12, 2.3, 0.36]} />
        <Wall position={[0, 1.2, 0]} size={[0.16, 2.4, 6.15]} />

        <group position={[0, 3.32, 0]}>
          <mesh position={[-2.12, 0, 0]} rotation={[0, 0, -0.16]} castShadow>
            <boxGeometry args={[4.45, 0.14, 6.45]} />
            <meshStandardMaterial color="#334038" metalness={0.34} roughness={0.38} transparent opacity={0.72} />
          </mesh>
          <mesh position={[2.12, 0, 0]} rotation={[0, 0, 0.16]} castShadow>
            <boxGeometry args={[4.45, 0.14, 6.45]} />
            <meshStandardMaterial color="#334038" metalness={0.34} roughness={0.38} transparent opacity={0.72} />
          </mesh>
        </group>

        <Furniture />

        {[
          [-2.9, 0.4, 0.5],
          [2.95, 0.4, 0.55],
          [-2.95, 0.4, -2.45],
          [2.95, 0.4, -2.4],
        ].map(([x, y, z], index) => (
          <mesh key={`${x}-${z}`} position={[x, y, z]} castShadow>
            <sphereGeometry args={[0.075, 18, 18]} />
            <meshStandardMaterial
              color="#bcff94"
              emissive="#79ff76"
              emissiveIntensity={1.4 + index * 0.08}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function HouseScene(props: HouseSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [9.2, 7.4, 9.4], fov: 38, near: 0.1, far: 80 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onPointerMissed={() => props.onSelectRoom("living")}
    >
      <color attach="background" args={["#09100c"]} />
      <fog attach="fog" args={["#09100c", 14, 27]} />
      <ambientLight intensity={0.72} color="#cbe0d1" />
      <hemisphereLight args={["#dffff0", "#101510", 1.25]} />
      <directionalLight
        position={[5, 10, 6]}
        intensity={2.2}
        color="#efffe9"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 3, -4]} intensity={14} color="#75ff91" distance={12} />
      <pointLight position={[5, 4, 4]} intensity={11} color="#c9a96e" distance={12} />

      <Suspense fallback={null}>
        <HouseModel {...props} />
        <ContactShadows
          position={[0, -0.52, 0]}
          opacity={0.58}
          scale={16}
          blur={2.4}
          far={9}
          color="#020503"
        />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4.6}
        maxPolarAngle={Math.PI / 2.25}
        autoRotate={!props.reducedMotion}
        autoRotateSpeed={0.28}
      />
    </Canvas>
  );
}
