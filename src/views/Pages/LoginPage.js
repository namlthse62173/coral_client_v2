import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  CardTitle,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";
import bgImage from "assets/img/auth-bg.jpg";

const verifyEmail = (value) => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
}
const verifyLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
}
const verifyData = (loginData) => {
  if (loginData.email === "") {
    return false;
  }
  if (loginData.password === "") {
    return false;
  }
  return true;
}

function LoginPage() {
  const [emailFocus, setemailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const [loginEmailState, setLoginEmailState] = React.useState("");
  const [loginPasswordState, setLoginPasswordState] = React.useState("");

  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleLogin = e => {
    e.preventDefault();
    if (loginEmailState === "") {
      setLoginEmailState("has-danger");
    }
    if (loginPasswordState === "") {
      setLoginPasswordState("has-danger");
    }

    const data = new FormData(e.target);
    const loginData = {
      email: data.get('email'),
      password: data.get('password')
    }

    if (verifyData(loginData)) {
      console.log("Form data is accepted")
      console.log({ loginData })
    } else {
      console.log("Form data is not accepted")
    }
  }

  return (
    <>
      <div className="content position-fixed">
        <div className="login-page">
          <Container>
            <Col xs={12} md={8} lg={6} className="ml-auto mr-auto">
              <Form onSubmit={handleLogin}>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">LOGIN</CardTitle>
                  </CardHeader>
                  <CardBody>
                    {/* Email */}
                    <InputGroup
                      className={emailFocus ? `input-group-focus ${loginEmailState}` : `${loginEmailState}`}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        onFocus={() => setemailFocus(true)}
                        onBlur={() => setemailFocus(false)}
                        onChange={(e) => {
                          if (!verifyEmail(e.target.value)) {
                            setLoginEmailState("has-danger");
                          } else {
                            setLoginEmailState("has-success");
                          }
                        }}
                      />
                    </InputGroup>

                    {/* Password */}
                    <InputGroup
                      className={passwordFocus ? `input-group-focus ${loginPasswordState}` : `${loginPasswordState}`}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        onChange={(e) => {
                          if (!verifyLength(e.target.value, 1)) {
                            setLoginPasswordState("has-danger");
                          } else {
                            setLoginPasswordState("has-success");
                          }
                        }}
                      />
                    </InputGroup>
                  </CardBody>

                  {/* Button */}
                  <CardFooter>
                    <Button
                      block
                      color="primary"
                      size="small"
                    >
                      Start login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a href="/auth/register-page" className="link footer-link text-primary">
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a href="" className="link footer-link text-primary">
                          Forgot password
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </div>
      <div
        className="full-page-background"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    </>
  );
}

export default LoginPage;
