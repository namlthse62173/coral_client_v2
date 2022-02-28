import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  const [profile, setProfile] = React.useState({})
  React.useEffect(() => {
    setProfile({
      firstName: 'Lưu Thuận',
      lastName: 'Hoàng Nam',
      email: 'namlthse62173@fpt.edu.vn',
      phone: '0945300797',
      address: '335 Hoàng Sa'
    })
  }, [])

  const handleSave = e => {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log({ 
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('phone'),
      address: data.get('address')
     })
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSave}>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>First name</label>
                        <Input
                          name="firstName"
                          placeholder="First name"
                          defaultValue={profile.firstName}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Last name</label>
                        <Input
                          name="lastName"
                          placeholder="Last name"
                          defaultValue={profile.lastName}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          name="email"
                          placeholder="Email"
                          defaultValue={profile.email}
                          disabled
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Phone</label>
                        <Input
                          name="phone"
                          placeholder="Phone"
                          defaultValue={profile.phone}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-3" md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          name="address"
                          placeholder="Address"
                          defaultValue={profile.address}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button 
                    className="btn-round btn btn-primary"
                  >
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/ava.jpg").default}
                    />
                    <h5 className="title">{`${profile.firstName} ${profile.lastName}`}</h5>
                  </a>
                  <p className="description text-center">{profile.email}</p>
                  <p className="description text-center">{profile.phone}</p>
                </div>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-square" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
