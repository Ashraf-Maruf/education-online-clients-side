import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import './Login.css';
const Login = () => {

    const { providerLogin,githubProviderLogin, signIn, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSingIn = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(toast.error('Your password wrong'))
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        < div className='login-area'>
            <Container>
                <Row>
                    <Col lg={{ span: '6', offset: '3' }}>
                        <div style={{margin:'155px auto'}}>
                            <Form onSubmit={handleSignIn}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" required />
                                </Form.Group>                                
                                <Form.Label><Link to='/register'>Create a New Account? Please </Link></Form.Label><br></br>
                                <Button variant="primary" className='px-5 py-2' type="submit">
                                    Login
                                </Button>
                                <div className='mt-4'>
                                    <Button variant="outline-primary" className='me-3 px-5 py-2' onClick={handleGoogleSingIn}>
                                        <span className='me-2'><FaGoogle /></span>
                                    </Button>
                                    <Button variant="outline-primary" onClick={handleGithubSingIn} className='px-5 py-2' type="submit">
                                        <span className='me-2'><FaGithub /></span>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Login;