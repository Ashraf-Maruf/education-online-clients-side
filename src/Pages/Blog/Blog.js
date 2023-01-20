import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog-area'>
            <Container>
                <Row>
                    <h1 className='mb-4 text-center'>Four questions answers</h1>
                    <Row className='mb-3'>                        
                        <Col lg={6}>
                            <div className='blog-text shadow rounded mb-4'>
                                <h1>What Is Authentication?</h1>
                                <p>Authentication is the process of identifying users that request access to a system, network, or device. Access control often determines user identity according to credentials like username and password. Other authentication technologies like biometrics and authentication apps are also used to authenticate user identity.</p>
                                <h2 className='mt-2'>Why Is User Authentication Important?</h2>
                                <p>1.Password-based authentication</p>
                                <p>2.Multi-factor authentication</p>
                                <p>3.Certificate-based authentication</p>
                                <p>4.Biometric authentication</p>
                                <p>5.Token-based authentication</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <h1>What is CORS?</h1>
                                <p>Cross-origin resource sharing (CORS) is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. It’s a mechanism supported in HTML5 that manages XMLHttpRequest access to a domain different.</p>
                                <p>CORS adds new HTTP headers that provide access to permitted origin domains. For HTTP methods other than GET (or POST with certain MIME types), the specification mandates that browsers first use an HTTP OPTIONS request header to solicit a list of supported (and available) methods from the server. The actual request can then be submitted. Servers can also notify clients whether “credentials” (including Cookies and HTTP Authentication data) should be sent with requests.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4 '>
                        <Col lg={6}>
                            <div className='mb-4'>
                                <h1>How does the private route work?</h1>
                                <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.</p>
                                <p>The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
                                <p>In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='blog-text shadow rounded'>
                                <h1>What Is Node.js?</h1>
                                <p>Node.js is an extremely powerful framework developed on Chrome’s V8 JavaScript engine that compiles the JavaScript directly into the native machine code. It is a lightweight framework used for creating server-side web applications and extends JavaScript API to offer usual server-side functionalities. It is generally used for large-scale application development, especially for video streaming sites, single page application, and other web applications.</p>
                                <h2>How do Node.js works?</h2>
                                <p>Node.js is a virtual machine that uses JavaScript as its scripting language and runs on a v8 environment. It works on a single-threaded event loop and a non-blocking I/O which provides high rate as it can handle a higher number of concurrent requests. Also, by making use of the ‘HTTP’ module, Node.js can run on any stand-alone web server.</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;