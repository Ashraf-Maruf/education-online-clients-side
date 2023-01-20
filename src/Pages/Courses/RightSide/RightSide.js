import React from 'react';
import { Link } from 'react-router-dom';
const RightSide = ({ ac }) => {
    const { name, image } = ac;
    return (

        <div className='col'>
            <div className='d-flex'>
                <div className="card">
                    <img src={image} style={{ height: '250px' }} className='pt-3 ps-3 pe-3'></img>
                    <div className="card-body">
                        <small className="card-title text-center">{name}</small>
                    </div>
                    <Link className='btn btn-primary' to={`/courses/${ac._id}`}>Courses Details</Link>
                </div>
            </div>
        </div>
    );
};

export default RightSide;