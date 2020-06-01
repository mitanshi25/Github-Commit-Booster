import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Button,
  Container,
  Col,
  Row,
  Alert,
  FormControl,
  Form,
} from "react-bootstrap";
import axios from "axios";
import Header from "./Header";
import StatusModal from "./StatusModal";

function App() {
  const [userCount, setUserCount] = useState(1);
  const [num, setNum] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const startProcess = async () => {
    setShowModal(true);
    for (let i = 1; i <= userCount; i++) {
      await axios.get("http://localhost:8082/commit");
      setNum(i);
    }
  };

  return (
    <html>
      <Header name="Github Commit Booster" />
      <Container>
        <Row>
          <Col className="text-center main-form" xs={{ span: 4, offset: 4 }}>
            <Form>
              <Form.Group>
                <Form.Label className="sub-heading">
                  Number of Commits to perform
                </Form.Label>
                <FormControl
                  type="number"
                  min="1"
                  value={userCount}
                  onChange={(e) => {
                    setUserCount(e.target.value);
                  }}
                />
                <Alert variant="primary" className="mt-3">
                  Estimated time is <strong>{userCount * 0.5} minutes</strong>!
                </Alert>
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => startProcess()}
                disabled={userCount === 0 || userCount === "" ? true : false}
                style={{
                  cursor:
                    userCount === 0 || userCount === ""
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Start
              </Button>
              {/* <Button
                onClick={() => {
                  console.log(num);
                }}
              >
                details
              </Button> */}
            </Form>
          </Col>
        </Row>
        <StatusModal
          visibility={showModal}
          userCount={userCount}
          count={num}
          hideModal={()=>setShowModal(false)}
        />
      </Container>
    </html>
  );
}

export default App;
