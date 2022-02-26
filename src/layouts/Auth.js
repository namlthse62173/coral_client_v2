import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";
import routes from "routes.js";

function Auth(props) {
  const [filterColor, setFilterColor] = React.useState("yellow");
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const handleColorClick = (color) => {
    setFilterColor(color);
  };
  return (
    <>
      <AuthNavbar {...props} />
      <div className="wrapper wrapper-full-page">
        <div className="full-page section-image" filter-color={filterColor}>
          <Switch>
            {getRoutes(routes)}
            <Redirect from="/auth" to="/auth/login-page" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    </>
  );
}

export default Auth;
