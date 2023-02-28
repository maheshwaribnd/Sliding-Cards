import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import { cardArray } from './detailsArray';


function HomePage() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1005,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    variableWidth: true,
                }
            }
        ]
    };

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('https://api.coingecko.com/api/v3/coins')
    //         .then((response) => {
    //             console.log(response);
    //             return response.data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    return (
        <div style={{ width: '74%', height: '100%' }} className=' mx-auto mt-6 px-2 sm:w-10/12'>
            <Slider {...settings}>
                {cardArray.map((item) => (<Cards img={item.img} title={item.title} description={item.description} />))}
            </Slider>
        </div>
    )
}

export default HomePage;
