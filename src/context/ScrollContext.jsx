import { useCallback, useEffect, useMemo, useRef } from 'react';
import { ScrollContext } from './scroll-context-value';

export function ScrollProvider({ children }) {
  const sections = useRef(new Map());
  const registerSection = useCallback((id, node) => {
    if (node) sections.current.set(id, node);
    else sections.current.delete(id);
  }, []);
  const scrollToSection = useCallback((id) => {
    const section = sections.current.get(id);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 78;
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    const scrollFromHash = () => {
      const id = window.location.hash.slice(1);
      if (id) window.setTimeout(() => scrollToSection(id), 0);
    };
    scrollFromHash();
    window.addEventListener('hashchange', scrollFromHash);
    return () => window.removeEventListener('hashchange', scrollFromHash);
  }, [scrollToSection]);
  const value = useMemo(() => ({ registerSection, scrollToSection }), [registerSection, scrollToSection]);
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}
