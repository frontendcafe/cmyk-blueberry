import {useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';

const useScrollToHash = () => {
    const location = useLocation();
    useLayoutEffect(() => {
      const { hash, pathname } = location;
      if (pathname !== '/' && pathname !== 'home') return;
      if (!hash) return;
  
      const sectionToScroll = document.querySelector(hash);
      if (!sectionToScroll) return;
  
      const timeoutId = setTimeout(() => {
        sectionToScroll.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, 0);
      return () => clearTimeout(timeoutId);
    }, [location]);
  };

  export default useScrollToHash;