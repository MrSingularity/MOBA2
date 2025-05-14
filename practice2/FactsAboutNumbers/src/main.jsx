import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './pages/App.jsx';
import TrafficLightPage from './pages/TrafficLightPage.jsx';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">Vite React App</Link></li>
                <li><Link to="/traffic-light">Traffic Light</Link></li>
            </ul>
        </nav>
    );
}

function Home() {
    return (
        <>
            <Navigation />
            <h1>Startseite</h1>
        </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<App />} />
            <Route path="/traffic-light" element={<TrafficLightPage />} />
        </Routes>
    </Router>
);
