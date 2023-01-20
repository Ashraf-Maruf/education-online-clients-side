import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Teacher = ({ te }) => {
    const { name, sub, image } = te;
    return (
        <Row>
            <Col>
                <Card className='mb-4'>
                    <Card.Img variant="top" className='p-3' style={{height:'300px'}} src={image} />
                    <Card.Body>
                        <Card.Title className='text-center'>Teacher: <small>{name}</small></Card.Title>
                        <Card.Text className='text-center'>Sub: <small>{sub}</small></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default Teacher;