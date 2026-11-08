import React, { useEffect, useRef, useState } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  layer: number; // 1 to 5 corresponding to the 5 levels
  color: string;
  size: number;
  label?: string;
}

interface Edge {
  source: number;
  target: number;
  strength: number;
}

interface Pulse {
  edgeIndex: number;
  progress: number;
  speed: number;
}

const LAYER_INFO = [
  { level: 1, name: "Level 1: Chatbot Surface", color: "#60A5FA", desc: "Baseline prompts & chat interfaces" },
  { level: 2, name: "Level 2: Context & Memory", color: "#38BDF8", desc: "Permanent memory & RAG knowledge grounding" },
  { level: 3, name: "Level 3: Automated Pipelines", color: "#34D399", desc: "Multi-step webhook & trigger automation" },
  { level: 4, name: "Level 4: Autonomous Agents", color: "#FBBF24", desc: "Multi-agent tool managers & supervisors" },
  { level: 5, name: "Level 5: The AI Operating System", color: "#F43F5E", desc: "Custom Agent SDK & enterprise harnesses" },
];

export const AnatomyBrainHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [exploded, setExploded] = useState(false);
  const [, setExplodeFactor] = useState(0);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Rotation angles
  const anglesRef = useRef({ yaw: 0.35, pitch: -0.15 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const targetExplodeRef = useRef(0);
  const currentExplodeRef = useRef(0);

  // Generate anatomical brain nodes
  const nodesRef = useRef<Node3D[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);

  // Initialize brain geometry once
  useEffect(() => {
    const nodes: Node3D[] = [];
    const count = 140;

    // Mathematical anatomical brain model (two hemispheres with cortical foldings)
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Ellipsoidal brain shape with mid-sagittal fissure indent
      const r = 110 + (Math.sin(theta * 3) * Math.cos(phi * 4) * 16);
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = (r * 0.78) * Math.cos(phi);
      let z = (r * 0.95) * Math.sin(phi) * Math.sin(theta);

      // Deepen central fissure between left and right hemispheres
      if (Math.abs(x) < 22) {
        y *= 0.85;
      }
      if (x > 0) x += 8;
      if (x < 0) x -= 8;

      // Assign to anatomical layers 1 to 5 based on depth and vertical placement
      let layer = 1;
      const distFromCenter = Math.sqrt(x * x + y * y + z * z);
      if (distFromCenter < 50 && y < -10) {
        layer = 5; // Brainstem / Core harness
      } else if (distFromCenter < 75) {
        layer = 4; // Subcortical / Agent manager
      } else if (y > 10 && Math.abs(x) < 70) {
        layer = 3; // Cortical pathways / Pipelines
      } else if (distFromCenter < 105) {
        layer = 2; // Memory / RAG layer
      } else {
        layer = 1; // Outer Chatbot surface
      }

      const layerColor = LAYER_INFO[layer - 1].color;

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        layer,
        color: layerColor,
        size: layer === 5 ? 3.5 : layer === 4 ? 3.0 : 2.2,
      });
    }

    // Connect nodes into synaptic neural edges
    const edges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dz = nodes[i].baseZ - nodes[j].baseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Connect nearby nodes or same-layer clusters
        if (dist < 34 && connections < 4) {
          edges.push({
            source: i,
            target: j,
            strength: Math.max(0.15, 1 - dist / 34),
          });
          connections++;
        }
      }
    }

    // Initialize travelling pulse waves
    const pulses: Pulse[] = [];
    for (let k = 0; k < 12; k++) {
      pulses.push({
        edgeIndex: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.015,
      });
    }

    nodesRef.current = nodes;
    edgesRef.current = edges;
    pulsesRef.current = pulses;
  }, []);

  // Update target explode factor
  useEffect(() => {
    targetExplodeRef.current = exploded ? 1 : 0;
  }, [exploded]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const render = () => {
      // Smoothly interpolate explode factor
      currentExplodeRef.current += (targetExplodeRef.current - currentExplodeRef.current) * 0.08;
      setExplodeFactor(currentExplodeRef.current);

      // Auto-rotation when not interacting
      if (!isDraggingRef.current) {
        anglesRef.current.yaw += 0.0035;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 380;

      const yaw = anglesRef.current.yaw;
      const pitch = anglesRef.current.pitch;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      const explode = currentExplodeRef.current;
      const nodes = nodesRef.current;
      const edges = edgesRef.current;
      const pulses = pulsesRef.current;

      // Project nodes with exploded displacement along layer axes
      const projectedNodes: { x: number; y: number; z: number; color: string; size: number; layer: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Explode calculation: layers shift outward along Y (vertical hierarchy) and Z
        const layerOffset = (node.layer - 3) * 65 * explode;
        const radialMultiplier = 1 + (explode * 0.35);

        let curX = node.baseX * radialMultiplier;
        let curY = (node.baseY * radialMultiplier) + layerOffset;
        let curZ = node.baseZ * radialMultiplier;

        // 3D rotation
        // 1. Yaw around Y
        const x1 = curX * cosY - curZ * sinY;
        const z1 = curX * sinY + curZ * cosY;

        // 2. Pitch around X
        const y2 = curY * cosP - z1 * sinP;
        const z2 = curY * sinP + z1 * cosP;

        // Perspective projection
        const fov = 420;
        const pScale = (fov / (fov + z2)) * scale;
        const px = cx + x1 * pScale;
        const py = cy + y2 * pScale;

        projectedNodes.push({
          x: px,
          y: py,
          z: z2,
          color: node.color,
          size: node.size * pScale * 1.1,
          layer: node.layer,
        });
      }

      // Draw Edges
      for (let e = 0; e < edges.length; e++) {
        const edge = edges[e];
        const p1 = projectedNodes[edge.source];
        const p2 = projectedNodes[edge.target];
        if (!p1 || !p2) continue;

        // Dim edges when layers are exploded apart unless on the same layer
        const sameLayer = p1.layer === p2.layer;
        const layerAlpha = sameLayer ? 0.35 : Math.max(0.04, 0.25 - explode * 0.22);
        
        const isDimmed = activeLayer !== null && p1.layer !== activeLayer && p2.layer !== activeLayer;
        const finalAlpha = isDimmed ? 0.05 : layerAlpha * edge.strength;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(147, 197, 253, ${finalAlpha})`;
        ctx.lineWidth = sameLayer ? 0.9 : 0.5;
        ctx.stroke();
      }

      // Update & Draw Synaptic Pulses
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.edgeIndex = Math.floor(Math.random() * edges.length);
        }

        const edge = edges[pulse.edgeIndex];
        if (!edge) continue;
        const p1 = projectedNodes[edge.source];
        const p2 = projectedNodes[edge.target];
        if (!p1 || !p2) continue;

        const pulseX = p1.x + (p2.x - p1.x) * pulse.progress;
        const pulseY = p1.y + (p2.y - p1.y) * pulse.progress;

        const pulseAlpha = Math.sin(pulse.progress * Math.PI) * 0.85;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 212, 18, ${pulseAlpha})`;
        ctx.shadowColor = "#FDD412";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Sort nodes by Z depth for realistic occlusion
      const sortedIndices = projectedNodes
        .map((node, idx) => ({ idx, z: node.z }))
        .sort((a, b) => b.z - a.z);

      // Draw Nodes
      for (let s = 0; s < sortedIndices.length; s++) {
        const item = projectedNodes[sortedIndices[s].idx];
        const isHighlight = activeLayer === null || item.layer === activeLayer;
        const alpha = isHighlight ? 0.9 : 0.2;

        ctx.beginPath();
        ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
        ctx.fillStyle = item.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Glowing core for high layers (Level 4 and 5)
        if (item.layer >= 4 && isHighlight) {
          ctx.beginPath();
          ctx.arc(item.x, item.y, item.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = item.color;
          ctx.globalAlpha = 0.15;
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeLayer]);

  // Touch and Mouse Interaction Handlers
  const handlePointerDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: clientX, y: clientY };
    setIsInteracting(true);
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - lastMouseRef.current.x;
    const dy = clientY - lastMouseRef.current.y;

    anglesRef.current.yaw += dx * 0.008;
    anglesRef.current.pitch = Math.max(-0.6, Math.min(0.6, anglesRef.current.pitch + dy * 0.008));

    lastMouseRef.current = { x: clientX, y: clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setTimeout(() => setIsInteracting(false), 800);
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#092755] border border-white/10 p-5 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col items-center">
      {/* Top Status Header */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 mb-2 z-20">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FDD412] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#FDD412] uppercase">
            Anatomy of AI · Cognitive Architecture
          </span>
        </div>
        <button
          onClick={() => setExploded((prev) => !prev)}
          className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all ${
            exploded
              ? "bg-[#FDD412] text-[#092755] border-[#FDD412] shadow-[0_0_15px_rgba(253,212,18,0.3)]"
              : "bg-white/5 text-gray-200 border-white/20 hover:bg-white/10"
          }`}
        >
          {exploded ? "Assemble Engine" : "Dissect Anatomy"}
        </button>
      </div>

      {/* Main 3D Canvas */}
      <div
        className="relative w-full h-[320px] sm:h-[380px] cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
        onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => {
          if (e.touches[0]) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }}
        onTouchEnd={handlePointerUp}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Subtle helper pill on mobile / desktop */}
        <div
          className={`absolute bottom-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-gray-300 font-mono transition-opacity pointer-events-none ${
            isInteracting ? "opacity-0" : "opacity-80"
          }`}
        >
          ↻ Touch or drag to rotate 3D view
        </div>
      </div>

      {/* Interactive 5 Layers Pill Controls */}
      <div className="w-full mt-3 z-20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
            Inspect Cognitive Layers:
          </span>
          {activeLayer && (
            <button
              onClick={() => setActiveLayer(null)}
              className="text-[10px] text-[#FDD412] font-mono underline hover:text-white"
            >
              Reset View
            </button>
          )}
        </div>

        <div className="grid grid-cols-5 gap-1.5 w-full">
          {LAYER_INFO.map((item) => {
            const isSelected = activeLayer === item.level;
            return (
              <button
                key={item.level}
                onClick={() => {
                  setActiveLayer(isSelected ? null : item.level);
                  if (!exploded) setExploded(true);
                }}
                className={`flex flex-col items-center justify-center p-2 rounded-xl text-center border transition-all ${
                  isSelected
                    ? "bg-white/20 border-[#FDD412] shadow-[0_0_10px_rgba(253,212,18,0.2)] scale-[1.03]"
                    : "bg-white/5 border-white/5 hover:bg-white/10 text-gray-300"
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mb-1"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[10px] font-bold font-mono text-white">L{item.level}</span>
                <span className="text-[9px] text-gray-400 truncate w-full hidden sm:block">
                  {item.name.replace(/Level \d: /, "")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Micro-Description */}
        {activeLayer && (
          <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-left animate-in fade-in">
            <div>
              <div className="text-xs font-bold text-white flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: LAYER_INFO[activeLayer - 1].color }}
                />
                <span>{LAYER_INFO[activeLayer - 1].name}</span>
              </div>
              <p className="text-[11px] text-gray-300 font-light mt-0.5">
                {LAYER_INFO[activeLayer - 1].desc}
              </p>
            </div>
            <a
              href="#ai-levels"
              className="text-[11px] font-bold text-[#FDD412] bg-[#FDD412]/10 px-2.5 py-1 rounded-lg border border-[#FDD412]/20 hover:bg-[#FDD412] hover:text-[#092755] transition-all whitespace-nowrap ml-3"
            >
              Learn More →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnatomyBrainHero;
