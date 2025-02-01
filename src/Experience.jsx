import { Html, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { ParticleField } from './components/ParticleField.jsx'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    const props = useControls('Experience', {
        backgroundColor: '#000000',
        performance: false,
    })

    return <>
        {props.performance && <Perf
           position={'top-left'}   
        />}
        <color args={[props.backgroundColor]} attach={'background'}/>
        <ParticleField/>
    </>
}
