import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from './../../../Contexts/AuthProvider/AuthProvider';

const Checkdetails = ({check}) => {
    const { user } = useContext(AuthContext)   
    const {title,price,image_url} = check; 
    return (
        <div>
            <div>
                <Card style={{ width: '100%',margin:'100px auto' }}>
                    <Card.Img variant="top" className='p-2' style={{ height: '300px' }} src={image_url} />
                    <Card.Body>
                        <Card.Title>Courses Name: <small>{title}</small></Card.Title>
                        <Card.Text>
                            <h6>User Name: <small>{user?.displayName}</small></h6>
                            <h6>User Email: <small>{user?.email}</small></h6>
                        </Card.Text>
                        <span>Price:<small className='ms-2'>{price}$</small></span>
                    </Card.Body>
                </Card>
            </div >
        </div>
    );
};

export default Checkdetails;