import React, { useEffect, useState } from 'react';
import './index.css'; // Asegúrate de importar tus estilos globales aquí

function App() {
  const handleClickYo = () => {
    console.log('Abrir información personal');
  };

  const handleClickFormulario = () => {
    console.log('Abrir formulario de contacto');
  };

  const handleClickVideo = () => {
    console.log('Abrir sección de videos');
  };

  const handleClickProyectos = () => {
    console.log('Abrir sección de proyectos');
  };

  const handleClickJuego = () => {
    console.log('Abrir el juego');
  };

  const handleClickContacto = () => {
    console.log('Abrir sección de contacto');
  };

  const handleClickCancion = () => {
    console.log('Abrir sección de canciones');
  };

  const handleClickUbicacion = () => {
    console.log('Abrir sección de ubicación');
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="desktop-icons">
        <img
          src="/iconos-escritorio/yo.ico"
          alt="Icono de Información Personal"
          onClick={handleClickYo}
        />
        <img
          src="/iconos-escritorio/formulario.ico"
          alt="Icono de Formulario de Contacto"
          onClick={handleClickFormulario}
        />
        <img
          src="/iconos-escritorio/video.ico"
          alt="Icono de Videos"
          onClick={handleClickVideo}
        />
        <img
          src="/iconos-escritorio/proyectos.png"
          alt="Icono de Proyectos"
          onClick={handleClickProyectos}
        />
        <img
          src="/iconos-escritorio/juego.ico"
          alt="Icono de Juego"
          onClick={handleClickJuego}
        />
        <img
          src="/iconos-escritorio/contacto.ico"
          alt="Icono de Contacto"
          onClick={handleClickContacto}
        />
        <img
          src="/iconos-escritorio/cancion.ico"
          alt="Icono de Canciones"
          onClick={handleClickCancion}
        />
        <img
          src="/iconos-escritorio/ubicacion.ico"
          alt="Icono de Ubicación"
          onClick={handleClickUbicacion}
        />
      </div>
      <div className="start-button">
        <img src="/iconos-ventanas/inicio.png" alt="Botón de Inicio" onClick={() => console.log('Abrir menú de inicio')} />
      </div>
      <div className="blue-bar"></div>
      <div className="clock">
        {time}
      </div>
    </div>
  );
}

export default App;
