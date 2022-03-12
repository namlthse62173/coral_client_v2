import React from 'react';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import CKEditor from 'ckeditor4-react';
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

export default function CreateArticle() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className='text-center'>
                <h5 className="title">Contribute article</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <CKEditor
                      data="<p></p>"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Button
                      className="btn-round btn btn-primary"
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
