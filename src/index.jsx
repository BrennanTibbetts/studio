import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Experience from "./Experience";
import Overlay from "./components/html/Overlay";
import { Leva } from "leva";
import HoneycombGrid from "./components/html/HoneycombGrid";

const root = createRoot(document.getElementById("root"));

const items = [
    [
        { image: "/icons/github.png", link: "https://github.com/BrennanTibbetts" },
        { image: "/Capture.JPG", link: "/boxle" }
    ],
    [
        { image: "/preview.gif", link: "/portfolio" },
        { image: "/preview.gif", link: "/portfolio" },
        { image: "/preview.gif", link: "/portfolio" },
    ]
];

root.render(
    <>
        <Overlay/>
        <HoneycombGrid items={items}/>
        <Canvas 
            camera={{ 
                fov: 15, 
                position: [0, 0, 5] 
            }}>
                <Experience/>
        </Canvas>
        <Leva/>
    </>
);
