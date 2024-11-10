import { PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Card } from './components/canvas/Card'
import Lights from './Lights'

export default function Experience() {

    const props = useControls({
        background: '#000000',
        performance: true,
    })

    return <>
        <color args={[props.background]} attach={'background'} />
        {props.performance && <Perf
            position={'top-left'}
        />}
        <Lights />
        <PresentationControls
            global
            polar={[-1, 0]}
            config={{ mass: 2, tension: 400 }}
            cursor={true}
        >
            <Card />
        </PresentationControls>
    </>
}