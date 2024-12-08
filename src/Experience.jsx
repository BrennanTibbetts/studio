import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import Lights from './Lights.jsx'
import useStore from './stores/useStore.js'
import { ParticleField } from './components/ParticleField.jsx'

export default function Experience()
{
    const props = useControls('Experience', {
        backgroundColor: '#000000'
    })

    return <>

        <color args={[props.backgroundColor]} attach={'background'}/>

        <OrbitControls/>
        <Lights/>
        <ParticleField/>
    </>
}