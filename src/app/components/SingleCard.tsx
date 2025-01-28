'use client';
import Image from 'next/image';
import ProfileModal from './ProfileModal';
import AcademiaIcon from './ui/AcademiaIcon';

export default function SingleCard({name, designation, place, email, edu, session, experience, profile, scholar, linkedin, domainOfInterest, image}: {name: string, designation: string, place: string, email: string, session: string, edu: string[], experience: string[], profile: string, scholar: string, linkedin: string, domainOfInterest: string, image: string}) {

    return (
        <div className="max-w-80 h-120 rounded overflow-hidden shadow-md hover:ring-2 hover:ring-primary">
            <div className='w-full h-52 md:h-56 lg:h-60 relative'>
            <Image
                className="absolute inset-0 object-cover w-full h-full"
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
            />
            </div>
            <div className="px-3 md:px-6 py-4 h-44">
                <h2 className="font-bold font-title text-base md:text-xl mb-2 text-primary">{name}</h2>
                <p className='font-body text-sm md:text-base lg:text-md xl:text-lg break-words'>{designation}, {place}</p>
            </div>
            <div className="px-3 md:px-6 pt-4 pb-2 h-32">
                <ProfileModal name={name} designation={designation} place={place} email={email} edu={edu} session={session} experience={experience} profile={profile} scholar={scholar} linkedin={linkedin} domainOfInterest={domainOfInterest} image={image}/>
                <div className="flex flex-row space-x-2 md:space-x-5 mb-4">
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
        </div>
    )
}