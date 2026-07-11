import { useEffect, useState } from 'react';

export function useActiveSection(sectionKey) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55%' },
    );
    const observeSections = () => sectionKey.split('|').forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    observeSections();
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.querySelector('main'), { childList: true, subtree: true });
    return () => { observer.disconnect(); mutationObserver.disconnect(); };
  }, [sectionKey]);

  return activeSection;
}
