import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Spinner } from "./components/ui/Spinner";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <Spinner size="lg" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </Suspense>
      <Routes>
        <Route path="*" element={<><Footer /><WhatsAppButton /></>} />
      </Routes>
    </div>
  );
}

export default App;
