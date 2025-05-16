import TrafficLight from '../components/TrafficLight.jsx'

function TrafficLightPage() {
    return (
        <div>
            <h2>Traffic Light Simulation</h2>
            <div style={{ display: 'flex', gap: '40px' }}>
                <TrafficLight />
                <TrafficLight />
            </div>
        </div>
    )
}

export default TrafficLightPage
