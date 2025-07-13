import React from 'react';
import image from '../../images/error.svg'

const NotFound = () => {
    return <>
    
    <section>
        <div className="overFlowProblem container  d-flex align-items-center justify-content-center">
            <img src={image} className='w-75' alt="" />
        </div>
    </section>
    
    </>
}

export default NotFound;
