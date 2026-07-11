import { lazy, Suspense } from 'react';
import { Hero } from '../components/sections/Hero';

const PortfolioSections = lazy(() => import('../components/sections/PortfolioSections').then((module) => ({ default: module.PortfolioSections })));

export function HomePage() {
  return <><Hero /><Suspense fallback={<div className="sections-loading" aria-label="Loading portfolio sections" />}><PortfolioSections /></Suspense></>;
}
