import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.5.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import ResearcherLayout from "layouts/Researcher.js";
import AppProvider from "context/AppProvider";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
          render={(props) => {
            return <AdminLayout {...props} />;
          }}
        />
        <Route
          path="/researcher"
          render={(props) => {
            return <ResearcherLayout {...props} />;
          }}
        />
        <Route
          path="/auth"
          render={(props) => {
            return <AuthLayout {...props} />;
          }}
        />
        <Redirect to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
