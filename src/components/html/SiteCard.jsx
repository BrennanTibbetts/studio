import { Html } from "@react-three/drei"
import { useControls } from "leva"
import '../../styles.css'

export default function SiteCard({title, text, url, image}) {

    const props = useControls('Site Card', {
        position: [0, 0, 0]
    })

    return <Html
        className="site-card"
        center
        position={props.position}
    >
        <img src={image}/>
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {text}
            </p>
        </div>
    </Html>
}