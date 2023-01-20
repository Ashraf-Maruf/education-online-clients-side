import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Teacher from '../Teacher/Teacher';
import { FaAngleDoubleRight} from "react-icons/fa";
import './Home.css'
const Home = () => {
    const teacher = useLoaderData()
    return (
        <div>
            <div className='home-area'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <div className='home-text d-flex justify-content-center align-items-center'>
                                <div className='text-center'>
                                    <h1>Online Education Platform</h1>
                                    <p>An online learning platform is a webspace or portal for educational content and resources that offers a student everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more. It is also an excellent way for the student and the teacher to monitor student progress.</p>
                                    <Link to='/courses' className='btn btn-outline-info px-5 py-2'>Go o courses <span><FaAngleDoubleRight/></span></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='teacher-area'>
                <Container>
                    <h1 className='text-center text-white position-relative pt-4'>This is Teacher Section</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ms-5 pt-4 pb-4">
                        {
                            teacher.map(te => <Teacher
                                key={te.id}
                                te={te}
                            ></Teacher>)
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;