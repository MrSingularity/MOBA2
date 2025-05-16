import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './pages/App.jsx';
import TrafficLightPage from './pages/TrafficLightPage.jsx';
import IonicTestPage from './pages/IonicTestPage';


function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link><br />
            <Link to="/app">Vite React App</Link><br />
            <Link to="/traffic-light">Traffic Light (2)</Link><br />
            <Link to="/ionic">Ionic Test Page (3)</Link><br />
        </nav>
    );
}


function Home() {
    return (
        <>
            <Navigation />
        </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<App />} />
            <Route path="/traffic-light" element={<TrafficLightPage />} />
            <Route path="/ionic" element={<IonicTestPage />} />
        </Routes>
    </Router>
);
