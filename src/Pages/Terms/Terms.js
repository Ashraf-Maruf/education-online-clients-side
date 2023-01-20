import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <h3>Here is our Terms and conditions</h3>
                        <p>If you register on our web application. Then we will give you the opportunity to do online classes, thanks.</p>
                        <p>Go back to: <Link to='/register'>Register</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Terms;