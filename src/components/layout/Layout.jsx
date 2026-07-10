import { Navbar } from './Navbar';
import { ScrollProvider } from '../../context/ScrollContext';

export function Layout({ theme, toggleTheme, children }) {
  return (
    <ScrollProvider><div className="site-shell">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </div></ScrollProvider>
  );
}
