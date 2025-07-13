import React from 'react';
import { Hourglass } from 'react-loader-spinner';


const IsLoading = () => {
    return <>
        <div className='overFlowProblem position-fixed top-0 bottom-0 end-0 start-0 isLoading bg-main-light d-flex justify-content-center align-items-center'>
            <Hourglass
                visible={true}
                height="100"
                width="100"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['green', '#000']}
            />
        </div>
    </>
}

export default IsLoading;
