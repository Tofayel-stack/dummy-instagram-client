import React from 'react';
import image from '../assets/errorPage.png'

const ErrorPage = () => {
    return (
        <div className='h-screen w-full'>
            <img className='h-screen w-full m-auto' src={image} alt="error pic" />
        </div>
    );
};

export default ErrorPage;