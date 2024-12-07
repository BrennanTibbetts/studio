import { useControls } from "leva"

export default function Lights()
{

    const props = useControls("Lights", {
        castShadow: true,
        position: [4,4,1],
        intensity: 4.5,
        shadowMapSize: [ 1024, 1024 ],
        shadowCameraNear: 1,
        shadowCameraFar: 10,
        shadowCameraTop: 10,
        shadowCameraRight: 10,
        shadowCameraBottom: -10,
        shadowCameraLeft: -10,
    })

    return <>
        <directionalLight
            castShadow={props.castShadow}
            position={ props.position }
            intensity={ props.intensity }
            shadow-mapSize={ props.shadowMapSize }
            shadow-camera-near={ props.shadowCameraNear }
            shadow-camera-far={ props.shadowCameraFar }
            shadow-camera-top={ props.shadowCameraTop }
            shadow-camera-right={ props.shadowCameraRight }
            shadow-camera-bottom={ props.shadowCameraBottom }
            shadow-camera-left={ props.shadowCameraLeft }
        />
        <ambientLight intensity={ 1.5 } />
    </>
}