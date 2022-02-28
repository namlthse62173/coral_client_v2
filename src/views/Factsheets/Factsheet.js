import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { ArrowCircleDownOutlined, ArrowCircleRightOutlined, BlockOutlined } from '@mui/icons-material'

const fakeData = [
    {
      "name": "Jeremiah Griffin",
      "address": "190 Filzu Avenue"
    },
    {
      "name": "Myrtle Carr",
      "address": "1843 Juamo Street"
    },
    {
      "name": "Sarah Fisher",
      "address": "1618 Pudo Lane",
      "subname": [
        {
          "name": "Garrett Delgado",
          "address": "338 Ogim Place"
        },
        {
          "name": "Nancy Holloway",
          "address": "1023 Zacwal Point"
        },
        {
          "name": "Gerald Fowler",
          "address": "1366 Juvi Mill"
        },
        {
          "name": "Edward Woods",
          "address": "596 Opilek Loop"
        },
        {
          "name": "May Rivera",
          "address": "1795 Fodoge Mill"
        }
      ]
    },
    {
      "name": "Sam Griffith",
      "address": "1884 Mohza Ridge"
    },
    {
      "name": "Arthur Stephens",
      "address": "498 Jegbu Parkway"
    },
    {
      "name": "Terry Newman",
      "address": "502 Zuwbu Place",
      "subname": [
        {
          "name": "Martin Turner",
          "address": "57 Varug Junction"
        },
        {
          "name": "Verna Atkins",
          "address": "1377 Bafpi Glen"
        },
        {
          "name": "Bruce Huff",
          "address": "1139 Cudhi Parkway"
        }
      ],
    },
    {
      "name": "Olivia Adkins",
      "address": "245 Cusu Center"
    },
    {
      "name": "Ellen Lamb",
      "address": "126 Zaznin Plaza"
    },
    {
      "name": "Frederick Mills",
      "address": "142 Mowgen Turnpike",
      "subname": [
        {
          "name": "Hannah Copeland",
          "address": "84 Deevi Trail"
        },
        {
          "name": "Amy Conner",
          "address": "1253 Suvri Manor"
        }
      ],
    },
    {
      "name": "Helen Keller",
      "address": "1772 Guvul Highway"
    },
    {
      "name": "Jeremiah Griffin",
      "address": "190 Filzu Avenue"
    },
    {
      "name": "Myrtle Carr",
      "address": "1843 Juamo Street"
    },
    {
      "name": "Sarah Fisher",
      "address": "1618 Pudo Lane",
      "subname": [
        {
          "name": "Garrett Delgado",
          "address": "338 Ogim Place"
        },
        {
          "name": "Nancy Holloway",
          "address": "1023 Zacwal Point"
        },
        {
          "name": "Gerald Fowler",
          "address": "1366 Juvi Mill"
        },
        {
          "name": "Edward Woods",
          "address": "596 Opilek Loop"
        },
        {
          "name": "May Rivera",
          "address": "1795 Fodoge Mill"
        }
      ]
    },
    {
      "name": "Sam Griffith",
      "address": "1884 Mohza Ridge"
    },
    {
      "name": "Arthur Stephens",
      "address": "498 Jegbu Parkway"
    },
    {
      "name": "Terry Newman",
      "address": "502 Zuwbu Place",
      "subname": [
        {
          "name": "Martin Turner",
          "address": "57 Varug Junction"
        },
        {
          "name": "Verna Atkins",
          "address": "1377 Bafpi Glen"
        },
        {
          "name": "Bruce Huff",
          "address": "1139 Cudhi Parkway"
        }
      ],
    },
    {
      "name": "Olivia Adkins",
      "address": "245 Cusu Center"
    },
    {
      "name": "Ellen Lamb",
      "address": "126 Zaznin Plaza"
    },
    {
      "name": "Frederick Mills",
      "address": "142 Mowgen Turnpike",
      "subname": [
        {
          "name": "Hannah Copeland",
          "address": "84 Deevi Trail"
        },
        {
          "name": "Amy Conner",
          "address": "1253 Suvri Manor"
        }
      ],
    },
    {
      "name": "Helen Keller",
      "address": "1772 Guvul Highway"
    }
]

export default function Factsheet() {

  const [data, setData] = React.useState([])
  React.useEffect(() => {
    setData(fakeData)
  }, [])

  const handleClick = e => {
    console.log(e)
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
                  <Col className='p-5'>
                    <TreeView
                      aria-label="multi-select"
                      defaultCollapseIcon={<ArrowCircleDownOutlined />}
                      defaultExpandIcon={<ArrowCircleRightOutlined />}
                      defaultEndIcon={<BlockOutlined />}
                    >
                      {data.map((val, key) => (
                        <TreeItem
                          key={key}
                          label={val.name}
                          nodeId={key}
                          onClick={val.subname ? "" : () => handleClick({ value: val.name, parent: key })}
                        >
                          {val.subname ? val.subname.map((v, k) => (
                            <TreeItem
                              key={k}
                              label={v.name}
                              nodeId={`${key} - ${k}`}
                              onClick={() => handleClick({ value: v.name, parent: key, child: k })}
                            />
                          )) : ''}
                        </TreeItem>
                      ))}
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
