import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {useCallback, useEffect, useState} from 'react';

const variants = {
  hidden: {opacity: 0, x: -200, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: -100},
} as const;

export const FadeProvider = ({children}: {children: React.ReactNode}) => {
  const [isVisible, setIsVisible] = useState(true);
  const {events} = useRouter();
  const onRouteStart = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const onRouteExit = useCallback(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, [setIsVisible]);

  useEffect(() => {
    events.on('routeChangeStart', onRouteStart);
    events.on('routeChangeComplete', onRouteExit);
    events.on('routeChangeError', onRouteExit);
    return () => {
      events.off('routeChangeStart', onRouteStart);
      events.off('routeChangeComplete', onRouteExit);
      events.off('routeChangeError', onRouteExit);
    };
  }, [events, onRouteStart, onRouteExit]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{type: 'linear'}}
        >
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  );
};
