import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    <>
        <Carousel>
                <div>
                    <img src="./carousel/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./carousel/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./carousel/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="./carousel/4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="./carousel/5.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </>
  )
}

export default MyCarousel