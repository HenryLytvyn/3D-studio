'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import css from './ModelPreview.module.css';

interface Props {
  file: File;
}

export default function ModelPreview({ file }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f5f5f5');

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(150, 150);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const url = URL.createObjectURL(file);
    const ext = file.name.split('.').pop()?.toLowerCase();

    const addObject = obj => {
      obj.rotation.x = -Math.PI / 2;
      scene.add(obj);
      animate();
    };

    if (ext === 'stl') {
      new STLLoader().load(url, geometry => {
        const material = new THREE.MeshStandardMaterial({ color: '#999' });
        addObject(new THREE.Mesh(geometry, material));
      });
    }

    if (ext === 'obj') {
      new OBJLoader().load(url, addObject);
    }

    if (ext === 'gltf' || ext === 'glb') {
      new GLTFLoader().load(url, gltf => addObject(gltf.scene));
    }

    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    return () => {
      URL.revokeObjectURL(url);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [file]);

  return <div ref={mountRef} className={css.modelPreview} />;
}
