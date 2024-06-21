import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Cube from "./shared/Cube";

const Links = () => {
  return (
    <Canvas className="max-w-auto max-h-fit">
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={90}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[10, 10, 10]} intensity={Math.PI} decay={0} />
      <Cube
        onClick={() => {
          window.open("https://www.github.com/onurataasar/");
        }}
        position={[-2.5, 0, 0]}
        material={
          new THREE.MeshStandardMaterial({
            normalMap: new THREE.TextureLoader().load("/github.png"),
            normalMapType: THREE.TangentSpaceNormalMap,
            color: "red",
          })
        }
      />
      <Cube
        onClick={() => {
          window.open("https://www.linkedin.com/in/onur-ata-asar/");
        }}
        position={[0, 0, 0]}
        material={
          new THREE.MeshStandardMaterial({
            normalMap: new THREE.TextureLoader().load("/linkedin.png"),
            normalMapType: THREE.TangentSpaceNormalMap,
            color: "firebrick",
          })
        }
      />
      <Cube
        onClick={() => {
          window.open("https://www.drive.google.com");
        }}
        position={[2.5, 0, 0]}
        material={
          new THREE.MeshStandardMaterial({
            normalMap: new THREE.TextureLoader().load("/cv.png"),
            normalMapType: THREE.TangentSpaceNormalMap,
            color: "orange",
          })
        }
      />
    </Canvas>
  );
};

export default Links;
