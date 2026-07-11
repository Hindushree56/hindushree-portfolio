import { forwardRef } from 'react';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

export const Section = forwardRef(function Section({ id, className = '', children, ...props }, ref) {
  const { registerSection } = useScrollNavigation();
  const setRef = (node) => {
    registerSection(id, node);
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };
  return <section id={id} ref={setRef} className={`content-section ${className}`} {...props}>{children}</section>;
});
