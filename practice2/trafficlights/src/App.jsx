import { useState, useEffect } from 'react';
import './App.css';

const Light = ({ color, active }) => (
    <div
        className="light"
        style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }}
    />
);

const TrafficLight = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const lights = ["red", "yellow", "green"];

    const nextStep = () => {
        setActiveIndex((activeIndex + 1) % lights.length);
    };

    useEffect(() => {
        const interval = setInterval(nextStep, 1000); // Automatically changes every second
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="traffic-light" onClick={nextStep}>
            {lights.map((color, index) => (
                <Light key={color} color={color} active={index === activeIndex} />
            ))}
        </div>
    );
};

function App() {
    return (
        <div className="app-container">
            <h1>Traffic Light Simulator</h1>
            <div className="traffic-container">
                <TrafficLight />
                <TrafficLight />
            </div>
        </div>
    );
}

export default App;

