"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const MainCourse = () => {
    const cards = [
        {
            id: 1,
            imageSrc: '/images/image1.jpg',
            heading: 'Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nobis?',
            sellingNumber: 123,
        },
        {
            id: 2,
            imageSrc: '/images/image2.png',
            heading: 'Electrical',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nobis?',
            sellingNumber: 456,
        },
        {
            id: 3,
            imageSrc: '/images/image3.png',
            heading: 'Computer Engeneering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nobis?',
            sellingNumber: 789,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Main Courses</h2>
            <p className="text-gray-700 mb-6 w-2/3 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nunc nec purus dignissim, nec fermentum neque accumsan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-16 md:mx-20 ">
            {cards.map((card) => (
                <div key={card.id} className="border rounded-lg overflow-hidden shadow-md flex flex-col group">
                    <div className="overflow-hidden ">
                        <Image
                        className='group-hover:-translate-y-2'
                            src={card.imageSrc}
                            alt={`Image for ${card.heading}`}
                            width={800}
                            height={400}
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold mb-2">{card.heading}</h2>
                        <p className="text-gray-600 mb-2">{card.description}</p>
                        <p className="text-gray-600">Selling: {card.sellingNumber}</p>
                        <div className="flex justify-end mt-2">
                            <FaHeart size={20} className="text-red-500" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default MainCourse;

