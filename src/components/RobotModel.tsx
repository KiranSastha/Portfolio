import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

type ThemeName = "dark" | "white" | "gold";

interface Theme {
  body: number;
  accent: number;
  glass: number;
  dark: number;
  glassEmi: number;
  accentEmi: number;
}

const THEMES: Record<ThemeName, Theme> = {
  dark:  { body: 0x1a1a1a, accent: 0xf5c842, glass: 0x63b3ed, dark: 0x111111, glassEmi: 0.4,  accentEmi: 0.3  },
  white: { body: 0xeeeeee, accent: 0x3b82f6, glass: 0x34d399, dark: 0xcccccc, glassEmi: 0.3,  accentEmi: 0.25 },
  gold:  { body: 0xb8860b, accent: 0xffd700, glass: 0xff6b35, dark: 0x7a5c00, glassEmi: 0.5,  accentEmi: 0.4  },
};

function makeMat(
  color: number,
  metalness: number,
  roughness: number,
  emissive = 0x000000,
  emissiveIntensity = 0,
  transparent = false,
  opacity = 1
) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity,
    transparent,
    opacity,
  });
}

function addMesh(
  parent: THREE.Object3D,
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

const RobotModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  // Expose theme setter and camera reset to buttons via ref
  const apiRef = useRef<{
    setTheme: (name: ThemeName) => void;
    resetCamera: () => void;
  } | null>(null);

  const setTheme = useCallback((name: ThemeName) => {
    apiRef.current?.setTheme(name);
  }, []);

  const resetCamera = useCallback(() => {
    apiRef.current?.resetCamera();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene ────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.2, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Ground ───────────────────────────────────────────────────────────────
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.ShadowMaterial({ opacity: 0.18 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.9;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // ── Materials ────────────────────────────────────────────────────────────
    let theme = THEMES.dark;
    let bodyMat  = makeMat(theme.body,   0.9,  0.2,  theme.accent, 0.04);
    let accentMat = makeMat(theme.accent, 0.7,  0.3,  theme.accent, theme.accentEmi);
    let glassMat  = makeMat(theme.glass,  0.1,  0.0,  theme.glass,  theme.glassEmi, true, 0.75);
    let darkMat   = makeMat(theme.dark,   0.95, 0.1);

    // ── Mesh registry (for theme swapping) ───────────────────────────────────
    const reg: Record<string, THREE.Mesh[]> = { body: [], accent: [], glass: [], dark: [] };

    function tracked(m: THREE.Mesh, type: string): THREE.Mesh {
      reg[type].push(m);
      return m;
    }

    function applyTheme(name: ThemeName) {
      theme = THEMES[name];
      bodyMat.dispose();   bodyMat   = makeMat(theme.body,   0.9,  0.2,  theme.accent, 0.04);
      accentMat.dispose(); accentMat = makeMat(theme.accent, 0.7,  0.3,  theme.accent, theme.accentEmi);
      glassMat.dispose();  glassMat  = makeMat(theme.glass,  0.1,  0.0,  theme.glass,  theme.glassEmi, true, 0.75);
      darkMat.dispose();   darkMat   = makeMat(theme.dark,   0.95, 0.1);
      reg.body.forEach(m   => { (m.material as THREE.MeshStandardMaterial).dispose(); m.material = bodyMat; });
      reg.accent.forEach(m => { (m.material as THREE.MeshStandardMaterial).dispose(); m.material = accentMat; });
      reg.glass.forEach(m  => { (m.material as THREE.MeshStandardMaterial).dispose(); m.material = glassMat; });
      reg.dark.forEach(m   => { (m.material as THREE.MeshStandardMaterial).dispose(); m.material = darkMat; });
    }

    // ── Geo shortcuts ─────────────────────────────────────────────────────────
    const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
    const C = (rt: number, rb: number, h: number, s = 12) => new THREE.CylinderGeometry(rt, rb, h, s);
    const S = (r: number, s = 10) => new THREE.SphereGeometry(r, s, s);

    // ── Robot ─────────────────────────────────────────────────────────────────
    const robot = new THREE.Group();
    scene.add(robot);

    // Body
    tracked(addMesh(robot, B(1.05, 1.25, 0.65), bodyMat), "body");
    tracked(addMesh(robot, B(0.06, 1.25, 0.06), accentMat, -0.42, 0, 0.32), "accent");
    tracked(addMesh(robot, B(0.06, 1.25, 0.06), accentMat,  0.42, 0, 0.32), "accent");
    tracked(addMesh(robot, B(0.55, 0.42, 0.06), darkMat,    0, 0.1, 0.33), "dark");
    const core = tracked(addMesh(robot, B(0.22, 0.22, 0.06), glassMat, 0, 0.1, 0.355), "glass");
    tracked(addMesh(robot, B(1.05, 0.05, 0.02), accentMat, 0, -0.5, 0.33), "accent");

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.88, 0);
    robot.add(headGroup);

    tracked(addMesh(headGroup, B(0.72, 0.62, 0.58), bodyMat), "body");
    const eyeL = tracked(addMesh(headGroup, B(0.13, 0.09, 0.06), glassMat, -0.16, 0.06, 0.3), "glass");
    const eyeR = tracked(addMesh(headGroup, B(0.13, 0.09, 0.06), glassMat,  0.16, 0.06, 0.3), "glass");
    tracked(addMesh(headGroup, B(0.72, 0.05, 0.02), accentMat, 0, -0.22, 0.3), "accent");
    tracked(addMesh(headGroup, C(0.025, 0.025, 0.28), darkMat, 0, 0.45, 0), "dark");
    const antBall = tracked(addMesh(headGroup, S(0.075), accentMat, 0, 0.61, 0), "accent");
    tracked(addMesh(headGroup, B(0.05, 0.05, 0.58), accentMat, 0, -0.28, 0), "accent");

    // Shoulders
    tracked(addMesh(robot, S(0.15), accentMat, -0.64, 0.52, 0), "accent");
    tracked(addMesh(robot, S(0.15), accentMat,  0.64, 0.52, 0), "accent");

    // Arms
    const armLG = new THREE.Group();
    armLG.position.set(-0.65, 0.1, 0);
    robot.add(armLG);
    tracked(addMesh(armLG, C(0.1, 0.11, 0.72, 10), bodyMat,   0, -0.36, 0), "body");
    tracked(addMesh(armLG, C(0.12, 0.1, 0.06, 10), accentMat, 0, 0, 0),     "accent");
    tracked(addMesh(armLG, B(0.24, 0.22, 0.2),      darkMat,   0, -0.77, 0), "dark");

    const armRG = new THREE.Group();
    armRG.position.set(0.65, 0.1, 0);
    robot.add(armRG);
    tracked(addMesh(armRG, C(0.1, 0.11, 0.72, 10), bodyMat,   0, -0.36, 0), "body");
    tracked(addMesh(armRG, C(0.12, 0.1, 0.06, 10), accentMat, 0, 0, 0),     "accent");
    tracked(addMesh(armRG, B(0.24, 0.22, 0.2),      darkMat,   0, -0.77, 0), "dark");

    // Waist
    tracked(addMesh(robot, C(0.35, 0.42, 0.18, 16), darkMat,   0, -0.71, 0), "dark");
    tracked(addMesh(robot, C(0.4,  0.35, 0.06, 16), accentMat, 0, -0.62, 0), "accent");

    // Legs
    const legLG = new THREE.Group();
    legLG.position.set(-0.29, -0.88, 0);
    robot.add(legLG);
    tracked(addMesh(legLG, C(0.14, 0.13, 0.72, 10), bodyMat,   0, -0.36, 0),     "body");
    tracked(addMesh(legLG, C(0.16, 0.14, 0.08, 10), accentMat, 0, 0, 0),          "accent");
    tracked(addMesh(legLG, B(0.38, 0.13, 0.46),      darkMat,   0, -0.79, 0.07),  "dark");
    tracked(addMesh(legLG, C(0.14, 0.14, 0.04, 10), accentMat, 0, -0.72, 0),      "accent");

    const legRG = new THREE.Group();
    legRG.position.set(0.29, -0.88, 0);
    robot.add(legRG);
    tracked(addMesh(legRG, C(0.14, 0.13, 0.72, 10), bodyMat,   0, -0.36, 0),     "body");
    tracked(addMesh(legRG, C(0.16, 0.14, 0.08, 10), accentMat, 0, 0, 0),          "accent");
    tracked(addMesh(legRG, B(0.38, 0.13, 0.46),      darkMat,   0, -0.79, 0.07),  "dark");
    tracked(addMesh(legRG, C(0.14, 0.14, 0.04, 10), accentMat, 0, -0.72, 0),      "accent");

    robot.position.y = 0.3;

    // ── Lighting ─────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    Object.assign(keyLight.shadow.camera, { left: -4, right: 4, top: 6, bottom: -4 });
    scene.add(keyLight);

    const fill = new THREE.DirectionalLight(0x63b3ed, 0.35);
    fill.position.set(-3, 1, -2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xf5c842, 0.5);
    rim.position.set(0, -2, -3);
    scene.add(rim);

    // ── Orbit (manual) ────────────────────────────────────────────────────────
    const orbit = { theta: 0, phi: Math.PI / 2.2, targetTheta: 0, targetPhi: Math.PI / 2.2 };
    let zoom = 6, targetZoom = 6;

    const drag = { active: false, startX: 0, startY: 0, startTheta: 0, startPhi: 0 };
    let lastTouchDist = 0;

    const updateCamera = () => {
      camera.position.set(
        orbit.theta === 0 && orbit.phi === 0 ? 0 : zoom * Math.sin(orbit.phi) * Math.sin(orbit.theta),
        zoom * Math.cos(orbit.phi) + 0.5,
        zoom * Math.sin(orbit.phi) * Math.cos(orbit.theta)
      );
      camera.lookAt(0, 0.5, 0);
    };

    const onMouseDown = (e: MouseEvent) => {
      drag.active = true;
      drag.startX = e.clientX; drag.startY = e.clientY;
      drag.startTheta = orbit.targetTheta; drag.startPhi = orbit.targetPhi;
      mount.style.cursor = "grabbing";
    };
    const onMouseUp = () => { drag.active = false; mount.style.cursor = ""; };
    const onMouseMove = (e: MouseEvent) => {
      if (!drag.active) return;
      const dx = (e.clientX - drag.startX) / mount.clientWidth;
      const dy = (e.clientY - drag.startY) / mount.clientHeight;
      orbit.targetTheta = drag.startTheta - dx * Math.PI * 2;
      orbit.targetPhi = Math.max(0.3, Math.min(Math.PI * 0.7, drag.startPhi + dy * Math.PI));
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetZoom = Math.max(2.5, Math.min(10, targetZoom + e.deltaY * 0.01));
    };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        drag.active = true;
        drag.startX = e.touches[0].clientX; drag.startY = e.touches[0].clientY;
        drag.startTheta = orbit.targetTheta; drag.startPhi = orbit.targetPhi;
      }
      if (e.touches.length === 2) {
        lastTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };
    const onTouchEnd = () => { drag.active = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && drag.active) {
        const dx = (e.touches[0].clientX - drag.startX) / mount.clientWidth;
        const dy = (e.touches[0].clientY - drag.startY) / mount.clientHeight;
        orbit.targetTheta = drag.startTheta - dx * Math.PI * 2;
        orbit.targetPhi = Math.max(0.3, Math.min(Math.PI * 0.7, drag.startPhi + dy * Math.PI));
      }
      if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        targetZoom = Math.max(2.5, Math.min(10, targetZoom - (dist - lastTouchDist) * 0.02));
        lastTouchDist = dist;
      }
    };

    mount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    mount.addEventListener("wheel", onWheel, { passive: false });
    mount.addEventListener("touchstart", onTouchStart, { passive: true });
    mount.addEventListener("touchend", onTouchEnd, { passive: true });
    mount.addEventListener("touchmove", onTouchMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    ro.observe(mount);

    // ── Expose API ────────────────────────────────────────────────────────────
    apiRef.current = {
      setTheme: applyTheme,
      resetCamera: () => {
        orbit.targetTheta = 0;
        orbit.targetPhi = Math.PI / 2.2;
        targetZoom = 6;
      },
    };

    // ── Animation loop ────────────────────────────────────────────────────────
    let frameId: number;
    let t = 0;
    let lastTime = 0;

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      t += dt;

      const lerpF = 1 - Math.pow(0.04, dt);
      orbit.theta += (orbit.targetTheta - orbit.theta) * lerpF;
      orbit.phi   += (orbit.targetPhi   - orbit.phi)   * lerpF;
      zoom        += (targetZoom - zoom) * lerpF;
      updateCamera();

      robot.position.y = 0.3 + Math.sin(t * 1.1) * 0.06;
      armLG.rotation.x =  Math.sin(t * 0.9) * 0.09;
      armRG.rotation.x = -Math.sin(t * 0.9) * 0.09;
      headGroup.rotation.x = Math.sin(t * 0.55) * 0.03;
      headGroup.rotation.z = Math.sin(t * 0.4)  * 0.02;

      const pulse = (Math.sin(t * 3) + 1) / 2;
      (antBall.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.2 + pulse * 0.7;
      (eyeL.material    as THREE.MeshStandardMaterial).emissiveIntensity = 0.15 + pulse * 0.55;
      (eyeR.material    as THREE.MeshStandardMaterial).emissiveIntensity = 0.15 + pulse * 0.55;
      (core.material    as THREE.MeshStandardMaterial).emissiveIntensity = 0.15 + pulse * 0.45;

      renderer.render(scene, camera);
    };
    animate(0);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      mount.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("wheel", onWheel);
      mount.removeEventListener("touchstart", onTouchStart);
      mount.removeEventListener("touchend", onTouchEnd);
      mount.removeEventListener("touchmove", onTouchMove);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      apiRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: 400 }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 400 }} />
      <div style={{
        position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 10,
      }}>
        {(["dark", "white", "gold"] as ThemeName[]).map(name => (
          <button key={name} onClick={() => setTheme(name)} style={{ fontSize: 12, padding: "6px 14px" }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
        <button onClick={resetCamera} title="Reset camera" style={{ fontSize: 12, padding: "6px 10px" }}>↺</button>
      </div>
      <p style={{
        position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
        fontSize: 12, opacity: 0.55, pointerEvents: "none", margin: 0,
      }}>
        drag · scroll to zoom
      </p>
    </div>
  );
};

export default RobotModel;
