import { Html } from "@react-three/drei"
import { useState } from "react"

const HoneycombGrid = () => {
    const numRows = 10; // More rows to enable scrolling
    const numCols = Array.from({ length: numRows }, (_, i) => (i % 2 === 0 ? 2 : 3)); // Alternating row sizes

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (rowIndex, colIndex) => {
        setHoveredItem(`${rowIndex}-${colIndex}`); // Unique identifier for each item
    }

    const handleMouseLeave = () => {
        setHoveredItem(null); // Reset when hover ends
    }

    const styles = {
        scrollContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            maxHeight: '100vh', 
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            gap: '3.3vw', // Spacing between hexagons
            width: '100%',
        },
        gridItem: {
            width: '24vw',
            height: '24vw',
            background: '#BBB',
            borderRadius: '50%',
            transition: 'transform 0.7s ease', // Smooth transition for scaling
        },
        title: {
            color: '#bbb',
            fontSize: '4vw', // Adjust for visibility
            textAlign: 'center', // Center align
            fontStyle: 'italic',
            marginTop: '20vh',
            marginBottom: '30vh',
            fontFamily: '"Libre Baskerville", serif',
        }
    }

    return (
        <Html>
            <div style={styles.scrollContainer}>
                <div style={styles.title}>BRENNAN.STUDIO</div>
                {numCols.map((cols, rowIndex) => (
                    <div 
                        key={rowIndex} 
                        style={styles.row}
                    >
                        {Array.from({ length: cols }, (_, colIndex) => (
                            <div 
                                key={colIndex} 
                                style={{
                                    ...styles.gridItem, 
                                    transform: `scale(${hoveredItem === `${rowIndex}-${colIndex}` ? 1.2 : 1})`, // Scale based on unique item ID
                                }}
                                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)} // Track hover for the specific item
                                onMouseLeave={handleMouseLeave} // Reset hover state
                            />
                        ))}
                    </div>
                ))}
            </div>
        </Html>
    )
}

export default HoneycombGrid
