import React from 'react';
import './InfoWindow.css';

const InfoWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="info-window-overlay">
      <div className="info-window">
        <div className="info-window-header">
          <img src="/iconos-ventanas/windows.png" alt="Windows XP Logo" className="info-window-logo" />
          <button className="info-window-close" onClick={onClose}>X</button>
        </div>
        <div className="info-window-content">
          <div className="info-window-left">
            <h2>Presentación</h2>
            <p>Aquí va una breve presentación sobre ti.</p>
          </div>
          <div className="info-window-right">
            <img src="/iconos-escritorio/video.ico" alt="Video" className="info-window-icon" />
            <img src="/iconos-escritorio/cursos.ico" alt="Cursos" className="info-window-icon" />
            <img src="/iconos-escritorio/ubicacion.ico" alt="Ubicación" className="info-window-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWindow;
