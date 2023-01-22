import {useRouter} from 'next/router';
import {useCallback, useEffect, useRef} from 'react';

export const FadeProvider = ({children}: {children: React.ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null);
  const {events} = useRouter();

  const fadeOut = useCallback(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
    }
  }, []);

  const fadeIn = useCallback(() => {
    if (ref.current) {
      ref.current.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    events.on('routeChangeStart', fadeOut);
    events.on('routeChangeComplete', fadeIn);
    events.on('routeChangeError', fadeIn);

    return () => {
      events.off('routeChangeStart', fadeIn);
      events.off('routeChangeComplete', fadeOut);
      events.off('routeChangeError', fadeOut);
    };
  }, [events, fadeIn, fadeOut]);

  return (
    <div ref={ref} className="duration-500 ease-in-out">
      {children}
    </div>
  );
};
