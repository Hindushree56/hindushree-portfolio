import { useContext } from 'react';
import { ScrollContext } from '../context/scroll-context-value';

export function useScrollNavigation() {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScrollNavigation must be used inside ScrollProvider.');
  return context;
}
