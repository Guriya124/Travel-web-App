import React from 'react';
import ImageSlider from './ui/ImageSlider';

function HeroSection({ title, subtitle, buttonText }) {
    return (
        <>
            <div className='relative'>
                <ImageSlider />
                <div className='absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl'>{title}</h1>
                    <p className='text-sm sm:text-base md:text-xl'>{subtitle}</p>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='bg-primary/20 rounded-2xl p-4 shadow-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="location" className='text-white mb-2'>Where do you want to go</label>
                            <input type="text" id="location" placeholder='Search your location' className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="check-in" className='text-white mb-2'>Check in</label>
                            <input type="date" id="check-in" className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="check-out" className='text-white mb-2'>Check out</label>
                            <input type="date" id="check-out" className='w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary' />
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-700 text-white px-6 py-2 rounded-full">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
