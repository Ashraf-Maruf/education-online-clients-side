import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './AllCourses.css';
const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch(' https://education-online-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div className='allcourses-area mb-3'>
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 pt-5 pb-5">
                            {
                                allCourses.map(ac => <RightSide
                                    key={ac._id}
                                    ac={ac}
                                ></RightSide>)
                            }
                        </div>
                    </Col>
                    <Col lg={3} className='d-none d-lg-block'>                        
                        <LeftSide></LeftSide>                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllCourses;