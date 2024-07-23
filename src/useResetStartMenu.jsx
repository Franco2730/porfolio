import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useResetStartMenu = (setStartMenuIsOpen) => {
  const location = useLocation();

  useEffect(() => {
    setStartMenuIsOpen(false);
  }, [location, setStartMenuIsOpen]);
};

export default useResetStartMenu;
