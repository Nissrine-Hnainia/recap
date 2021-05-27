import React, {useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap"

const AddUser = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="info" onClick={handleShow}>Add user</Button>
            <Modal show={show} onHide={handleClose}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="password" placeholder="Write a description" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="password" placeholder="add an image" />
                </Form.Group>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddUser
