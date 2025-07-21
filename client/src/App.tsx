import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import StavebniCinnost from "@/pages/stavebni-cinnost";

import Energetika from "@/pages/energetika";
import ZamerovaniBudov from "@/pages/zamerovani-budov";
import Ekostavby from "@/pages/ekostavby";
import MontazeKlimatizaci from "@/pages/montaze-klimatizaci";
import Uctovnictvi from "@/pages/uctovnictvi";

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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
