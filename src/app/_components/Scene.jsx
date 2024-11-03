'use client'
import { Canvas } from '@react-three/fiber'

export default function Scene() {

    return (
        <Canvas
            className='r3f'
            shadows
            // orthographic
            camera={ {
                fov: 45,
                near: 0.1,
                // zoom: 100,
                far: 100,
                position: [ 0, 16, 0]
            } }
        >
        </Canvas>
    )
}