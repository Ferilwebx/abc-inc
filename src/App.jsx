import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';

import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Infrastructure from '@/pages/Infrastructure';
import Quality from '@/pages/Quality';
import Contact from '@/pages/Contact';
import RFQ from '@/pages/RFQ';
import Gallery from '@/pages/Gallery';
import Downloads from '@/pages/Downloads';
import Careers from '@/pages/Careers';
import Blog from '@/pages/Blog';
import HPDC from '@/pages/capabilities/HPDC';
import GDC from '@/pages/capabilities/GDC';
import CNC from '@/pages/capabilities/CNC';
import PrecisionEngineering from '@/pages/capabilities/PrecisionEngineering';
import AutomotiveEV from '@/pages/industries/AutomotiveEV';
import IndustrialEquipment from '@/pages/industries/IndustrialEquipment';
import Aerospace from '@/pages/industries/Aerospace';
import Energy from '@/pages/industries/Energy';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import RefundPolicy from '@/pages/legal/RefundPolicy';
import ShippingPolicy from '@/pages/legal/ShippingPolicy';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-foundry">
        <div className="w-8 h-8 border-4 border-slate-700 border-t-precision rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rfq" element={<RFQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/capabilities/hpdc" element={<HPDC />} />
        <Route path="/capabilities/gdc" element={<GDC />} />
        <Route path="/capabilities/cnc" element={<CNC />} />
        <Route path="/capabilities/precision-engineering" element={<PrecisionEngineering />} />
        <Route path="/industries/automotive-ev" element={<AutomotiveEV />} />
        <Route path="/industries/industrial-equipment" element={<IndustrialEquipment />} />
        <Route path="/industries/aerospace" element={<Aerospace />} />
        <Route path="/industries/energy" element={<Energy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App