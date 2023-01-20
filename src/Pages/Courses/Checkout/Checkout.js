import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Checkdetails from '../Checkdetails/Checkdetails';

const Checkout = () => {
    const checkout = useLoaderData(); 
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            {
                                checkout.map(check => <Checkdetails
                                    
                                    key={check.category_id}
                                    check={check}

                                ></Checkdetails>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;