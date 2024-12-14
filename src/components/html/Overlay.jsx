import React, { useState } from 'react';
import { useControls } from "leva";

export default function Overlay() {
    const [isExpanded, setIsExpanded] = useState(false);
    const props = useControls("Links", {
        position: [0, 0.6, 0],
    });

    const handleInfoClick = () => {
        setIsExpanded(!isExpanded);
    };

    const socialIcons = [
        { 
            src: "/icons/linkedin.png", 
            alt: "LinkedIn", 
            url: "https://linkedin.com/in/brennan-t-tibbetts"
        },
        { 
            src: "/icons/github.png", 
            alt: "GitHub", 
            url: "https://github.com/BrennanTibbetts"
        },
        { 
            src: "/icons/email.png", 
            alt: "Email", 
            url: "https://linktr.ee/brennanttibbetts"
        }
    ];

    const iconStyle = {
        width: 35,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        cursor: 'pointer'
    };

    const handleIconClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            style={{
                color: "white", 
                position: "absolute", 
                zIndex: 10, 
                top: 10, 
                right: 20,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {socialIcons.map((icon, index) => (
                <img 
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    onClick={() => handleIconClick(icon.url)}
                    style={{
                        ...iconStyle,
                        transform: isExpanded 
                            ? `translateX(${40 - index * 80}px)` 
                            : 'translateX(80px)',
                        opacity: isExpanded ? 1 : 0,
                        pointerEvents: isExpanded ? 'auto' : 'none'
                    }}
                />
            ))}
            
            <img 
                src="/icons/info.png"
                style={{...iconStyle, marginLeft: 'auto'}}
                onClick={handleInfoClick}
            />
        </div>
    );
}