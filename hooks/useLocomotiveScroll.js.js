import { useEffect, useRef } from 'react';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        },
        multiplier: 1,
        class: 'is-revealed'
      });

      // Update Locomotive Scroll on route change
      const handleRouteChange = () => {
        locomotiveScroll.update();
      };

      // Listen to route changes
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    };

      initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return scrollRef;
};