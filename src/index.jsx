import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Experience from "./Experience";
import { Perf } from "r3f-perf";

const root = createRoot(document.getElementById("root"));
root.render(
    <Canvas 
        camera={{ 
            fov: 70, 
            position: [0, 0, 3] 
        }}>
            <Perf position="top-left"/>
            <Experience/>
    </Canvas>
);
