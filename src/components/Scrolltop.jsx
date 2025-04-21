import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scrolltop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    }); 
  }, [pathname]);

  return null;
};

export default Scrolltop;