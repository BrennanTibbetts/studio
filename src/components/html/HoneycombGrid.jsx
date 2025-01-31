import { useState, useEffect, useRef } from "react";

const HoneycombGrid = () => {
    const numRows = 10; // More rows to enable scrolling
    const numCols = Array.from({ length: numRows }, (_, i) => (i % 2 === 0 ? 2 : 3)); // Alternating row sizes
    const scrollContainerRef = useRef(null);
    const [scales, setScales] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const containerRect = container.getBoundingClientRect();
            const centerY = containerRect.top + container.clientHeight / 2;

            const newScales = {};
            Array.from(container.children).forEach((row, rowIndex) => {
                if (!row.classList.contains("grid-row")) return;

                Array.from(row.children).forEach((item, colIndex) => {
                    const itemRect = item.getBoundingClientRect();
                    const itemCenterY = itemRect.top + itemRect.height / 2;
                    const distance = Math.abs(centerY - itemCenterY);
                    const scale = Math.max(1, 1.2 - distance / 2500); // Adjust scaling effect

                    newScales[`${rowIndex}-${colIndex}`] = scale;
                });
            });

            setScales(newScales);
        };

        const container = scrollContainerRef.current;
        container.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialize scaling

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const styles = {
        scrollContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            maxHeight: '100vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            gap: '5vw', // Spacing between hexagons
            width: '100%',
        },
        gridItem: {
            width: '24vw',
            height: '24vw',
            background: '#BBB',
            borderRadius: '50%',
            transition: 'transform 0.3s ease-out', // Smooth transition for scaling
        },
        title: {
            color: '#bbb',
            fontSize: '4vw',
            textAlign: 'center',
            fontStyle: 'italic',
            marginTop: '40vh',
            marginBottom: '50vh',
            fontFamily: '"Libre Baskerville", serif',
        }
    };

    return (
        <div style={styles.scrollContainer} ref={scrollContainerRef}>
            {/* <div style={styles.title}>BRENNAN.STUDIO</div> */}
            {numCols.map((cols, rowIndex) => (
                <div key={rowIndex} style={{ ...styles.row }} className="grid-row">
                    {Array.from({ length: cols }, (_, colIndex) => (
                        <div 
                            key={colIndex} 
                            style={{
                                ...styles.gridItem,
                                transform: `scale(${scales[`${rowIndex}-${colIndex}`] || 1})`, // Scale based on scroll position
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HoneycombGrid;
