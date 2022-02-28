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
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger'],
];

export default function Factsheet() {
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
      <div className='content'>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className='text-center'>
                <h5 className="title">Factsheets</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className='px-5'>
                    <TreeView
                      aria-label="multi-select"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                      multiSelect
                    >
                      <TreeItem nodeId="1" label="Applications">
                        <TreeItem nodeId="2" label="Calendar" />
                        <TreeItem nodeId="3" label="Chrome" />
                        <TreeItem nodeId="4" label="Webstorm" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="6" label="MUI">
                          <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                    </TreeView>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
