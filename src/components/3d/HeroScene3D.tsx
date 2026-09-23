import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // Dark Studio Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group for the physical camera lens
    const lensGroup = new THREE.Group();
    // Default architectural studio angle (tilted to show front glass and barrel details)
    lensGroup.rotation.x = 0.38;
    lensGroup.rotation.y = -0.52;
    lensGroup.rotation.z = -0.12;
    scene.add(lensGroup);

    // --- MATERIALS (Photographed in a dark studio) ---
    // 1. Dark anodized brushed aluminum (matte black metal with fine roughness)
    const barrelMetal = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.38,
      metalness: 0.85,
    });

    // 2. Deep charcoal textured ring (rubberized focus grip)
    const gripMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f10,
      roughness: 0.75,
      metalness: 0.25,
    });

    // 3. Machined bayonet flange (cold steel mount at rear)
    const steelMount = new THREE.MeshStandardMaterial({
      color: 0x48484f,
      roughness: 0.2,
      metalness: 0.95,
    });

    // 4. Optical glass front element with deep emerald/violet anti-reflective coating
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x081716,
      emissive: 0x010505,
      roughness: 0.04,
      metalness: 0.1,
      transmission: 0.75,
      ior: 1.65,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    // 5. Internal optical element (rear concave element visible through glass)
    const innerGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f1520,
      roughness: 0.02,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.55,
      clearcoat: 1.0,
    });

    // 6. Brass aperture ring accent
    const brassAccent = new THREE.MeshStandardMaterial({
      color: 0x8a7042,
      roughness: 0.3,
      metalness: 0.9,
    });

    // --- PROCEDURAL ENGRAVING TEXTURE ---
    // Generate an authentic lens marking canvas texture for distance scale & focal markings
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#141416';
      ctx.fillRect(0, 0, 1024, 256);

      ctx.fillStyle = '#9ca3af';
      ctx.font = 'bold 20px monospace';
      ctx.fillText('50mm F/1.2', 80, 70);
      ctx.fillText('Ø 77mm  MADE IN STUDIO', 340, 70);
      ctx.fillText('FOCAL SYSTEM', 740, 70);

      // Distance scale markings
      ctx.font = '16px monospace';
      ctx.fillStyle = '#e5e7eb';
      const distances = ['∞', '5', '3', '2', '1.5', '1.2', '1.0', '0.8', '0.6', '0.45m'];
      distances.forEach((d, i) => {
        const x = 70 + i * 92;
        ctx.fillRect(x + 12, 110, 2, 18);
        ctx.fillText(d, x, 155);
      });

      // Aperture indices
      ctx.fillStyle = '#f59e0b'; // subtle amber index
      ctx.font = '15px monospace';
      const apertures = ['1.2', '2', '2.8', '4', '5.6', '8', '11', '16'];
      apertures.forEach((a, i) => {
        const x = 90 + i * 115;
        ctx.fillText(`f/${a}`, x, 215);
      });
    }
    const markingsTexture = new THREE.CanvasTexture(canvas);
    markingsTexture.wrapS = THREE.RepeatWrapping;

    const engravedRingMat = new THREE.MeshStandardMaterial({
      map: markingsTexture,
      roughness: 0.36,
      metalness: 0.8,
    });

    // --- CONSTRUCT THE CAMERA LENS GEOMETRY ---

    // 1. Rear Bayonet Mount (Cold Chrome/Steel)
    const mountGeom = new THREE.CylinderGeometry(0.92, 0.92, 0.35, 48);
    const mountMesh = new THREE.Mesh(mountGeom, steelMount);
    mountMesh.position.y = -1.25;
    lensGroup.add(mountMesh);

    // Rear contacts/locking tabs
    for (let i = 0; i < 3; i++) {
      const tabGeom = new THREE.BoxGeometry(0.18, 0.12, 0.28);
      const tabMesh = new THREE.Mesh(tabGeom, steelMount);
      const angle = (i * Math.PI * 2) / 3;
      tabMesh.position.set(Math.cos(angle) * 0.94, -1.35, Math.sin(angle) * 0.94);
      tabMesh.rotation.y = angle;
      lensGroup.add(tabMesh);
    }

    // 2. Base Barrel Section
    const baseBarrelGeom = new THREE.CylinderGeometry(1.22, 1.15, 0.45, 48);
    const baseBarrel = new THREE.Mesh(baseBarrelGeom, barrelMetal);
    baseBarrel.position.y = -0.9;
    lensGroup.add(baseBarrel);

    // Red lens alignment dot (Classic Leica / Cinema Lens trait)
    const redDotGeom = new THREE.SphereGeometry(0.04, 16, 16);
    const redDotMat = new THREE.MeshBasicMaterial({ color: 0xd92323 });
    const redDot = new THREE.Mesh(redDotGeom, redDotMat);
    redDot.position.set(0, -0.9, 1.23);
    lensGroup.add(redDot);

    // 3. Aperture Control Ring with milled teeth
    const apertureRingGeom = new THREE.CylinderGeometry(1.26, 1.26, 0.32, 48);
    const apertureRing = new THREE.Mesh(apertureRingGeom, barrelMetal);
    apertureRing.position.y = -0.56;
    lensGroup.add(apertureRing);

    // Milled knurled teeth around the aperture ring
    const toothCount = 36;
    const toothGeom = new THREE.BoxGeometry(0.04, 0.28, 0.05);
    for (let i = 0; i < toothCount; i++) {
      const angle = (i * Math.PI * 2) / toothCount;
      const tooth = new THREE.Mesh(toothGeom, gripMaterial);
      tooth.position.set(Math.cos(angle) * 1.27, -0.56, Math.sin(angle) * 1.27);
      tooth.rotation.y = -angle;
      lensGroup.add(tooth);
    }

    // 4. Marked Focus / Distance Scale Cylinder (with the engraved texture)
    const scaleGeom = new THREE.CylinderGeometry(1.3, 1.3, 0.5, 64);
    const scaleMesh = new THREE.Mesh(scaleGeom, engravedRingMat);
    scaleMesh.position.y = -0.18;
    lensGroup.add(scaleMesh);

    // 5. Main Focus Grip Section (wide knurled rubber / machined aluminum)
    const focusGripGeom = new THREE.CylinderGeometry(1.34, 1.34, 0.65, 64);
    const focusGrip = new THREE.Mesh(focusGripGeom, gripMaterial);
    focusGrip.position.y = 0.35;
    lensGroup.add(focusGrip);

    // Fine ribbed knurling bands on focus ring
    const gripRibCount = 48;
    const ribGeom = new THREE.BoxGeometry(0.03, 0.6, 0.04);
    for (let i = 0; i < gripRibCount; i++) {
      const angle = (i * Math.PI * 2) / gripRibCount;
      const rib = new THREE.Mesh(ribGeom, barrelMetal);
      rib.position.set(Math.cos(angle) * 1.35, 0.35, Math.sin(angle) * 1.35);
      rib.rotation.y = -angle;
      lensGroup.add(rib);
    }

    // 6. Front Flared Bevel & Filter Thread Rim
    const frontRimGeom = new THREE.CylinderGeometry(1.42, 1.34, 0.45, 64);
    const frontRim = new THREE.Mesh(frontRimGeom, barrelMetal);
    frontRim.position.y = 0.85;
    lensGroup.add(frontRim);

    // Front bezel retaining ring
    const bezelGeom = new THREE.TorusGeometry(1.36, 0.04, 16, 64);
    const bezel = new THREE.Mesh(bezelGeom, brassAccent);
    bezel.position.y = 1.05;
    bezel.rotation.x = Math.PI / 2;
    lensGroup.add(bezel);

    // 7. Stepped interior baffle cone leading to aperture iris
    const coneGeom = new THREE.CylinderGeometry(0.9, 1.3, 0.35, 48, 1, true);
    const coneMesh = new THREE.Mesh(coneGeom, gripMaterial);
    coneMesh.position.y = 0.9;
    lensGroup.add(coneMesh);

    // 8. Front Optical Glass Element (curved lens with anti-reflective coating)
    const frontLensGeom = new THREE.SphereGeometry(1.15, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.45);
    const frontLens = new THREE.Mesh(frontLensGeom, glassMaterial);
    frontLens.position.y = 0.55;
    frontLens.rotation.x = 0;
    lensGroup.add(frontLens);

    // 9. Secondary deep internal lens element (adds optical depth and internal reflections)
    const deepLensGeom = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.4);
    const deepLens = new THREE.Mesh(deepLensGeom, innerGlassMat);
    deepLens.position.y = 0.3;
    lensGroup.add(deepLens);

    // --- DARK STUDIO LIGHTING SETUP ---
    // Clean, photographic lights designed to reveal metal bevels and glass coating
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Key Light: Overhead soft daylight strip
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    // Cool Specular Rim: Backlight defining the silhouette and metal sheen
    const rimLight = new THREE.DirectionalLight(0xa5b4fc, 2.8);
    rimLight.position.set(-4, 2, -4);
    scene.add(rimLight);

    // Warm Low Fill: Subtle studio warmth on shadow side
    const warmFill = new THREE.PointLight(0xe2d6c3, 1.6, 12);
    warmFill.position.set(-3, -3, 2);
    scene.add(warmFill);

    // Top Front Glare: Accents the anti-reflective glass coating
    const glassSpot = new THREE.SpotLight(0x38bdf8, 3.5, 10, Math.PI / 4, 0.4, 1);
    glassSpot.position.set(1.5, 5, 2.5);
    glassSpot.target = frontLens;
    scene.add(glassSpot);

    // --- INTERACTION & ANIMATION ---
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 0.5;
      targetY = (y - 0.5) * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Extremely slow, physical rotation (feels like an authentic product reveal)
      const baseRotY = -0.52 + elapsed * 0.08;
      const baseRotX = 0.38 + Math.sin(elapsed * 0.1) * 0.04;

      // Smooth mouse parallax damping
      currentX += (targetX - currentX) * 0.035;
      currentY += (targetY - currentY) * 0.035;

      lensGroup.rotation.y = baseRotY + currentX;
      lensGroup.rotation.x = baseRotX + currentY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      barrelMetal.dispose();
      gripMaterial.dispose();
      steelMount.dispose();
      glassMaterial.dispose();
      innerGlassMat.dispose();
      brassAccent.dispose();
      engravedRingMat.dispose();
      markingsTexture.dispose();
      mountGeom.dispose();
      baseBarrelGeom.dispose();
      redDotGeom.dispose();
      apertureRingGeom.dispose();
      scaleGeom.dispose();
      focusGripGeom.dispose();
      frontRimGeom.dispose();
      bezelGeom.dispose();
      coneGeom.dispose();
      frontLensGeom.dispose();
      deepLensGeom.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-auto select-none">
      <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[440px]" />
    </div>
  );
};
