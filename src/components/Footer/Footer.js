import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid}>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Coral World
        </div>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  default: false,
  fluid: false,
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
