import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Row,
  Col,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";
import SweetAlert from "react-bootstrap-sweetalert";

const demoData = [
  {
    id: 1,
    email: "namlthse62173@fpt.edu.vn",
    fullName: "Lưu Thuận Hoàng Nam",
    role: "user",
    createdDate: "2022-03-02 15:15:00",
    lastOnline: "2022-03-02 15:15:00"
  },
  {
    id: 2,
    email: "namlthse62173@fpt.edu.vn",
    fullName: "Lưu Thuận Hoàng Nam",
    role: "researcher",
    createdDate: "2022-03-02 15:15:00",
    lastOnline: "2022-03-02 15:15:00"
  },
  {
    id: 3,
    email: "namlthse62173@fpt.edu.vn",
    fullName: "Lưu Thuận Hoàng Nam",
    role: "admin",
    createdDate: "2022-03-02 15:15:00",
    lastOnline: "2022-03-02 15:15:00"
  },
]

const onConfirm = () => {
  console.log("On confirm");
}

export default function ManageAccount() {
  const [isManage, setIsManage] = React.useState(true)
  const [detailData, setDetailData] = React.useState({})
  const [data, setData] = React.useState(demoData);
  const [alert, setAlert] = React.useState(null);

  const handleView = obj => {
    console.log(obj)
    setIsManage(false)
    setDetailData(obj)
  };
  const handleConfirm = () => {
    setAlert(null)
  };
  const handleCancel = () => {
    setAlert(null)
  };
  const handleDelete = obj => {
    console.log("Hey")
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        You will not be able to recover this action!
      </SweetAlert>
    );
  };

  const [dataState, setDataState] = React.useState(
    data.map((d, key) => {
      return {
        id: key,
        email: d.email,
        fullName: d.fullName,
        role: d.role,
        createdDate: d.createdDate,
        lastOnline: d.lastOnline,
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = dataState.find((o) => o.id === key);
                handleView({ ...obj, actions: "" })
              }}
              className="btn-icon btn-round"
              color="warning"
              size="sm"
            >
              <i className="fa fa-eye" />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                let obj = dataState.find((o) => o.id === key);
                handleDelete({ ...obj, actions: "" })
              }}
              className="btn-icon btn-round"
              color="danger"
              size="sm"
            >
              <i className="fa fa-times" />
            </Button>{" "}
          </div>
        ),
      };
    })
  );

  return (
    <>
      <PanelHeader size="sm" />
      <div className='content'>
        {alert}
        {
          isManage ?
            <Row>
              <Col xs={12} md={12}>
                <Card>
                  <CardHeader className='text-center'>
                    <h5 className='title'>Accounts</h5>
                  </CardHeader>
                  <CardBody>
                    <ReactTable
                      data={dataState}
                      columns={[
                        {
                          Header: "Email",
                          accessor: "email",
                        },
                        {
                          Header: "Full name",
                          accessor: "fullName",
                        },
                        {
                          Header: "Role",
                          accessor: "role",
                        },
                        {
                          Header: "Created date",
                          accessor: "createdDate",
                        },
                        {
                          Header: "Last online",
                          accessor: "lastOnline",
                        },
                        {
                          Header: "Actions",
                          accessor: "actions",
                          sortable: false,
                          filterable: false,
                        },
                      ]}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            :
            <Row>
              <Col xs={12} md={12}>
                <Card>
                  <CardHeader className='text-center'>
                    <h5 className='title'>Account Detail</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline">
                      <div className="timeline-inverted">
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <Badge color="danger">{detailData.title}</Badge>
                          </div>
                          <div className="timeline-body">
                            <hr />
                            <p>{`Email: ${detailData.email}`}</p>
                            <p>{`Full name: ${detailData.fullName}`}</p>
                            <p>{`Role: ${detailData.role}`}</p>
                            <p>{`Created date: ${detailData.createdDate}`}</p>
                            <p>{`Last online: ${detailData.lastOnline}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className='btn btn-secondary btn-sm'
                      onClick={() => setIsManage(true)}
                    >
                      Back
                    </button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        }

      </div>
    </>
  )
}
