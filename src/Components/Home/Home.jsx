import React, { useEffect } from 'react';
import CategorySlider from './../CategorySlider/CategorySlider';
import MainSlider from './../MainSlider/MainSlider';
import ScrollTop from './../ScrollTop/ScrollTop';
import imageNew1 from '../../images/slider-2.jpeg'
import imageNew2 from '../../images/grocery-banner-2.jpeg'
import {Helmet} from "react-helmet";
import Products from './../Products/Products';



const Home = () => {
    
        useEffect(() => {
            console.log('localStorage', localStorage.getItem('userToken'));
        }, []);

    return <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>FreshCart</title>
            </Helmet>
        <section className='pt-4 mt-5 overFlowProblem'>
            
            <MainSlider />
            <CategorySlider />
            <div className='container'>
                <div className="row mt-5 mb-3 gy-4">
                    <div className="col-md-6">
                    <div  className='position-relative d-flex justify-content-start align-items-center cursor-pointer'>
                       <img src={imageNew1} className='w-100  rounded-4' alt="" />
                       <div className='position-absolute start-0 p-3'>
                         <h5 className='mt-3 fw-bold h5'>Fruits & Vegetables</h5>
                         <p className='my-3 fw-bold text-muted'>Get Upto 30% Off</p>
                         <button className='btn btn-dark text-white mb-4  px-4'> Shop Now </button>
                       </div>
                       </div>
                    </div>
                    <div className="col-md-6">
                    <div  className='position-relative d-flex justify-content-start align-items-center cursor-pointer'>
                       <img src={imageNew2} className='w-100 rounded-4' alt="" />
                       <div className='position-absolute start-0 p-3'>
                         <h5 className='mt-3 fw-bold h5'>Freshly Baked Buns</h5>
                         <p className='my-3 fw-bold text-muted'>Get Upto 25% Off</p>
                         <button className='btn btn-dark text-white mb-4  px-4'> Shop Now </button>
                       </div>
                       </div>
                    </div>
                </div>

            </div>
            <Products/>
            <ScrollTop />

        </section>
    </>
}

export default Home;
