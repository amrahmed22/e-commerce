import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../../images/slider-image-1.jpeg'
// import image2 from '../../images/slider-image-2.jpeg'
// import image3 from '../../images/slider-image-3.jpeg'
// import image4 from '../../images/grocery-banner-2.jpeg'
// import image5 from '../../images/slider-2.jpeg'
import imageNew1 from '../../images/new1.jpg'
import imageNew2 from '../../images/new2.jpg'

const MainSlider = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false
    };

    const settings_mobile = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false
    };


    return <>
        <div className=" container p-2 mainSlider-for-pc">
            <div className="row gx-0">
                <div className="col-12">
                  

                        <Slider {...settings}>
                       <div  className='position-relative d-flex justify-content-start align-items-center'>
                       <img src={imageNew1} className='w-100 rounded-5' alt="" />
                       <div className='position-absolute start-0 p-5'>
                         <div className='bg-warning fw-bold btn p-2 rounded-5'>Opening Sale Discount 50%</div>
                         <h1 className='mt-3 fw-bold'>SuperMarket For Fresh <br /> Grocery</h1>
                         <p className='text-muted my-3 '>Introduced a new model for online grocery shopping and <br />convenient home delivery.</p>
                         <button className='btn bg-main text-white  px-4'>Shop Now <i className='fa fa-arrow-right'></i></button>
                       </div>
                       </div>

                       <div  className='position-relative d-flex justify-content-start align-items-center'>
                       <img src={imageNew2} className='w-100 rounded-5' alt="" />
                       <div className='position-absolute start-0 p-5'>
                         <div className='bg-warning fw-bold btn p-2 rounded-5'>Free Shipping - Orders Over 100 &#36;</div>
                         <h1 className='mt-3 fw-bold'>Free Shipping On <br /> Orders Over <span className='text-main'>&#36;100</span></h1>
                         <p className='text-muted my-3 '>Free Shipping To First-Time Customers Only , After Promotions <br /> And Discounts Are Applies.</p>
                         <button className='btn bg-main text-white  px-4'>Shop Now <i className='fa fa-arrow-right'></i></button>
                       </div>
                       </div>
                        
                        </Slider>
                   
                </div>
            
            </div>
        </div>

        <div className=" container py-4 mainSlider-for-mobile">
            <div className="row gx-0">
                <div className="col-12">
                        <Slider {...settings_mobile}>
                       <div  className='position-relative d-flex justify-content-start align-items-center'>
                       <img height={250} src={imageNew1} className='w-100 rounded-5' alt="" />
                       <div className='position-absolute start-0 p-3'>
                         <div className='bg-warning font-sm fw-bold btn px-2 btn-sm rounded-5'>Opening Sale Discount 50%</div>
                         <h1 className='mt-3 h5 fw-bold'>SuperMarket For <br /> Fresh Grocery</h1>
                         {/* <p className='text-muted my-3 '>Introduced a new model for online grocery shopping and <br />convenient home delivery.</p> */}
                         <button className='btn bg-main text-white btn-sm my-3  px-4'>Shop Now <i className='fa fa-arrow-right'></i></button>
                       </div>
                       </div>

                       <div  className='position-relative d-flex justify-content-start align-items-center'>
                       <img height={250} src={imageNew2} className='w-100 rounded-5' alt="" />
                       <div className='position-absolute start-0 p-3'>
                         <div className='bg-warning fw-bold btn px-2 btn-sm rounded-5'>Free Shipping - Orders Over 100 &#36;</div>
                         <h1 className='mt-3 h5 fw-bold'>Free Shipping On <br /> Orders Over <span className='text-main'>&#36;100</span></h1>
                         {/* <p className='text-muted my-3 '>Free Shipping To First-Time Customers Only , After Promotions <br /> And Discounts Are Applies.</p> */}
                         <button className='btn bg-main text-white btn-sm my-3  px-4'>Shop Now <i className='fa fa-arrow-right'></i></button>
                       </div>
                       </div>
                        
                        </Slider>
                </div>
            
            </div>
        </div>
    </>
}

export default MainSlider;
