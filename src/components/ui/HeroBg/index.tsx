"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 1000);
    camera.position.set(0, 1, 12);
    camera.lookAt(0, -2, -4);

    /* ── Grid sem diagonais: LineSegments manual ── */
    const SEG_X = 140;
    const SEG_Y = 70;
    const COLS = SEG_X + 1;
    const ROWS = SEG_Y + 1;
    const WIDTH = 32;
    const DEPTH = 18;

    const positions = new Float32Array(COLS * ROWS * 3);
    const colors    = new Float32Array(COLS * ROWS * 3);

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col;
        const x = (col / SEG_X - 0.5) * WIDTH;
        const z = (row / SEG_Y - 0.5) * DEPTH;

        positions[idx * 3]     = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        // gradiente cinza escuro (esq) → vermelho (dir)
        const t = Math.max(0, Math.min(1, (x + WIDTH / 2) / WIDTH));
        colors[idx * 3]     = 0.22 + t * (0.86 - 0.22);
        colors[idx * 3 + 1] = 0.22 * (1 - t);
        colors[idx * 3 + 2] = 0.22 * (1 - t);
      }
    }

    // índices: só horizontal + vertical (sem diagonal)
    const lineIdx: number[] = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < SEG_X; col++) {
        lineIdx.push(row * COLS + col, row * COLS + col + 1);
      }
    }
    for (let col = 0; col < COLS; col++) {
      for (let row = 0; row < SEG_Y; row++) {
        lineIdx.push(row * COLS + col, (row + 1) * COLS + col);
      }
    }

    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    geo.setAttribute("position", posAttr);
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
    geo.setIndex(lineIdx);

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
    });

    const lines = new THREE.LineSegments(geo, mat);
    lines.position.y = -4;
    lines.position.z = 2; // traz a malha levemente para frente da câmera
    scene.add(lines);

    const origPos = new Float32Array(positions);

    /* ── Loop ── */
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.007;

      for (let i = 0; i < COLS * ROWS; i++) {
        const ox = origPos[i * 3];
        const oz = origPos[i * 3 + 2];

        const y =
          Math.sin(ox * 0.38 + t * 0.9)  * 2.2 +
          Math.sin(oz * 0.29 + t * 1.17) * 1.8 +
          Math.sin((ox * 0.17 + oz * 0.23) + t * 0.73) * 1.6 +
          Math.sin(ox * 0.53 - oz * 0.41 + t * 1.31) * 1.1 +
          Math.sin(oz * 0.61 + ox * 0.11 + t * 0.57) * 0.9 +
          Math.sin((ox - oz) * 0.19 + t * 1.83) * 0.7 +
          Math.sin(ox * 0.07 + oz * 0.13 + t * 2.11) * 0.5;

        posAttr.setY(i, y);
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    const container = canvas.parentElement!;
    const observer = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    observer.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <Wrapper>
      <Canvas ref={canvasRef} />
    </Wrapper>
  );
}
