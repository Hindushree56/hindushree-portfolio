import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomCursor } from './components/common/CustomCursor';
import { PageLoader } from './components/common/PageLoader';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>
      <CustomCursor />
      {!isLoading && (
        <BrowserRouter>
          <Layout theme={theme} toggleTheme={toggleTheme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
