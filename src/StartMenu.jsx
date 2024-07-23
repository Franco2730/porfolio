import React from 'react';
import './StartMenu.css';
import { useNavigate } from 'react-router-dom';

const StartMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate('/');
  };

  const handleShutdown = () => {
    onClose();
    if (window.confirm('¿Seguro quieres apagar el equipo?')) {
      navigate('/shutdown');
    }
  };

  return (
    <div className="start-menu">
      <img src="/iconos-ventanas/ventana.png" alt="Ventana" className="ventana-image" />
      <button className="logout-button" onClick={handleLogout}></button>
      <button className="shutdown-button" onClick={handleShutdown}></button>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  );
};

export default StartMenu;
