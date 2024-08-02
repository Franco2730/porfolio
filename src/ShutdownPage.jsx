import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShutdownPage.css';

const ShutdownPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="shutdown-container">
      <h1>Apagando...</h1>
    </div>
  );
};

export default ShutdownPage;
