import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
