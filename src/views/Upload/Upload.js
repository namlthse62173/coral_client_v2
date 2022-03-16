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
import { firebaseUpload } from 'services/FireBaseService.js';

var locationSelections = [
  { value: "location_1", label: "Location 1" },
  { value: "location_2", label: "Location 2" },
  { value: "location_3", label: "Location 3" },
];
var seasonSelections = [
  { value: "season_1", label: "Season 1" },
  { value: "season_2", label: "Season 2" },
  { value: "season_3", label: "Season 3" },
];
var divingSelections = [
  { value: "diving_1", label: "Diving 1" },
  { value: "diving_2", label: "Diving 2" },
  { value: "diving_3", label: "Diving 3" },
];

export default function Upload() {
  const [locationSelect, setLocationSelect] = React.useState(null)
  const [seasonSelect, setSeasonSelect] = React.useState(null)
  const [divingSelect, setDivingSelect] = React.useState(null)

  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFile, setSingleFile] = React.useState(null);
  const singleFileRef = React.useRef();

  const addSingleFile = async (e, type) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(files[0]);
    setSingleFileName(fileNames);
  };
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };

  /* Handle input of user */
  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log({
      title: data.get('title'),
      content: data.get('content'),
    })

    /* Upload to firebase */
    if (singleFile !== null && singleFileName !== '') {
      const fileUrl = await firebaseUpload('media', singleFile, singleFileName);
      console.log(fileUrl)
    }
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
                <h5 className="title">Upload images/video</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Location</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Location select"
                          name="title"
                          value={locationSelect}
                          options={locationSelections}
                          onChange={(value) => setLocationSelect(value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Season</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Season select"
                          name="title"
                          value={seasonSelect}
                          options={seasonSelections}
                          onChange={(value) => setSeasonSelect(value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-5" md="12">
                      <FormGroup>
                        <label>Diving</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          placeholder="Diving select"
                          name="title"
                          value={divingSelect}
                          options={divingSelections}
                          onChange={(value) => setDivingSelect(value)}
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
