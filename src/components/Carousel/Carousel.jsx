import React from 'react'
import Slider from "react-slick";
import img1 from "../../assets/images/slider-2.jpeg"
import img2 from "../../assets/images/grocery-banner-2.jpeg"
import img3 from "../../assets/images/grocery-banner.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container ">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt='' className='w-100' />
                </div>
                <div>
                    <img src={img2} alt='' className='w-100' />
                </div>
                <div>
                    <img src={img3} alt='' className='w-100' />
                </div>
            </Slider>
        </div>
    );
}
