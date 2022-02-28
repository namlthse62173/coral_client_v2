import React from "react";
import PropTypes from "prop-types";

function PanelHeader(props) {
  return (
    <div
      className={
        "panel-header " +
        (props.size !== undefined ? "panel-header-" + props.size : "")
      }
    >
      {props.content}
    </div>
  );
}

PanelHeader.defaultProps = {
  size: undefined,
  content: null,
};

PanelHeader.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", undefined]),
  content: PropTypes.node,
};

export default PanelHeader;
