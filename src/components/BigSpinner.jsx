import React from 'react';
import './bigSpinnerStyle.css'

const BigSpinner = () => {
    return (
        <div className='h-screen flex  items-center  justify-center'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default BigSpinner;