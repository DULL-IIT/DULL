"use client";
import Image from "next/image";

export default function HeadDULL() {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-8 md:mx-24 lg:mx-36">
      <h1 className="text-center text-2xl md:text-4xl">
        Head of DULL Research Group
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center my-12">
        <Image
          src="/logos/sumonsir.jpg"
          alt="head-dull"
          width={288}
          height={288}
          className="rounded-lg w-72 h-72 object-cover"
        />
        <div className="flex flex-col text-center md:text-left md:items-start justify-center mx-auto md:ml-8 font-body space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 md:mt-0 text-primary font-semibold">
            Dr. Sumon Ahmed
          </h2>
          <p className="text-gray-700 font-body text-lg md:text-xl">
            Associate Professor, Institute of Information Technology, University
            of Dhaka
          </p>
          <p
            className="text-gray-700 font-body text-lg md:text-xl italic cursor-pointer"
            onClick={(e) => {
              window.location.href = "mailto:sumon@iit.du.ac.bd";
              e.preventDefault();
            }}
          >
            sumon@iit.du.ac.bd
          </p>
          <p className="text-gray-700 font-body text-lg md:text-xl">
            BSc(DU), MSc(DU), PhD(The University of Manchester, UK)
          </p>
          <div className="flex flex-row space-x-5 pt-8 justify-center md:justify-left">
            <a
              href="http://www.iit.du.ac.bd/about_iit/individual_teacher/55"
              target="_blank"
            >
              <Image
                src="/iitlogo.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-lg w-10 h-10 object-cover"
              />
            </a>
            <a
              href="https://scholar.google.com/citations?user=YxuS0wUAAAAJ&hl=en&oi=ao"
              target="_blank"
            >
              <Image
                src="/google-scholar-icon.png"
                alt="profile"
                width={40}
                height={40}
                className="rounded-lg w-10 h-10 object-cover"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-body leading-5 md:leading-7 text-sm md:text-base lg:text-lg text-justify text-gray-700">
          Dr. Sumon Ahmed is an Associate Professor at the Institute of
          Information Technology (IIT) at the University of Dhaka, Bangladesh.{" "}
          <br />
          He earned his Ph.D. in Bioinformatics from The University of
          Manchester, United Kingdom, in 2019. <br />
          His research interests include bioinformatics, machine learning,
          Bayesian inference, and software development.
        </p>
      </div>
    </div>
  );
}
