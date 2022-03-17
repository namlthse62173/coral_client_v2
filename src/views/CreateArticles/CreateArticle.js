import React from 'react';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import MyUploadAdapter from 'services/UploadAdapter';
import { firebaseUpload, firebaseUploadWithPromise } from 'services/FireBaseService';

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
// import UploadAdapter from 'services/UploadAdapter';
import { UploadAdapter } from 'services/UploadAdapter';

export default function CreateArticle() {
  const testFunction = loader => {
    console.log('test')
    console.log({ "upload": loader })
  }
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
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={editor => {
                        editor.plugins.get("FileRepository").createUploadAdapter = loader => {
                          return new UploadAdapter(loader);
                          // return firebaseUploadWithPromise('article', loader.file, "name")
                        };
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log('Focus.', editor);
                      }}
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
