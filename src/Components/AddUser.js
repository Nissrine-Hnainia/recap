import React, {useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap"
import shortid from 'shortid'

const AddUser = ({handleAdd}) => {
    const [newUser,setNewUser] = useState({
        fullName:"",
        description: "",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAbkVgyQbwYNrSwq0FqWDWCJcOQVOf23DvHbOR-G105CfKl0I0Uo6PhBRTHRlianbvHE&usqp=CAU",
    })   //initial state of the input (<Form.Control>) 
    const handleInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})  //spreading initial state and adding value to the input that match the name
    }
    const [show, setShow] = useState(false);  //initial state of show is false, it doesn't show the Modal
    const handleShow = () => setShow(true);    //function that modifies the initial state of show ===> true
    const handleClose = () => setShow(false);   // function that modifies again the show from true to false
    return (
        <div>
            <Button variant="info" onClick={handleShow} style={{marginTop:"30px"}}>Add user</Button>
            <Modal show={show} onHide={handleClose}>   {/* show is false so the Modal is closed */}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="fullName" type="email" placeholder="Enter your name" onChange={handleInput}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Write a description" onChange={handleInput}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="image" type="text" placeholder="add an image" onChange={handleInput}/>
                </Form.Group>
            </Form>
            <Modal.Footer>
            <Button variant="primary" onClick={() => {
                handleAdd(newUser)     
            }}> {/* handleAdd will fill the list with the new user after changing the input */}
            Add
            </Button>
                <Button variant="secondary" onClick={handleClose}>   {/* after clicking on the button Add user, show is now true we need to close it */}
            Close
            </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddUser
