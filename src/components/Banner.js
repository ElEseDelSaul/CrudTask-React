import React from 'react';
import img from '../assets/taskIcon.svg';

const Banner = () => {
    return (
        <div className="rounded shadow p-5 my-5 d-flex bg-light">
            <img src={img} alt="Task App Icon" width="200" />
            <div>
                <h1 className="text-primary">CRUD Tasks - React</h1>
                <h5 className="text-secondary">This application was created with Spring, React & MongoDB by Saul Medina.</h5>
            </div>
        </div>
    )
}

export default Banner;