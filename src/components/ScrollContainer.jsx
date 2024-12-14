import { Float, Scroll, ScrollControls } from "@react-three/drei";
import { useControls } from "leva";
import SiteCard from "./html/SiteCard";

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
                <SiteCard
                    image={'/Capture.JPG'}
                    url={'/boxle/'}
                    title={'Boxle'}
                    text={'This boxle baby'}
                />
            </Scroll>
        </ScrollControls>
    </>
}