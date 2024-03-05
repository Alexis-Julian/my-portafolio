"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
let isActivate = false;
export default function Heart3D() {
  const refContainer: any = useRef(null);

  useEffect(() => {
    if (!isActivate) {
      isActivate = true;
      // === THREE.JS CODE START ===
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, height / width, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0x00000, 0);
      renderer.setSize(height, width);
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      refContainer.current && refContainer.current.appendChild(renderer.domElement);
      const LOADER = new THREE.TextureLoader();

      const earthGroup = new THREE.Group();
      scene.add(earthGroup);

      const geometry = new THREE.IcosahedronGeometry(1, 16);
      const material = new THREE.MeshBasicMaterial({ map: LOADER.load("8k_earthDay.jpg") });
      const earthMesh = new THREE.Mesh(geometry, material);
      earthGroup.add(earthMesh);

      const lightsMath = new THREE.MeshBasicMaterial({ map: LOADER.load("8k_earth_nightmap.jpg") });
      const lightMesh = new THREE.Mesh(geometry, lightsMath);
      earthGroup.add(lightMesh);

      const cloudsMat = new THREE.MeshStandardMaterial({
        map: LOADER.load("8k_earth_clouds.jpg"),
        blending: THREE.AdditiveBlending,
      });

      const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
      cloudsMesh.scale.setScalar(1.003);
      earthGroup.add(cloudsMesh);

      const sunLight = new THREE.DirectionalLight(0xffffff);
      sunLight.position.set(-2, 0.5, 1.5);
      scene.add(sunLight);

      camera.position.z = 2;
      var animate = function () {
        requestAnimationFrame(animate);
        cloudsMesh.rotation.y += 0.001;
        earthMesh.rotation.y += 0.001;
        lightMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);
  return <div className={`h-${height}px w-${width}px`} ref={refContainer}></div>;
}
