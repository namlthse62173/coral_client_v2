import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

const demoData = [
  {
    id: 1,
    email: "namlthse62173@fpt.edu.vn",
    title: "article",
    time: "2022-03-02 15:15:00",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 2,
    email: "namlthse62173@fpt.edu.vn",
    title: "factsheet",
    time: "2022-03-02 15:15:00",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 3,
    email: "namlthse62173@fpt.edu.vn",
    title: "other",
    time: "2022-03-02 15:15:00",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
]

export default function Feedback() {
  const [data, setData] = React.useState(demoData);
  const [dataState, setDataState] = React.useState(
    data.map((d, key) => {
      return {
        id: key,
        email: d.email,
        title: d.title,
        time: d.time,
        content: d.content,
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = dataState.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                  obj.email +
                  ", \nposition: " +
                  obj.title +
                  ", \noffice: " +
                  obj.time +
                  ", \nage: " +
                  obj.content +
                  "\n}."
                );
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
                var data = dataState;
                data.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    console.log(data);
                    return true;
                  }
                  return false;
                });
                setDataState(data);
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
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader className='text-center'>
                <h5 className='title'>Feedbacks</h5>
              </CardHeader>
              <CardBody>
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
                      Header: "Send time",
                      accessor: "time",
                    },
                    {
                      Header: "Content",
                      accessor: "content",
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
      </div>
    </>
  )
}
