import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { createPortal, useFrame } from '@react-three/fiber'
import { useFBO } from '@react-three/drei'
import { useControls } from 'leva'
import '../shaders/simulationMaterial'
import '../shaders/dofPointsMaterial'

export function ParticleField({size=220}) {
  const pointsRef = useRef()
  
  const props = useControls('Particle Field', {
    focus: { value: 4.85, min: 4, max: 6, step: 0.01 },
    speed: { value: 0.3, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 0.2, min: 0, max: 10, step: 0.1 },
    fov: { value: 0, min: 0, max: 200 },
    curl: { value: 0.11, min: 0.001, max: 0.5, step: 0.001 },
    // Animation controls
    animateFocus: { value: true },
    focusAnimationSpeed: { value: 0.5, min: 0.1, max: 2, step: 0.1 },
    // Rotation controls
    rotateY: { value: true },
    rotationSpeed: { value: 0.15, min: 0.0, max: 1, step: 0.01 }
  })

  const simRef = useRef()
  const renderRef = useRef()
  
  // Set up FBO
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))
  const [positions] = useState(() => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]))
  const [uvs] = useState(() => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]))
  
  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  })

  // Normalize points
  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  // Update FBO and pointcloud every frame
  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)
    
    renderRef.current.uniforms.positions.value = target.texture
    renderRef.current.uniforms.uTime.value = state.clock.elapsedTime

    // Calculate animated focus value if animation is enabled
    let targetFocus = props.focus
    if (props.animateFocus) {
      const focusMin = 4
      const focusMax = 6
      const focusRange = focusMax - focusMin
      const focusMid = focusMin + focusRange / 2
      targetFocus = focusMid + Math.sin(state.clock.elapsedTime * props.focusAnimationSpeed) * (focusRange / 2)
    }

    renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(
      renderRef.current.uniforms.uFocus.value, 
      targetFocus,
      0.1
    )
    renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uFov.value, props.fov, 0.1)
    renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uBlur.value, (5.6 - props.aperture) * 9, 0.1)
    
    simRef.current.uniforms.uTime.value = state.clock.elapsedTime * props.speed
    simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(simRef.current.uniforms.uCurlFreq.value, props.curl, 0.1)

    // Apply rotation if enabled
    if (props.rotateY && pointsRef.current) {
      pointsRef.current.rotation.y += props.rotationSpeed * 0.01
    }
  })

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute attach="attributes-uv" count={uvs.length / 2} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={pointsRef} {...props}>
        <dofPointsMaterial ref={renderRef} />
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
      </points>
    </>
  )
}