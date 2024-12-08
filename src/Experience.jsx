import { CameraControls, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import Lights from './Lights.jsx'
import useStore from './stores/useStore.js'
import { ParticleField } from './components/ParticleField.jsx'
import { BoxGeometry } from 'three'

export default function Experience()
{
    const props = useControls('Experience', {
        backgroundColor: '#000000',
        focus: { value: 1.02, min: 0, max: 10, step: 0.01 },
        speed: { value: 10, min: 0.1, max: 100, step: 0.1 },
        aperture: { value: 7, min: 0, max: 10, step: 0.1 },
        fov: { value: 20, min: 0, max: 200 },
        curl: { value: 0.2, min: 0.01, max: 0.5, step: 0.01 }
    })

    return <>
        <color args={[props.backgroundColor]} attach={'background'}/>

        <CameraControls/>
        <ParticleField {...props}/>
    </>
}
