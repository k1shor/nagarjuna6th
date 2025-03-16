import React from 'react'
import MyCarousel from '../components/MyCarousel'

const Home = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="w-1/2 bg-red-100 p-[40vh]">
                    <h1>
                        Kitchen Favorites
                    </h1>
                </div>
                <div className="w-1/2">
                    <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" className='h-full ' />
                </div>

            </div>
            <MyCarousel />
        </>
    )
}

export default Home