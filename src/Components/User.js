import React from 'react';
import {Card, Button} from "react-bootstrap"

const User = ({fullName, description, image}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
