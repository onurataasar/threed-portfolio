"use client";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import {
  Tween,
  Easing,
  update as TweenUpdate,
} from "three/examples/jsm/libs/tween.module.js";

const Cube = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += Math.sin(state.clock.getElapsedTime()) * 0.01;
    meshRef.current.rotation.x += Math.sin(state.clock.getElapsedTime()) * 0.01;
    TweenUpdate();
  });

  useEffect(() => {
    if (hovered) {
      new Tween(meshRef.current.scale)
        .to({ x: 1.5, y: 1.5, z: 1.5 }, 500)
        .easing(Easing.Quadratic.Out)
        .start();
    } else {
      new Tween(meshRef.current.scale)
        .to({ x: 1, y: 1, z: 1 }, 500)
        .easing(Easing.Quadratic.Out)
        .start();
    }
  }, [hovered]);

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default Cube;
