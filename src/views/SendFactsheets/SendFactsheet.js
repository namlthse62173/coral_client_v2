import React from 'react';
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
import Select from "react-select";

var parentCorals = [
  { value: "parent_1", label: "Parent 1" },
  { value: "parent_2", label: "Parent 2" },
  { value: "parent_3", label: "Parent 3" },
];

export default function SendFactsheet() {

  const [parentSelect, setParentSelect] = React.useState(null)
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const singleFileRef = React.useRef();

  const addSingleFile = (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(files);
    setSingleFileName(fileNames);
  };
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };

  /* Handle input of user */
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log({
      title: data.get('title'),
      content: data.get('content'),
    })
    console.log(singleFile)
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className='content'>
        <Row>
          <Col md="1" />
          <Col md="10">
            <Card>
              <CardHeader className='text-center'>
                <h5 className="title">Contribute factsheet</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Taxonomi</label>
                        <Input
                          name="content"
                          placeholder="Enter the taxonomi here..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Parent</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Season select"
                          name="title"
                          value={parentSelect}
                          options={parentCorals}
                          onChange={(value) => setParentSelect(value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Title</label>
                        <Input
                          name="content"
                          placeholder="Enter the title here..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          name="content"
                          placeholder="Enter the title here..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Choose your image/video</label>
                        <Input
                          type="text"
                          className="inputFileVisible"
                          placeholder="File chooser..."
                          onClick={(e) => handleSingleFileInput(e)}
                          defaultValue={singleFileName}
                        />
                        <input
                          type="file"
                          className="inputFileHidden"
                          style={{ zIndex: -1 }}
                          ref={singleFileRef}
                          onChange={(e) => addSingleFile(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <Button
                        className="btn-round btn btn-primary"
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
