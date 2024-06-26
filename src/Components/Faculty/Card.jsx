import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Card({ name, post, image, linkedin, github }) {
    return (
        <div className='bg-gray-100 px-8 mx-auto py-6 flex items-center justify-center flex-col rounded-lg w-fit shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.3)]'>
            <div className="h-40 w-40 overflow-hidden rounded-md mb-4" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h3 className='font-bold text-2xl block mb-4 text-center'>
                {name}
                {post && (
                    <span className='font-medium text-sm text-primary block text-center'>
                        {post}
                    </span>
                )}
            </h3>
            <div className='flex items-center justify-center gap-4'>
                {linkedin && (
                    <a href={linkedin} target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='text-2xl text-gray-500' />
                    </a>
                )}
                {github && (
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='text-2xl text-gray-500' />
                    </a>
                )}
            </div>
        </div>
    );
}
