"use client"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative bg-cover bg-center h-screen flex items-center mt-6 md:mt-0">
            <div className="flex flex-col items-center justify-center mx-auto text-center text-white absolute bg-black bg-opacity-30 h-full w-full z-10">
                <h1 className="text-4xl font-bold mb-2">Welcome to MAS School Hub </h1>
                <span className='font-semibold'>(Manage, Access & Streamlined)</span>
                <p className="text-lg my-6 w-2/3 md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem modi quisquam. Quidem quae autem natus repudiandae </p>
                <button className="bg-cyan-800 text-xl font-bold px-6 py-2 rounded-lg border-b-2 hover:bg-cyan-900">
                    Get Started
                </button>
            </div>

            <Image
            className='absolute inset-0 object-cover h-full'
    src="/images/banner-image.jpg"
    alt="Banner Image"
    width={1920}
    height={1080}
/>
        </section>
    );
};

export default Banner;

