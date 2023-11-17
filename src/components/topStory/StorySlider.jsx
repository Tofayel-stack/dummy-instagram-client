import React from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StorySlider = () => {


    const settings = {
       
        infinite: true,
     
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };


    return (
        
            <div className='container w-80 lg:w-[24rem] m-auto h-24'>
               
                <Slider  {...settings}>
              

                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/19045609/pexels-photo-19045609/free-photo-of-young-couple-sitting-back-to-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/19036675/pexels-photo-19036675/free-photo-of-interior-of-rijksmueum-research-library.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/7791111/pexels-photo-7791111.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/19045609/pexels-photo-19045609/free-photo-of-young-couple-sitting-back-to-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/13092805/pexels-photo-13092805.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/6963585/pexels-photo-6963585.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/6598664/pexels-photo-6598664.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/19045609/pexels-photo-19045609/free-photo-of-young-couple-sitting-back-to-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/7147544/pexels-photo-7147544.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/6974003/pexels-photo-6974003.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://images.pexels.com/photos/3497525/pexels-photo-3497525.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
             

                </Slider>
            </div>
       
    );
};

export default StorySlider;