import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaBookOpen, FaUser } from "react-icons/fa";
import LeftSide from '../../Courses/LeftSide/LeftSide';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import Switch from '@mui/material/Switch';
import './Header.css'
const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar bg="dark" expand="lg" className='pt-3 pb-3'>
            <Container>
                <NavLink className='navbar-brand text-white' to='/'><span className='me-3'><FaBookOpen /></span>Online Education Platform</NavLink >
                <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <p className='text-light mt-3 mb-0 me-2'>Dark/Light</p><Switch className='mt-2'
                            defaultChecked
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <NavLink to='/' className={({ isActive }) => !isActive ? 'active' : undefined}>Home</NavLink >
                        <NavLink to='/courses'>Courses</NavLink >
                        <NavLink to='/faq'>FAQ</NavLink >
                        <NavLink to='/blog'>Blog</NavLink>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span className='nav-link text-white text-uppercase'>{user?.displayName}</span> */}
                                        <p data-tip={user?.displayName}></p>
                                        <ReactTooltip />
                                        <NavLink variant="light" onClick={handleLogOut}>Sign out</NavLink >
                                    </>
                                    :
                                    <>
                                        <NavLink to='/login'>Login</NavLink >
                                    </>
                            }
                        </>
                        <p className='pt-2 mb-0 ps-2' data-tip={user?.displayName}>
                            {user?.photoURL ?

                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </p>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSide></LeftSide>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;