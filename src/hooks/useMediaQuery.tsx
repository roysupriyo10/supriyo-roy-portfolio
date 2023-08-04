import { useEffect, useState } from "react";

type Size = {
  [key: string]: string
}

const sizes: Size = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
      const query = `(min-width: ${sizes[screen]})`;
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
          setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};