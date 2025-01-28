import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-primary justify-center">
        <div className='flex flex-col md:flex-row py-8 px-12 md:space-x-20 text-left md:justify-center items-top text-white'>
            <div className='mb-5'>
                <h1 className='font-bold text-white text-lg md:text-2xl mb-5'>Contact Us</h1>
                <p className='text-lg cursor-pointer' onClick={(e) => {window.location.href = "mailto:sumon@iit.du.ac.bd";e.preventDefault();}}><i>sumon@iit.du.ac.bd</i></p>
            </div>
            <div className='mb-5'>
                <h1 className='font-bold text-white text-lg md:text-2xl mb-5'>Our Location</h1>
                <p className='text-lg'>Institute of Information Technology, University of Dhaka</p>
            </div>
        </div>
        <div className="border-b border-opacity-2"/>
    </div>
  );
};
