"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mountRef = useRef(false)

  useEffect(() => {
    if (!canvasRef.current || mountRef.current) return
    mountRef.current = true

    const canvas = canvasRef.current

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      // Brand palette
      const vec3 c1 = vec3(0.033, 0.569, 0.800); // #0891CC
      const vec3 c2 = vec3(0.039, 0.686, 0.949); // #0AAFF2
      const vec3 c3 = vec3(0.220, 0.773, 0.996); // #38C5FF
      const vec3 c4 = vec3(0.831, 0.627, 0.090); // #D4A017
      const vec3 c5 = vec3(0.106, 0.369, 0.451); // #1B5E73
      const vec3 c6 = vec3(0.176, 0.314, 0.086); // #2D5016

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        float aspect = resolution.x / resolution.y;
        vec2 p = vec2(uv.x * aspect, uv.y);

        // Wave layers
        float w1 = sin(p.x * 1.8 + time * 0.4) * 0.15 + cos(p.y * 2.0 + time * 0.3) * 0.1;
        float w2 = sin(p.x * 3.2 + time * 0.6 + 1.2) * 0.12 + cos(p.y * 2.8 + time * 0.5) * 0.08;
        float w3 = sin(p.x * 5.0 + time * 0.8 + 2.4) * 0.08 + cos(p.y * 4.0 + time * 0.7) * 0.06;

        // Gradient from bottom-left to top-right
        float grad = (uv.x * 0.5 + uv.y * 0.5);

        // Blend colors based on waves + position
        vec3 col = mix(c1, c2, grad + w1 * 0.3);
        col = mix(col, c3, (1.0 - grad) * 0.3 + w2 * 0.2);
        col = mix(col, c5, w3 * 0.4);

        // Gold shimmer (c4) traveling diagonally
        float shimmer = sin(p.x * 4.0 - time * 0.5 + p.y * 3.0) * 0.5 + 0.5;
        shimmer *= sin(p.x * 6.0 + time * 0.7 + p.y * 5.0) * 0.5 + 0.5;
        col = mix(col, c4, shimmer * 0.08);

        // Subtle green (c6) at bottom
        float bottomGreen = smoothstep(0.0, 0.3, 1.0 - uv.y) * 0.15;
        col = mix(col, c6, bottomGreen);

        // Vignette
        float vignette = 1.0 - length(uv - 0.5) * 0.7;
        col *= vignette;

        gl_FragColor = vec4(col, 1.0);
      }
    `

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(new THREE.Color(0x0891CC))

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

    const uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time: { value: 0.0 },
    }

    const positions = new Float32Array([
      -1.0, -1.0, 0.0,
       1.0, -1.0, 0.0,
      -1.0,  1.0, 0.0,
       1.0, -1.0, 0.0,
      -1.0,  1.0, 0.0,
       1.0,  1.0, 0.0,
    ])

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let animationId: number

    const animate = () => {
      uniforms.time.value += 0.008
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height, false)
      uniforms.resolution.value = [width, height]
    }

    handleResize()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      scene.remove(mesh)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
      aria-hidden="true"
    />
  )
}
