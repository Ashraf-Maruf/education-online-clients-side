import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursesItem from './../CoursesItem/CoursesItem';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <div>
                            {
                                courses.map(co => <CoursesItem
                                    key={co._id}
                                    co={co}
                                ></CoursesItem>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;