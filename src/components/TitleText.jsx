import { Text } from "@react-three/drei";
import { useControls } from "leva";
import { useContext, useRef } from "react";

export default function TitleText({position}) {

    const props = useControls("Title Text", {
        fontSize: 0.08,
        text: "BRENNAN TIBBETTS",
        font: { value: "/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf",
            options: [
                "/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf",
                "/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf",
                "/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf",
            ]
        }
    })

    return <>
    <Text
        position={position}
        font={props.font}
        fontSize={[props.fontSize]}
    >
       {props.text}
    </Text>
    </>
}