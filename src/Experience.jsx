import { Html, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import useStore from './stores/useStore.js'
import { ParticleField } from './components/ParticleField.jsx'
import { Perf } from 'r3f-perf'
import ScrollContainer from './components/ScrollContainer.jsx'
import TitleText from './components/TitleText.jsx'

export default function Experience()
{
    const props = useControls('Experience', {
        backgroundColor: '#000000',
        performance: true,
    })

    return <>
        {props.performance && <Perf
           position={'top-left'}   
        />}
        <color args={[props.backgroundColor]} attach={'background'}/>
        {/* <ScrollContainer/> */}
        <ParticleField/>
    </>
}
