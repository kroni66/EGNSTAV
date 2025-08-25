import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const StavebniCinnost = lazy(() => import("@/pages/stavebni-cinnost"));
const Energetika = lazy(() => import("@/pages/energetika"));
const ZamerovaniBudov = lazy(() => import("@/pages/zamerovani-budov"));
const Ekostavby = lazy(() => import("@/pages/ekostavby"));
const MontazeKlimatizaci = lazy(() => import("@/pages/montaze-klimatizaci"));
const Uctovnictvi = lazy(() => import("@/pages/uctovnictvi"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/stavebni-cinnost" component={StavebniCinnost} />
      <Route path="/energetika" component={Energetika} />
      <Route path="/zamerovani-budov" component={ZamerovaniBudov} />
      <Route path="/ekostavby" component={Ekostavby} />
      <Route path="/montaze-klimatizaci" component={MontazeKlimatizaci} />
      <Route path="/uctovnictvi" component={Uctovnictvi} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
