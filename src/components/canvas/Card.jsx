'use client'
// src/components/canvas/Card.jsx
import { useState } from 'react'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const Card = ({ route = '/', color = '#ffffff', position = [0, 0, 0], ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  const handleClick = () => {
    // Use replace instead of push for cleaner transition
    router.replace(route)
  }

  return (
    <mesh
      position={position}
      onClick={handleClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : color} />
    </mesh>
  )
}