import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.5.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/admin"
        render={(props) => {
          return <AdminLayout {...props} />;
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
  </BrowserRouter>,
  document.getElementById("root")
);
