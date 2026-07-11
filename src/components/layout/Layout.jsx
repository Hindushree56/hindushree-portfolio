import { Navbar } from './Navbar';
import { ScrollProvider } from '../../context/ScrollContext';
import { Footer } from './Footer';

export function Layout({ theme, toggleTheme, children }) {
  return (
    <ScrollProvider><div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">{children}</main>
      <Footer />
    </div></ScrollProvider>
  );
}
