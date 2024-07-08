import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';

export default function Categories() {
  const [category, setCategory] = useState([]);

  async function getCategories() {
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    setCategory(data.data);  // Assuming the API returns data in data.data
  }

  useEffect(() => {
    getCategories();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
    <div className='my-5'>
      <div className="container">
        <h4>Shop Popular Categories</h4>
        <Slider {...settings}>
          {category.map(item => (
            <div key={item._id} className="slider-item">
              <img src={item.image} className='w-100' alt={item.name} height="150px" />
              <h6 className='my-2'>{item.name}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
