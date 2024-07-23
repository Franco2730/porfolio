import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      <img src="/iconos-ventanas/landing.png" alt="Landing" className="landing-image" />
      <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default LandingPage;
