import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableIcon from './DraggableIcon';
import InfoWindow from './InfoWindow';
import './index.css';

Modal.setAppElement('#root');

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [infoWindowIsOpen, setInfoWindowIsOpen] = useState(false);
  const [formModalIsOpen, setFormModalIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const [modalContent, setModalContent] = useState('');

  const [iconPositions, setIconPositions] = useState({
    yo: { x: 0, y: 0 },
    formulario: { x: 0, y: 70 },
    proyectos: { x: 0, y: 140 },
    juego: { x: 0, y: 210 },
    cancion: { x: 0, y: 280 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (userInteracted) {
      const timer = setTimeout(() => {
        setShowNotification(true);
        const audio = new Audio('/sounds/msn-buzz.mp3');
        audio.play();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [userInteracted]);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent('');
  };

  const openInfoWindow = () => {
    setInfoWindowIsOpen(true);
  };

  const closeInfoWindow = () => {
    setInfoWindowIsOpen(false);
  };

  const openFormModal = () => {
    setFormModalIsOpen(true);
  };

  const closeFormModal = () => {
    setFormModalIsOpen(false);
  };

  const handleDrop = (id, position) => {
    setIconPositions((prevPositions) => ({
      ...prevPositions,
      [id]: position,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = event.target.elements;
    const data = {
      to_name: 'Franco',
      from_name: name.value,
      message: message.value,
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_hw0t0qo',
          template_id: 'template_ogra1ld',
          user_id: 'Tt6d6Cjvan8L81DnN',
          template_params: data,
        }),
      });

      if (response.status === 200) {
        alert('Mensaje enviado con éxito');
        event.target.reset(); // Limpiar los campos del formulario
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="desktop-icons">
          {Object.keys(iconPositions).map((key) => (
            <DraggableIcon
              key={key}
              id={key}
              src={`/iconos-escritorio/${key}.ico`}
              alt={`Icono de ${key.charAt(0).toUpperCase() + key.slice(1)}`}
              position={iconPositions[key]}
              onDrop={handleDrop}
              onDoubleClick={() => {
                if (key === 'yo') openInfoWindow();
                else if (key === 'formulario') openFormModal();
                else openModal(key.charAt(0).toUpperCase() + key.slice(1));
              }}
            />
          ))}
        </div>
        <div className="start-button">
          <img src="/iconos-ventanas/inicio.png" alt="Botón de Inicio" onClick={() => openModal('Menú de Inicio')} />
        </div>
        <div className="blue-bar"></div>
        <div className="clock">
          {time}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header">
            <img src="/iconos-ventanas/windows.png" alt="Windows Icon" className="windows-icon" />
            <button onClick={closeModal} className="close-button">X</button>
          </div>
          <div className="modal-content">
            <h2>{modalContent}</h2>
          </div>
        </Modal>
        <Modal
          isOpen={formModalIsOpen}
          onRequestClose={closeFormModal}
          contentLabel="Formulario"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header">
            <img src="/iconos-ventanas/windows.png" alt="Windows Icon" className="windows-icon" />
            <button onClick={closeFormModal} className="close-button">X</button>
          </div>
          <div className="modal-content">
            <h2>Formulario de Contacto</h2>
            <form className="form-modal-content" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre" name="name" required />
              <input type="email" placeholder="Correo electrónico" name="email" required />
              <textarea placeholder="Mensaje" name="message" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </Modal>
        <InfoWindow isOpen={infoWindowIsOpen} onClose={closeInfoWindow} />
        {showNotification && (
          <div className="notification">
            <button onClick={() => setShowNotification(false)} className="notification-close-button">X</button>
            <img src="/iconos-ventanas/msn.png" alt="MSN Notification" />
          </div>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
