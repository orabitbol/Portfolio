
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './projects.css'




const photos = [
    {
        name: 'photo 1',
        url: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"
    },
    {
        name: 'photo 2',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrYlIWwOLzE23lmFJXqycT_bKtxSFlGpO1R8WCyQhuL_4N_c25jYNJXHT5VD5yDWD4Jc&usqp=CAU"
    },
    {
        name: 'photo 3',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMd_VAwlsc8q3NsIHTDRpuaLPFbLx0fGUN3NeaYUhgtd-74INsyx3WdLmfB4L-q9kQwo&usqp=CAU'
    },
    {
        name: 'photo 4',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTV3AAdUEMpp_Bfn8FuUd1kVY9Onh9aUxGXE9gQ44XS5y9ez_y1JLbnNBZuGOhJvoysE&usqp=CAU'
    },

]

class Projects extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            className: 'slides'
        };
        return (
            <div className='projects' >
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className='photo'>
                                <img wdith='100%' src={photo.url}/>
                            </div>
                        )
                    })}


                </Slider>
            </div>
        );
    }
}
export default Projects