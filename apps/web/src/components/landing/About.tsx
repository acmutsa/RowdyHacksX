"use client";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import D1 from "../../../public/img/landing/d1.svg";
import D2 from "../../../public/img/landing/d2.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import rh_logo from "../../../public/img/logo/rhbttf.png";

export default function About() {
  // State to control accordion
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <section
      className="relative z-10 min-h-screen w-full bg-[#1A3A9E] bg-[url('/img/landing/About_background.svg')] bg-no-repeat bg-cover px-5 py-20"  
      id="About"
    >
      <div className="container mx-auto grid grid-cols-1 gap-y-16 gap-x-10 md:grid-cols-2">
        {/* ABOUT US Section */}
        <div className="flex flex-col justify-center gap-y-6 bg-white border-[#ea580c] border-4 rounded-xl p-8 transform transition-transform duration-300 hover:scale-105">
          <h1 className="font-oswald text-center text-3xl font-bold italic text-[#ea580c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            ABOUT US
          </h1>
          <p className="text-center font-mono text-lg font-bold text-[#ea580c] md:text-center">
            <Balancer>
              RowdyHacks is a free, weekend-long, overnight hackathon hosted at
              UTSA! Students can join us to network, code, collaborate, and
              compete. Whether it's your first hackathon or your seventh, 
              we offer something for everyone!
            </Balancer>
          </p>
        </div>

        {/* WHO CAN ATTEND Section */}
        <div className="flex flex-col justify-center gap-y-6 bg-white border-[#ea580c] border-4 rounded-xl p-8 transform transition-transform duration-300 hover:scale-105">
          <h1 className="font-oswald text-center text-3xl font-bold italic text-[#ea580c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WHO CAN ATTEND?
          </h1>
          <p className="text-center font-mono text-lg font-bold text-[#ea580c] md:text-center">
            <Balancer>
              We're excited to welcome hackers from all disciplines, backgrounds,
              & technical levels! Whether you're a seasoned coder or new to tech,
              RowdyHacks has something for everyone!
            </Balancer>
          </p>
        </div>
      </div>

      {/* Celebrating 10 Years Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-1">
        <div className="flex flex-col justify-center gap-y-10 bg-white border-[#ea580c] border-4 rounded-xl p-8 transform transition-transform duration-300 hover:scale-105">
          <h1 className="font-oswald text-center text-3xl font-bold italic text-[#ea580c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            CELEBRATING 10 YEARS 
            <br /> 
            OF ROWDYHACKS
          </h1>
          <p className="text-center font-mono text-lg font-bold text-[#ea580c]">
            <Balancer>
              This year marks a significant milestone for RowdyHacks, as we celebrate 10 years of fostering 
              creativity, collaboration, and mentorship right here at UTSA! 
            </Balancer>
          </p>
          {/* Accordion functionality only on mobile */}
          <div className="block md:hidden">
            <button
              onClick={toggleAccordion}
              className="text-center font-mono text-lg font-bold text-[#ea580c]"
            >
              {isOpen ? "Hide Details" : "Read More"}
            </button>
            {isOpen && (
              <p className="text-center font-mono text-lg font-bold text-[#ea580c]">
                <Balancer>
                  Since our inception, RowdyHacks 
                  has brought together students, developers, and tech enthusiasts from all walks of life to engage 
                  in healthy competition, collaborate on innovative projects, and learn new skills they might not 
                  encounter in a traditional classroom setting. Over the past decade, we've witnessed incredible growth. 
                  We take pride in our inclusive community-building and empowering the next generation of tech leaders. 
                  Together, we've created an ecosystem where innovation thrives, friendships are formed, and the future 
                  is built, one hack at a time. As we celebrate this remarkable journey, we look forward to what the 
                  next 10 years hold for RowdyHacks. Whether you've been with us from the start or are joining us for 
                  the first time, let's make this milestone year one to remember. Let's hack, create, and shape the future—together!
                </Balancer>
              </p>
            )}
          </div>

          {/* Full content displayed on desktop */}
          <div className="hidden md:block">
            <p className="text-center font-mono text-lg font-bold text-[#ea580c]">
              <Balancer>
                Since our inception, RowdyHacks 
                has brought together students, developers, and tech enthusiasts from all walks of life to engage 
                in healthy competition, collaborate on innovative projects, and learn new skills they might not 
                encounter in a traditional classroom setting. Over the past decade, we've witnessed incredible growth. 
                We take pride in our inclusive community-building and empowering the next generation of tech leaders. 
                Together, we've created an ecosystem where innovation thrives, friendships are formed, and the future 
                is built, one hack at a time. As we celebrate this remarkable journey, we look forward to what the 
                next 10 years hold for RowdyHacks. Whether you've been with us from the start or are joining us for 
                the first time, let's make this milestone year one to remember. Let's hack, create, and shape the future—together!
              </Balancer>
            </p>
          </div>

          <h2 className="text-center text-[#ea580c] font-mono font-bold">
            🧡 The RowdyHacks Team
          </h2>
        </div>
      </div>
    </section>
  );
}
