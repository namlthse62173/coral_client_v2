import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";
import RegisterPage from "views/Pages/RegisterPage";
import LoginPage from "views/Pages/LoginPage";

function Auth(props) {
  const [filterColor, setFilterColor] = React.useState("yellow");
  return (
    <>
      <AuthNavbar {...props} />
      <div className="wrapper wrapper-full-page">
        <div className="full-page section-image" filter-color={filterColor}>
          <Switch>
            <Route
              path="/auth/register-page"
              component={RegisterPage}
            />
            <Route
              path="/auth/login-page"
              component={LoginPage}
            />
            <Redirect from="/" to="/auth/login-page" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    </>
  );
}

export default Auth;
