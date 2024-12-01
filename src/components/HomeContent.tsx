import React from "react";
import Link from 'next/link'

const HomeContent = () => {
    return (
        <div>
            <section className="hero bg-cover bg-center h-screen flex justify-start items-center text-white pl-16 sm:pl-8 md:pl-16" style={{backgroundImage:"url(background.jpg)"}}>
                <div className="text-center sm:text-left sm:ml-8 md:ml-16">
                    <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">Welcome to Shoes World</h1>
                    <p className="text-2xl sm:text-xl md:text-3xl mt-4">Step into style and comfort with our vast collection of shoes</p>
                    <Link href='/shop'>
                        <button className="mt-6 py-3 px-8 bg-green-500 text-white font-bold rounded-md hover:bg-green-700 transition-all duration-300 ease-in-out">Shop Now</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomeContent;
