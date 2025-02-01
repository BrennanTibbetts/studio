import { useState, useEffect, useRef } from "react";

const HoneycombGrid = ({ items }) => {
    const scrollContainerRef = useRef(null);
    const [scales, setScales] = useState({});
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;
            const container = scrollContainerRef.current.querySelector(".grid-container");
            if (!container) return;

            const containerRect = scrollContainerRef.current.getBoundingClientRect();
            const centerY = containerRect.top + scrollContainerRef.current.clientHeight / 2;

            const newScales = {};
            Array.from(container.children).forEach((row, rowIndex) => {
                Array.from(row.children).forEach((item, colIndex) => {
                    const itemRect = item.getBoundingClientRect();
                    const itemCenterY = itemRect.top + itemRect.height / 2 + (scrollContainerRef.current.clientHeight / 2);
                    const distance = Math.abs(centerY - itemCenterY / 2);
                    const scale = Math.max(1.0, 1.15 - distance / 1500);
                    newScales[`${rowIndex}-${colIndex}`] = scale;
                });
            });
            setScales(newScales);
        };

        const container = scrollContainerRef.current;
        container.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const styles = {
        scrollContainer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            maxHeight: "100vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
            paddingBottom: '40vh',
        },
        row: {
            display: "flex",
            justifyContent: "center",
            gap: "6vw",
            width: "100%",
        },
        gridItem: {
            width: "20vw",
            height: "20vw",
            borderRadius: "50%",
            overflow: "hidden",
            transition: "transform 0.4s ease-out",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        title: {
            fontSize: "4vw",
            textAlign: "center",
            fontStyle: "italic",
            marginTop: "45vh",
            marginBottom: "35vh",
            fontFamily: '"Libre Baskerville", serif',
        },
        arrows: {
            filter: 'brightness(0) invert(0.5)',
            width: '4vw',
            height: '4vw',
            display: 'block',
            margin: '0 auto',
            marginBottom: '15vh',
        }
    };

    return (
        <div style={styles.scrollContainer} ref={scrollContainerRef}>
            <div style={styles.title}>BRENNAN.STUDIO</div>
            <img style={styles.arrows} src="/icons/two-way-arrows-svgrepo-com.svg"/>
            <div className="grid-container">
                {items.map((row, rowIndex) => (
                    <div key={rowIndex} style={styles.row} className="grid-row">
                        {row.map((item, colIndex) => {
                            const baseScale = scales[`${rowIndex}-${colIndex}`] || 1;
                            const hoverScale = hoveredItem === `${rowIndex}-${colIndex}` ? 1.15 : 1.0;
                            return (
                                <a
                                    key={colIndex}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        ...styles.gridItem,
                                        transform: `scale(${baseScale * hoverScale})`,
                                    }}
                                    onMouseEnter={() => handleMouseEnter(`${rowIndex}-${colIndex}`)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={item.image} alt="" style={styles.image} />
                                </a>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HoneycombGrid;
