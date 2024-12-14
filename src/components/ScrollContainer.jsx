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
                    text={`
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In sit amet cursus purus, sit amet varius magna. 
                        Donec ornare hendrerit felis, nec vehicula mi sodales nec. 
                        Etiam cursus feugiat tristique. Proin ac tristique nunc. 
                        Integer ornare turpis ante, at lobortis purus tincidunt nec. 
                        Morbi et vulputate eros, in aliquam dolor.
                    `}
                />
            </Scroll>
        </ScrollControls>
    </>
}