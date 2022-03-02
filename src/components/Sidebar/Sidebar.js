import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import { Nav, Collapse, Button } from "reactstrap";
import avatar from "assets/img/ryan.jpg";
import logo from "../../assets/img/coral.png";

var ps;

function Sidebar(props) {
  const [openAvatar, setOpenAvatar] = React.useState(false);
  const [collapseStates, setCollapseStates] = React.useState({});
  const sidebar = React.useRef();
  
  // Mac scroll
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

  // Render routes
  React.useEffect(() => {
    setCollapseStates(getCollapseStates(props.routes));
  }, []);
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };

  // Creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !collapseStates[prop.state];
        return (
          <li
            className={getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={collapseStates[prop.state]}
              onClick={(e) => {
                e.preventDefault();
                setCollapseStates(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">
                    {prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={collapseStates[prop.state]}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="">
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">{prop.mini}</span>
                <span className="sidebar-normal">{prop.name}</span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };

  const handleLogout = () => {
    console.log("Get logout")
    // Delete credentials here
  }
  return (
    <>
      <div className="sidebar" data-color={props.backgroundColor}>
        <div className="logo">
          <Link
            to="/admin"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </Link>
          <Link
            to="/admin"
            className="simple-text logo-normal"
          >
            CORAL WORLD
          </Link>
        </div>

        <div className="sidebar-wrapper" ref={sidebar}>

          {/* User info */}
          <div className="user">
            <div className="photo">
              <img src={avatar} alt="Avatar" />
            </div>
            <div className="info">
              <a
                data-toggle="collapse"
                aria-expanded={openAvatar}
                onClick={() => setOpenAvatar(!openAvatar)}
              >
                <span>
                  Hoàng Nam
                  <b className="caret" />
                </span>
              </a>
              <Collapse isOpen={openAvatar}>
                <ul className="nav">
                  <li>
                    <Link to="/admin/user-page">
                      <span className="sidebar-mini-icon">MP</span>
                      <span className="sidebar-normal">My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/management/feedback">
                      <span className="sidebar-mini-icon">FB</span>
                      <span className="sidebar-normal">Feedbacks</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth" onClick={handleLogout}>
                      <span className="sidebar-mini-icon">L</span>
                      <span className="sidebar-normal">Logout</span>
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
          <Nav>{createLinks(props.routes)}</Nav>
        </div>
      </div>
    </>
  );
}

Sidebar.defaultProps = {
  routes: [],
  showNotification: false,
  backgroundColor: "blue",
  minimizeSidebar: () => {},
};

Sidebar.propTypes = {
  // links that are rendered
  routes: PropTypes.arrayOf(PropTypes.object),
  // if you want to show a notification when switching between mini sidebar and normal
  showNotification: PropTypes.bool,
  // background color for the component
  backgroundColor: PropTypes.oneOf([
    "blue",
    "yellow",
    "green",
    "orange",
    "red",
  ]),
  // function that is called upon pressing the button near the logo
  minimizeSidebar: PropTypes.func,
};

export default Sidebar;
