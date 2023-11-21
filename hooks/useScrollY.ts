import { debounce } from '@/utils/debounce';
import { useEffect, useState } from 'react';

export function useScrollY(): number {
  const isBrowser = typeof window !== 'undefined';
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 250));
    return () => {
      window.removeEventListener(
        'scroll',
        debounce(handleScroll, 250)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollY;
}
