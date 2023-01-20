import React, { useContext } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {


    const { createUser, UserProfile } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!/(?=.*[A-Z]).*[A-Z]/.test(password)){
            setError(toast.success('Please provide at least two Uppercase')) 
            return;
        }  
        if(password.length < 6){
            setError(toast.success('Please should be at least 6 character')) 
            return;
        } 
        if(!/(?=.*[!@#$&*])/.test(password)){
            setError(toast.success('Please add at least one special character'))            
            return;
        } 

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUserUpdate(name, photoURL)
                navigate(from, { replace: true })
                toast.success('Register is success')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleUserUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        UserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleCheck = (e) => {
        setAccepted(e.target.checked)
    }


    return (
        <Container>
            <Row>
                <Col lg={{ span: '6', offset: '3' }}>
                    <div style={{margin:'100px auto'}}>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control name="photoURL" type="text" placeholder="Phot URL" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    onClick={handleCheck}
                                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" disabled={!accepted}>
                                Register
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;