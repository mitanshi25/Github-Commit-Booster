import React,{useEffect,useState} from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";

function Header(props) {
    const [data,setData]=useState("");

    useEffect(()=>{
        let str="";
        for(var i=1;i<=props.count;i++){
            str=str+`commit ${i} success\n`
        }
        setData(str);
    },[props.count])

  return (
    <Modal show={props.visibility} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Status</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="sub-heading">
          commits : {props.count}/{props.userCount}
        </p>
        <p className="sub-heading">
          Progress : {Math.round((props.count / props.userCount) * 100)}%
        </p>
        <ProgressBar
          animated
          variant="success"
          now={
            props.count === 0
              ? 3
              : Math.round((props.count / props.userCount) * 100)
          }
        />
        <pre>
            {data}
        </pre>
      </Modal.Body>

      <Modal.Footer>
        <Button
          block
          variant="danger"
          style={{ display: props.count < props.userCount ? "block" : "none" }}
        >
          Stop
        </Button>
        <Button
          block
          variant="info"
          onClick={() => props.hideModal()}
          style={{
            display: props.count === props.userCount ? "block" : "none",
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Header;
