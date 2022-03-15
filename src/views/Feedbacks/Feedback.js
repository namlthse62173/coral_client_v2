import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Badge,
  Row,
  Col,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";
import SweetAlert from "react-bootstrap-sweetalert";
import { fetchData } from "../../services/Service.js";

const onConfirm = () => {
  console.log("On confirm");
}

const improveData = async (data) => {
  const newData = [];
  for(var i = 0; i < data.length; i++) {
    const email = await fetchUser(data[i].accountId);
    newData.push({
      id: data[i].feedbackId,
      email: email !== "" ? email : data[i].accountId, 
      title: data[i].targetType === 1 ? "Article" : data[i].targetType === 2 ? "Factsheet" : "Other",
      status: data[i].status === 1 ? "Pending" : data[i].status === 2 ? "Approved" : "Rejected",
      content: data[i].feedbackContent,
      time: data[i].createdTime,
    })
  }
  return newData;
}

const fetchUser = async (id) => {
  const res = await fetchData(`api/account/${id}`, "get")
  if (res !== null) {
    return res.email !== undefined ? res.email : "";
  }
  return "";
}

export default function Feedback() {
  const [isManage, setIsManage] = React.useState(true)
  const [detailData, setDetailData] = React.useState({})
  const [data, setData] = React.useState([]);
  const [alert, setAlert] = React.useState(null);
  const [dataState, setDataState] = React.useState(null);

  React.useEffect(async () => {
    async function doFetch() {
      const res = await fetchData("api/feedback", "get")
      if (res !== null) {
        const newData = await improveData(res)
        setData(newData)
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
        title: d.title,
        status: d.status,
        content: d.content,
        time: d.time,
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
                    <h5 className='title'>Feedbacks</h5>
                  </CardHeader>
                  <CardBody>
                    {
                      dataState !== null ?
                        <ReactTable
                          data={dataState}
                          columns={[
                            {
                              Header: "User",
                              accessor: "email",
                            },
                            {
                              Header: "Title",
                              accessor: "title",
                            },
                            {
                              Header: "Feedback status",
                              accessor: "status",
                            },
                            {
                              Header: "Content",
                              accessor: "content",
                            },
                            {
                              Header: "Send time",
                              accessor: "time",
                            },
                            {
                              Header: "Actions",
                              accessor: "actions",
                              sortable: false,
                              filterable: false,
                            },
                          ]}
                        />
                        : ""
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
                    <h5 className='title'>Feedback Detail</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline">
                      <div className="timeline-inverted">
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <Badge color="danger">{detailData.title}</Badge>
                          </div>
                          <div className="timeline-body">
                            <p>
                              {detailData.content}
                            </p>
                            <hr />
                            <p>{`From: ${detailData.email}`}</p>
                            <p>{`At: ${detailData.time}`}</p>
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
