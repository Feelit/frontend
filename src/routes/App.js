import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
