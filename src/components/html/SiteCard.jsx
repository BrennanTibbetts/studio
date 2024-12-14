import { Html } from "@react-three/drei"
import { useControls } from "leva"
import '../../styles.css'
import gsap from "gsap"
import { useRef, useState } from "react"

export default function SiteCard({title, text, url, image}) {

    const [textHidden, setTextHidden] = useState(true)

    const props = useControls('Site Card', {
        position: [0, 0, -60],
        rotation: [0, 0, 0],
        imageShowPositionX: -5,
        imageShowRotationY: -0.3,
        imageHideRotationY: 0,
        imageHidePositionX: 0,
        textShowPositionX: 25,
        textHidePositionX: 10,
        showTransitionDuration: 0.5,
    })

    const imageRef = useRef()
    const textRef = useRef()

    const toggleShowText = () => {
        textHidden ? showText() : hideText()
        setTextHidden(!textHidden)
    }
    const showText = () => {
        gsap.to(imageRef.current.position, {
            x: props.imageShowPositionX,
            duration: props.showTransitionDuration 
        })
        gsap.to(imageRef.current.rotation, {
            y: props.imageShowRotationY,
            duration: props.showTransitionDuration 
        })
        gsap.to(textRef.current.position, {
            x: props.textShowPositionX,
            duration: props.showTransitionDuration,
        })
    }
    const hideText = () => {
        gsap.to(imageRef.current.position, {
            x: props.imageHidePositionX,
            duration: props.showTransitionDuration,
        })
        gsap.to(imageRef.current.rotation, {
            y: props.imageHideRotationY,
            duration: props.showTransitionDuration 
        })
        gsap.to(textRef.current.position, {
            x: props.textHidePositionX,
            duration: props.showTransitionDuration,
        })
    }

    return <group
        position={props.position}
        rotation={props.rotation}
    >
        <group
            ref={imageRef}
            position={[0, 0, 0.1]}
        >
            <Html
                className="site-card-image"
                transform
            >
                <img 
                    src={image}
                    onClick={toggleShowText}
                    draggable={false}
                />
            </Html>
        </group>
        <group
            ref={textRef}
        >
            <Html
                className="site-card-text"
                transform
            >
                <div>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {text}
                    </p>
                </div>
            </Html>
        </group>
    </group>
}