import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';


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

    const [data, setData] = useState([]);

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
            {/* {data.map((cardData) => (
                <Cards cardData={cardData}/>
            ))} */}
            <Slider {...settings}>
                <Cards
                    img='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    title='Card Title 1'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
                <Cards
                    img='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    title='Card Title 2'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
                <Cards
                    img='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    title='Card Title 3'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
                <Cards
                    img='https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    title='Card Title 4'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
                <Cards
                    img='https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    title='Card Title 5'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
                <Cards
                    img='https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80'
                    title='Card Title 6'
                    description='Some quick example text to build on the card title and make up the bulk of the card'
                />
            </Slider>
        </div>
    )
}

export default HomePage;
