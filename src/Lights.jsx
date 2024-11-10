import { useControls } from 'leva'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'

export default function Lights() {

    const directionalLightControls = useControls('directionalLight', {
        helper: false,
        position: {
            value: [2, 9.2, 2],
            step: 0.1
        },
        intensity: {
            value: 2,
            min: 0,
            max: 10,
            step: 0.1
        },
        shadowMapSize: {
            value: [1024, 1024],
            step: 1
        },
        shadowCameraNear: {
            value: 1,
            step: 0.1
        },
        shadowCameraFar: {
            value: 24,
            step: 0.1
        },
        shadowCameraTop: {
            value: 10,
            step: 0.1
        },
        shadowCameraRight: {
            value: 10,
            step: 0.1
        },
        shadowCameraBottom: {
            value: -10,
            step: 0.1
        },
        shadowCameraLeft: {
            value: -10,
            step: 0.1
        },
        castShadow: true
    })

    const ambientLightControls = useControls('ambientLight', {
        intensity: {
            value: 0.4,
            min: 0,
            max: 10,
            step: 0.1
        }
    })

    const directionalLight = useRef()
    useHelper(directionalLightControls.helper && directionalLight, DirectionalLightHelper)

    return <>
        <directionalLight
            ref={directionalLight}
            castShadow={directionalLightControls.castShadow}
            position={directionalLightControls.position}
            intensity={directionalLightControls.intensity}
            shadow-mapSize={directionalLightControls.shadowMapSize}
            shadow-camera-near={directionalLightControls.shadowCameraNear}
            shadow-camera-far={directionalLightControls.shadowCameraFar}
            shadow-camera-top={directionalLightControls.shadowCameraTop}
            shadow-camera-right={directionalLightControls.shadowCameraRight}
            shadow-camera-bottom={directionalLightControls.shadowCameraBottom}
            shadow-camera-left={directionalLightControls.shadowCameraLeft}
        />
        <ambientLight intensity={ambientLightControls.intensity} />
    </>
}