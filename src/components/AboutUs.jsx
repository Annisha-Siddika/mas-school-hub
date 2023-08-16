"use client"
import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AboutUs = () => {
    return (
        <section className="md:mt-16 py-8 md:py-16 px-16">
            <div className="container mx-auto px-4">
            <div className='text-center w-full'>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-700 mb-6 w-2/3 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nunc nec purus dignissim, nec fermentum neque accumsan.
                        </p>
            </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 md:mr-8 relative group">
    <Image
        className="rounded-lg w-full"
        src="/images/about-image.jpg"
        alt="About Us Image"
        width={500}
        height={400}
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
</div>

                    <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0">
                        
                    <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is the purpose of our School Management Portal?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Our School Management Portal is designed to streamline administrative tasks and enhance communication within our school community. It provides a centralized platform for managing student records, attendance, assignments, grades, and more.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does the Portal benefit parents and guardians?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The School Management Portal empowers parents and guardians with real-time access to their child&#39;s academic progress, attendance history, and upcoming events. It enables parents to stay informed and actively engaged in their child&#39;s education.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What features are available to teachers and staff?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Teachers and staff can leverage the School Management Portal to efficiently manage classroom activities, record student assessments, and communicate with parents. They can also generate reports, schedule parent-teacher conferences, and collaborate with colleagues.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
