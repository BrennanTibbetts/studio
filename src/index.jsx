import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Experience from "./Experience";
import Overlay from "./components/html/Overlay";
import { Leva } from "leva";
import HoneycombGrid from "./components/html/HoneycombGrid";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Overlay/>
        <HoneycombGrid/>
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
