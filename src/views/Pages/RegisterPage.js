import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import bgImage from "assets/img/auth-bg.jpg";
import { fetchData } from "services/Service";
import NotificationAlert from "react-notification-alert";
import { AppContext, Loading } from "context/AppProvider";

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
const compare = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  return false;
}
const verifyData = (registerData) => {
  if (registerData.email === "") {
    return false;
  }
  if (registerData.fullName === "") {
    return false;
  }
  if (registerData.password === "") {
    return false;
  }
  if (registerData.confirmPassword === "") {
    return false;
  }
  if (registerData.password !== registerData.confirmPassword) {
    return false;
  }
  return true;
}

function RegisterPage() {
  const [firstnameFocus, setfirstnameFocus] = React.useState(false);
  const [lastnameFocus, setlastnameFocus] = React.useState(false);
  const [emailFocus, setemailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordRememFocus, setPasswordRememFocus] = React.useState(false);

  const [registerEmailState, setRegisterEmailState] = React.useState("");
  const [registerFirstNameState, setRegisterFirstNameState] = React.useState("");
  const [registerLastNameState, setRegisterLastNameState] = React.useState("");
  const [registerPasswordState, setRegisterPasswordState] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [registerConfirmPasswordState, setRegisterConfirmPasswordState] = React.useState("");
  const { notify, notificationAlert } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);

  const handleRegister = async e => {
    e.preventDefault()

    if (registerEmailState === "") {
      setRegisterEmailState("has-danger");
    }
    if (registerFirstNameState === "") {
      setRegisterFirstNameState("has-danger");
    }
    if (registerLastNameState === "") {
      setRegisterLastNameState("has-danger");
    }
    if (registerPasswordState === "") {
      setRegisterPasswordState("has-danger");
    }
    if (registerConfirmPasswordState === "") {
      setRegisterConfirmPasswordState("has-danger");
    }

    const data = new FormData(e.target);
    const registerData = {
      email: data.get('email'),
      fullName: `${data.get('firstName')} ${data.get('lastName')}`,
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    }

    if (verifyData(registerData)) {
      setIsLoading(true)
      const res = await fetchData("api/account", "post", registerData);

      if (res instanceof Error) {
        setIsLoading(false)
        notify(res.message, "danger");
      } else {
        setIsLoading(false)
        notify("Create account successfully", "success");
      }
    }
  }

  return isLoading ? <Loading/> : (
    <>
      <div className="content position-fixed">
        <div className="register-page">
          <NotificationAlert ref={notificationAlert} />
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={8} xs={12}>
                <Card >
                  {/* Register header */}
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">REGISTER</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={handleRegister}>

                      {/* Emal */}
                      <InputGroup
                        className={emailFocus ? `input-group-focus ${registerEmailState}` : `${registerEmailState}`}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email"
                          onFocus={() => setemailFocus(true)}
                          onBlur={() => setemailFocus(false)}
                          onChange={(e) => {
                            if (!verifyEmail(e.target.value)) {
                              setRegisterEmailState("has-danger");
                            } else {
                              setRegisterEmailState("has-success");
                            }
                          }}
                        />
                      </InputGroup>

                      {/* First name */}
                      <InputGroup
                        className={firstnameFocus ? `input-group-focus ${registerFirstNameState}` : `${registerFirstNameState}`}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          onFocus={() => setfirstnameFocus(true)}
                          onBlur={() => setfirstnameFocus(false)}
                          onChange={(e) => {
                            if (!verifyLength(e.target.value, 1)) {
                              setRegisterFirstNameState("has-danger");
                            } else {
                              setRegisterFirstNameState("has-success");
                            }
                          }}
                        />
                      </InputGroup>

                      {/* Last name */}
                      <InputGroup
                        className={lastnameFocus ? `input-group-focus ${registerLastNameState}` : `${registerLastNameState}`}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          onFocus={() => setlastnameFocus(true)}
                          onBlur={() => setlastnameFocus(false)}
                          onChange={(e) => {
                            if (!verifyLength(e.target.value, 1)) {
                              setRegisterLastNameState("has-danger");
                            } else {
                              setRegisterLastNameState("has-success");
                            }
                          }}
                        />
                      </InputGroup>

                      {/* Password */}
                      <InputGroup
                        className={passwordFocus ? `input-group-focus ${registerPasswordState}` : `${registerPasswordState}`}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons travel_info" />
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
                              setRegisterPasswordState("has-danger");
                            } else {
                              setRegisterPasswordState("has-success");
                            }
                            setRegisterPassword(e.target.value);
                          }}
                        />
                      </InputGroup>

                      {/* Password confirm */}
                      <InputGroup
                        className={passwordRememFocus ? `input-group-focus ${registerConfirmPasswordState}` : `${registerConfirmPasswordState}`}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons travel_info" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm password"
                          onFocus={() => setPasswordRememFocus(true)}
                          onBlur={() => setPasswordRememFocus(false)}
                          onChange={(e) => {
                            if (!compare(e.target.value, registerPassword)) {
                              setRegisterConfirmPasswordState("has-danger");
                              setRegisterPasswordState("has-danger");
                            } else {
                              setRegisterConfirmPasswordState("has-success");
                              setRegisterPasswordState("has-success");
                            }
                          }}
                        />
                      </InputGroup>

                      {/* Button */}
                      <CardFooter className="text-center">
                        <Button
                          color="primary"
                          size="small"
                          type="submit"
                        >
                          Start register
                        </Button>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
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

export default RegisterPage;
