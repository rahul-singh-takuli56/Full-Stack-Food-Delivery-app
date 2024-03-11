import React from 'react';
import Image from 'next/image';
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className='hero w-full'>
            <div className='py-12'>
                <h1 className='text-4xl font-bold '>Everything <br />is better with <br /> <span className='text-8xl text-orange-600 '>Pizza</span></h1>
                <p className='my-4 text-gray-500'>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>

                <div className='flex gap-4 '>
                    <button className='bg-primary text-white px-4 py-2 rounded-full flex gap-2 '>
                        Order Now
                        <FaArrowCircleRight className='h-6 w-6' />
                    </button>
                    <button className='flex gap-2 py-2 text-gray-700 font-semibold uppercase'>
                        Learn Now
                        <FaArrowCircleRight className='h-6 w-6' />
                    </button>
                </div>
            </div>

            <div className='relative'>
                <Image src={'/pizza.png'} width={380} height={10} alt={'pizza image'} />
            </div>
        </section>
    );
}

export default Hero;
