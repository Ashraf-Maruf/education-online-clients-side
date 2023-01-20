import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <div style={{margin:'100px auto'}}>
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What Is Web Application Development?</Accordion.Header>
                                <Accordion.Body>
                                    <p>A web application is an interactive program that runs on a web server and is accessed through a web browser. A web app is built so that the user interface provides data back to the development team that designed it. This data offers insights into customer interests, usage, and preferences that can prove invaluable to product and marketing strategies. The data can also inform optimization and other client-centered aspects of the mobile app or desktop applications.</p>
                                    <p>A big difference between web applications and webpages is that user experience dictates web application design. Traditional web design is based on server-side programmers making decisions about what might enhance usability. In contrast, a web application has an application program interface (API) that takes in large-scale data from the user side and then funnels that information into automation.</p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is Mobile Application Development?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What Is OOP?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Object-Oriented Computers, or OOPs concepts with real time examples, refer to programming languages that make use of objects. Inheritance, hiding, polymorphism, and other real-world concepts are all part of object-oriented programming. The basic goal of OOPs concepts with real time examples is to connect data and the functions that operate on it so that no other part of the code may access it except that function.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;