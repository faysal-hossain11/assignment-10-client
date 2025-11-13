import React from 'react';
import NotFoundImage from '../assets/not-found.jpg';

const NotFoundPage = () => {
    return (
        <div className='h-screen'>
            <img src={NotFoundImage} alt="404 not found page image" className='h-full w-full' />
        </div>
    );
};

export default NotFoundPage;