import React, { useState } from "react";
import "./style.css";
import {
  Button,
  Container,
  Col,
  Row,
  Alert,
  FormControl,
  Form,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";
import Header from "./Header";

function App() {
  const [userCount, setUserCout] = useState(1);

  const startProcess=()=>{
    console.log("start");
    axios.get("http://localhost:8082/commit");
  }
  
  return (
    <html>
      <Header name="Github Commit Booster" />
      <Container>
        <Row>
          <Col className="text-center main-form" xs={{ span: 6, offset: 3 }}>
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
                    setUserCout(e.target.value);
                  }}
                />
                <Alert variant="primary" className="mt-3">
                  Estimated time is <strong>{userCount * 0.5} minutes</strong>!
                </Alert>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() =>startProcess()}
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
              {/* <ProgressBar variant="success" now={40} /> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </html>
  );
}

export default App;
