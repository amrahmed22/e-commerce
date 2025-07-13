import React from 'react';
import paypal from '../../images/paypal.svg'
import amazon from '../../images/amazonpay.svg'
import american from '../../images/american-express.svg'
import mastercard from '../../images/mastercard.svg'
import visa from '../../images/visa.svg'
import googlePlay from '../../images/googleplay-btn.svg'
import appStore from '../../images/appstore-btn.svg'

const Footer = () => {
    return <>

        <section className='overFlowProblem bg-main-light py-4 '>
            <div className="container">
                <h5 className=''>Get The FreshCart App</h5>
                <p className='my-3 font-sm'>We Will Send You A Link , Open It In Your Phone To Download The App . </p>


                <div className="row ">
                    <div className="col-12">
                        <div className='d-flex justify-content-around align-items-center mx-auto'>
                            <input type="text" className='form-control mx-1 w-75 d-inline ' placeholder='Email ...' />
                            <button className='btn bg-main text-white mx-1 w-25 d-inline'>Share</button>

                        </div>
                    </div>


                </div>
                {/* <hr /> */}
                <div className="row my-3 align-items-center">
                    <div className="col-md-6">
                        <div className=' d-flex align-items-center justify-content-center'>
                            <p className='mt-3 fw-bold mx-3'>Payment </p>
                            <img src={visa} className='w-image mx-2' alt="" />
                            <img src={mastercard} className='w-image mx-2' alt="" />
                            <img src={paypal} className='w-image mx-2' alt="" />
                            <img src={amazon} className='w-image mx-2' alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className=' text-center d-flex align-items-center justify-content-center'>
                            <h6 className='mt-2 fw-bold mx-3'>Download </h6>

                            <img src={googlePlay} className='w-25 mx-2' alt="" />
                            <img src={appStore} className='w-25 mx-2' alt="" />

                        </div>
                    </div>

                </div>
            </div>
        </section>

    </>
}

export default Footer;
