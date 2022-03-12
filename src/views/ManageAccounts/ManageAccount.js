import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";
import SweetAlert from "react-bootstrap-sweetalert";
import { fetchData } from "../../services/Service.js";

export default function ManageAccount() {
  const [isManage, setIsManage] = React.useState(true)
  const [detailData, setDetailData] = React.useState({})
  const [data, setData] = React.useState([]);
  const [alert, setAlert] = React.useState(null);
  const [dataState, setDataState] = React.useState(null);

  React.useEffect(async () => {
    async function doFetch() {
      const res = await fetchData("api/account", "get")
      if (res !== null) {
        setData(res)
        return
      } else {
        console.log('error')
        return
      }
    }
    doFetch();
  }, []);

  React.useEffect(() => {
    setDataState(data.map((d, key) => {
      return {
        id: key,
        email: d.email,
        fullName: d.fullName,
        role: d.role,
        createdDate: d.createdTime,
        lastOnline: d.lastModifiedTime,
        actions: (
          <div className="actions-right">
            <Button
              onClick={() => {
                let obj = data[key]
                handleView({ ...obj, actions: "" })
              }}
              className="btn-icon btn-round"
              color="warning"
              size="sm"
            >
              <i className="fa fa-eye" />
            </Button>{" "}
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
    }))
  }, [data]);

  const handleView = obj => {
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
                    {
                      dataState !== null ?
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
                        /> :
                        ""
                    }
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
                          {/* <div className="timeline-heading">
                            <Badge color="danger">{detailData.title}</Badge>
                          </div> */}
                          <div className="timeline-body">
                            <hr />
                            <p>{`Email: ${detailData.email}`}</p>
                            <p>{`Full name: ${detailData.fullName}`}</p>
                            <p>{`Role: ${detailData.role}`}</p>
                            <p>{`Created date: ${detailData.createdTime}`}</p>
                            <p>{`Last online: ${detailData.lastModifiedTime}`}</p>
                            <p>{`Deleted: ${detailData.isDeleted}`}</p>
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
