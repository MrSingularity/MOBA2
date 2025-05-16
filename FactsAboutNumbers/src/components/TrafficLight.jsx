import { useState, useEffect } from 'react'
import Light from './Light.jsx'

const TrafficLight = () => {
    const [step, setStep] = useState(0)
    const colors = ['red', 'orange', 'green']

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            {colors.map((color, index) => (
                <Light key={color} color={color} active={step === index} />
            ))}
        </div>
    )
}

export default TrafficLight
