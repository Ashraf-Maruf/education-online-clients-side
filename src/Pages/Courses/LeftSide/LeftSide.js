import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [allCourses, setAllCourses] = useState([])

    useEffect(()=>{
        fetch(' https://education-online-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])


    return (
        <div className='mt-5 position-relative'>
            <h4 className='text-end pt-3 text-white'>This is Courses</h4>
            <div>
                {
                    allCourses.map(ac => <p className='text-end' key={ac._id}
                    >
                        <Link className='text-white' to={`/courses/${ac._id}`}>{ac.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;