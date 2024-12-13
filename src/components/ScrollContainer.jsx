import { Scroll, ScrollControls } from "@react-three/drei";
import TitleText from "./TitleText";
import { useControls } from "leva";

export default function ScrollContainer () {

    const props = useControls("Scroll", {
        pages: 3,
        damping: 0.5,
        infinite:false
    })

    return <>
        <ScrollControls 
            pages={props.pages}
            damping={props.damping}
            infinite={props.infinite}
        >
            <Scroll>
                <TitleText/>
            </Scroll>
        </ScrollControls>
    </>
}