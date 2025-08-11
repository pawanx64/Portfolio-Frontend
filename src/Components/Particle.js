import React, { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// ---- Options extracted for clarity ----
const particleOptions = {
  autoPlay: true,
  background: { color: { value: "#000" }, opacity: 0.1 },
  fullScreen: { enable: true, zIndex: 0 },
  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: { enable: true, delay: 0.5 }
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 }
    }
  },

  particles: {
    number: {
      value: 80,
      density: { enable: true, width: 1920, height: 1080 }
    },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 3, startValue: "random" }
    },
    size: {
      value: { min: 0.1, max: 5 },
      animation: { enable: true, speed: 20, startValue: "random" }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "out" }
    },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.4,
      width: 1
    },
    twinkle: {
      particles: { enable: true, frequency: 0.05, opacity: 1, color: { value: "#ffff00" } },
      lines: { enable: true, frequency: 0.005, opacity: 1, color: { value: "#ff0000" } }
    }
  },

  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100,
  name: "Twinkle"
};

// ---- Component ----
export const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    (async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    })();
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles loaded:", container);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particleOptions}
    />
  );
};
