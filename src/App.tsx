import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  ScenarioSection,
  FeatureSection,
  AIWorkflowSection,
  CTASection,
} from './components/landing';
import { ConsoleLayout } from './components/layout/ConsoleLayout';
import { OverviewPage } from './components/console/OverviewPage';
import { CasesPage } from './components/console/CasesPage';
import { RulesPage } from './components/console/RulesPage';
import { SimulatorPage } from './components/console/SimulatorPage';
import { DashboardPage } from './components/console/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <ScenarioSection />
            <FeatureSection />
            <AIWorkflowSection />
            <CTASection />
          </main>
        } />
        <Route path="/risk-console" element={<ConsoleLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="simulator" element={<SimulatorPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;