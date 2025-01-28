'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import EmailIcon from './ui/EmailIcon';
import AcademiaIcon from './ui/AcademiaIcon';

export default function ProfileModal({name, designation, place, email, edu, session, experience, profile, scholar, linkedin, domainOfInterest, image}: {
  name: string,
  designation: string,
  place: string,
  email: string,
  edu: string[],
  session: string,
  experience: string[] | null,
  profile: string | null,
  scholar: string | null,
  linkedin: string | null,
  domainOfInterest: string | null,
  image: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <button className="my-4 font-title text-base md:text-lg text-primary font-semibold cursor-pointer" onClick={() => setOpen(true)}>
            View Profile
        </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="max-w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:max-w-4xl">
                <div className='h-16 bg-primary w-screen text-white font-title font-bold text-2xl p-5'>{name}</div>
                <div className="bg-white px-8 pb-4 pt-5 md:px-16">
                <div className="flex flex-row items-start my-8 space-x-8">
                    <div className='flex flex-col w-1/2 md:w-1/3'>
                        <Image
                        src={image}
                        alt={name}
                        width={288}
                        height={288}
                        className="rounded-t-lg w-64 h-64 object-cover" />
                        <h2 className='font-title font-semibold text-white bg-primary text-center text-base md:text-xl italic py-1'>Session {session}</h2>
                        <h2 className='font-title font-semibold text-base md:text-xl mt-4'>{designation}, {place}</h2>
                        { 
                        <div className='flex flex-row space-x-2 mt-4 cursor-pointer break-all' onClick={(e) => {window.location.href = `mailto:${email}`;e.preventDefault();}}>
                            <EmailIcon />
                            <span>{email}</span>
                        </div> 
                        }
                        <div className="flex flex-row space-x-5 pt-8">
                        {profile && (
                        <a href={profile} target="_blank" rel="noopener noreferrer">
                            <AcademiaIcon />
                        </a>
                        )}
                        {scholar && (
                        <a href={scholar} target="_blank" rel="noopener noreferrer">
                            <Image src="/google-scholar-icon.png" alt="scholar" width={32} height={32} className="rounded-sm object-cover cursor-pointer" />
                        </a>
                        )}
                        {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedIn.png" alt="linkedin" width={32} height={32} className="rounded-sm object-cover cursor-pointer" />
                        </a>
                        )}
                    </div>
                    </div>
                <div className="flex flex-col w-1/2 md:w-2/3 items-start justify-center font-body space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold font-title">Qualifications</h2>
                        <ul className="text-gray-700 font-body text-sm md:text-base lg:text-lg space-y-3">
                            {edu && edu.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    {experience!==null && 
                    <div className='space-y-4'>
                        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold font-title">Experience</h2>
                        <ul className="text-gray-700 font-body text-sm md:text-base lg:text-lg space-y-3">
                            {experience && experience.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>}
                    {domainOfInterest!==null && 
                    <div className='space-y-4'>
                        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold font-title">Domain of Interest</h2>
                        <p className="text-gray-700 font-body text-sm md:text-base lg:text-lg">{domainOfInterest}</p>
                    </div>}
                </div>
            </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
