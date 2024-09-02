import { useState, useEffect } from "react";

export function useCurrentPath() {
  const [path, setPath] = useState(window.location.hash.slice(1) || window.location.pathname);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.slice(1));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return path;
}
