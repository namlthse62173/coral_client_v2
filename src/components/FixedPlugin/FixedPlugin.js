import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "react-bootstrap-switch";

function FixedPlugin(props) {
  const [classes, setClasses] = React.useState("dropdown");
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };
  const onMiniClick = () => {
    props.handleMiniClick();
  };
  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  props.bgColor === "yellow"
                    ? "badge filter badge-yellow active"
                    : "badge filter badge-yellow"
                }
                data-color="yellow"
                onClick={() => {
                  props.handleColorClick("yellow");
                }}
              />
              <span
                className={
                  props.bgColor === "blue"
                    ? "badge filter badge-blue active"
                    : "badge filter badge-blue"
                }
                data-color="blue"
                onClick={() => {
                  props.handleColorClick("blue");
                }}
              />
              <span
                className={
                  props.bgColor === "green"
                    ? "badge filter badge-green active"
                    : "badge filter badge-green"
                }
                data-color="green"
                onClick={() => {
                  props.handleColorClick("green");
                }}
              />
              <span
                className={
                  props.bgColor === "orange"
                    ? "badge filter badge-orange active"
                    : "badge filter badge-orange"
                }
                data-color="orange"
                onClick={() => {
                  props.handleColorClick("orange");
                }}
              />
              <span
                className={
                  props.bgColor === "red"
                    ? "badge filter badge-red active"
                    : "badge filter badge-red"
                }
                data-color="red"
                onClick={() => {
                  props.handleColorClick("red");
                }}
              />
            </div>
          </li>
          {window.location.href.indexOf("/auth/") > -1 ? null : (
            <li className="header-title">Mini sidebar</li>
          )}
          {window.location.href.indexOf("/auth/") > -1 ? null : (
            <li className="adjustments-line">
              <div className="togglebutton switch-sidebar-mini">
                <span className="label-switch">OFF</span>
                <Switch
                  onChange={onMiniClick}
                  value={props.sidebarMini}
                  onText=""
                  offText=""
                />
                <span className="label-switch label-right">ON</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

FixedPlugin.defaultProps = {
  sidebarMini: true,
  handleMiniClick: () => {},
  bgColor: "blue",
  handleColorClick: () => {},
};

FixedPlugin.propTypes = {
  // background color for the Sidebar component
  bgColor: PropTypes.oneOf(["blue", "yellow", "green", "orange", "red"]),
  // function that is called upon pressing the button near the logo
  handleMiniClick: PropTypes.func,
  // bool variable to know if the Sidebar component is minimized or not
  sidebarMini: PropTypes.bool,
  // function that returns the selected color for the Sidebar background
  handleColorClick: PropTypes.func,
};

export default FixedPlugin;
