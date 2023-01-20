import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CoursesItem = ({ co }) => {    
    const { category_id, title, price, image_url, details } = co;
    return (
        <div>
            <Card ref={ref} style={{ width: '100%', margin: '78px auto' }}>
                <Card.Img variant="top" style={{ height: '300px' }} src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p>Price:<small className='ms-2'>{price}$</small></p>
                </Card.Body>
                <div className='d-flex justify-content-between'>
                    <Link className="btn btn-primary" to={`/checkout/${category_id}`}>Courses Buy</Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} className='btn btn-primary'>Download Pdf</Button>}
                    </Pdf>
                </div>
            </Card>
        </div >
    );
};

export default CoursesItem;