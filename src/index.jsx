import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Experience from "./Experience";
import HoneycombGrid from "./components/html/HoneycombGrid";
import { Leva } from "leva";

const root = createRoot(document.getElementById("root"));

const items = [
    [
        { image: "/linkImages/moe.jpg", link: "/shader-gallery" },
        { image: "/linkImages/BOXLE.png", link: "/boxle" },
    ],
    [
        { image: "/linkImages/brennan.png", link: "/portfolio" },
        { image: "/linkImages/github.png", link: "https://github.com/BrennanTibbetts" },
        { image: "/linkImages/linkedIn.png", link: "https://linkedin.com/in/brennan-t-tibbetts/" },
    ],
    [
        { image: ""},
        { image: "linkImages/linkTree.png", link: "https://linktr.ee/brennanttibbetts" },
    ],
];

const App = () => {
    const [levaHidden, setLevaHidden] = useState(true);

    useEffect(() => {
        const toggleLeva = (event) => {
            if (event.key.toLowerCase() === "h" && event.shiftKey) {
                setLevaHidden((prev) => !prev);
            }
        };

        window.addEventListener("keydown", toggleLeva);
        return () => window.removeEventListener("keydown", toggleLeva);
    }, []);

    return (
        <>
            <HoneycombGrid items={items} />
            <Canvas camera={{ fov: 20, position: [0, 0, 5] }}>
                <Experience />
            </Canvas>
            <Leva hidden={levaHidden} />
        </>
    );
};

root.render(<App />);
