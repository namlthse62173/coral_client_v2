import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import NotificationAlert from "react-notification-alert";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import { researcherRoutes } from "routes.js";
import UserPage from "views/Pages/UserPage.js";
import Feedback from "views/Feedbacks/Feedback";
import SendFeedback from "views/SendFeedbacks/SendFeedback";
import Upload from "views/Upload/Upload";
import Dashboard from "views/Dashboard/Dashboard";

var ps;

export default function Researcher(props) {
  const location = useLocation();
  const [sidebarMini, setSidebarMini] = React.useState(true);
  const [backgroundColor, setBackgroundColor] = React.useState("blue");
  const notificationAlert = React.useRef();
  const mainPanel = React.useRef();

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanel.current);
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const minimizeSidebar = () => {

    var message = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      setSidebarMini(false);
      message += "deactivated";
    } else {
      setSidebarMini(true);
      message += "activated";
    }
    document.body.classList.toggle("sidebar-mini");

    var options = {};
    options = {
      place: "br",
      message: message,
      type: "info",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 1,
    };
    notificationAlert.current.notificationAlert(options);
  };
  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/researcher") {
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
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  return (
    <div className="wrapper">
      <NotificationAlert ref={notificationAlert} />
      <Sidebar
        {...props}
        routes={researcherRoutes}
        minimizeSidebar={minimizeSidebar}
        backgroundColor={backgroundColor}
        meta="researcher"
      />
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar {...props} brandText={getActiveRoute(researcherRoutes)} />
        <Switch>
          {getRoutes(researcherRoutes)}
          <Route
            path="/researcher/user-page"
            component={UserPage}
          />
          <Route
            path="/researcher/upload-media"
            component={Upload}
          />
          <Route
            path="/researcher/gallery"
            component={Dashboard}
          />
          <Redirect from="/researcher" to="/researcher/home-page" />
        </Switch>
        {
          window.location.href.indexOf("full-screen-maps") !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
      <FixedPlugin
        handleMiniClick={minimizeSidebar}
        sidebarMini={sidebarMini}
        bgColor={backgroundColor}
        handleColorClick={handleColorClick}
      />
    </div>
  );
}