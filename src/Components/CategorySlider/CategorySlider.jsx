import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySlider = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const settings_mobile = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
    };

    function getCategory() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    let { data } = useQuery('categorySlider', getCategory)
    // console.log(data);
    return <>
        <div className=" container category-slider-for-pc py-2 mb-4">
            <h4 className='h5 mb-3 fw-bold'>Shop Popular Categories</h4>
            {data?.data.data ? <Slider {...settings}>
                {data?.data.data.map((x) =><div key={x._id}>
                    <img height={200} className='w-100 categorySlider rounded-5 px-1' src={x.image} />
                    <p className='text-center mt-1'>{x.name}</p>
                    </div> )}
                
            </Slider> : " "}
        </div>



        <div className="  container category-slider-for-mobile">
            <h4 className='h5 my-4 fw-bold'>Shop Popular Categories</h4>
            {data?.data.data ? <Slider {...settings_mobile}>
                {data?.data.data.map((x) =><div key={x._id}>
                    <img height={200} className='w-100 categorySlider rounded-5 px-1' src={x.image} />
                    {/* <p className='text-center mt-1'>{x.name}</p> */}
                    </div> )}
                
            </Slider> : " "}
        </div>

    </>
}

export default CategorySlider;
