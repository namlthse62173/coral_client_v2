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

var selectOptions = [
  { value: "article", label: "Article" },
  { value: "factsheet", label: "Factsheet" },
  { value: "other", label: "Other" },
];

export default function SendFeedback() {

  const [singleSelect, setSingleSelect] = React.useState(null);
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
                <h5 className="title">Send Feedback</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Title</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Title Select"
                          name="title"
                          value={singleSelect}
                          options={selectOptions}
                          onChange={(value) => setSingleSelect(value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Feedback Details</label>
                        <Input
                          name="content"
                          placeholder="Enter your feedback here..."
                          type="textarea"
                          style={{ borderRadius: 19, border: "1px solid #e3e3e3" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
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
