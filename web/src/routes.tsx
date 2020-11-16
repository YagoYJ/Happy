import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphangesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanage/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
