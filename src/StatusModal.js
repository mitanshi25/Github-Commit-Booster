import React from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";

function Header(props) {
  return (
    <Modal show={props.visibility} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Status</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ProgressBar animated variant="success" now={Math.round((props.count/props.userCount)*100)} />
        <pre>{props.data}</pre>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger">Stop</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Header;
