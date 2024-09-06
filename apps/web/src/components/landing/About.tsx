import Balancer from "react-wrap-balancer";
import Image from "next/image";
import D1 from "../../../public/img/landing/d1.svg";
import D2 from "../../../public/img/landing/d2.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import rh_logo from "../../../public/img/logo/rhbttf.png";

export default function About() {
  return (
    <section
      className="relative z-10 min-h-screen w-full bg-[#1A3A9E] bg-[url('/img/landing/About_background.svg')] bg-no-repeat bg-cover px-5 py-20"
      id="About"
    >
      <div className="container mx-auto grid grid-cols-1 gap-y-16 gap-x-10 md:grid-cols-2">
        {/* ABOUT US Section */}
        <div className="flex flex-col justify-center gap-y-6 bg-white border-[#ea580c] border-4 rounded-xl p-5">
          <h1 className="font-oswald text-center text-5xl font-bold italic text-[#ea580c] md:text-center lg:text-6xl">
            ABOUT US
          </h1>
          <p className="text-center font-mono text-lg font-bold text-[#ea580c] md:text-center">
            <Balancer>
              RowdyHacks is a free, weekend-long, overnight hackathon hosted at
              UTSA! Students can join us to network, code, collaborate, and
              compete. We welcome hackers from all disciplines, backgrounds, &
              technical levels!
            </Balancer>
          </p>
        </div>

        {/* WHO CAN ATTEND Section */}
        <div className="flex flex-col justify-center gap-y-6 bg-white border-[#ea580c] border-4 rounded-xl p-5">
          <h1 className="font-oswald text-center text-5xl font-bold italic text-[#ea580c] md:text-center lg:text-6xl">
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
        <div className="flex flex-col justify-center gap-y-10 bg-white border-[#ea580c] border-4 rounded-xl p-5">
          <h1 className="font-oswald text-center text-5xl font-bold italic text-[#ea580c] lg:text-6xl">
            Celebrating 10 Years <br /> of RowdyHacks
          </h1>
          <p className="text-center font-mono text-lg font-bold text-[#ea580c]">
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula
              risus non dui blandit, non ornare felis interdum. Integer fermentum eros
              vitae leo fermentum, ac fermentum erat sollicitudin. Curabitur accumsan
              molestie turpis, nec elementum lectus dictum vel. Nunc quis orci vel arcu
              iaculis vehicula. Sed finibus sagittis ex, quis cursus sem ornare at.
              Maecenas eget eros tellus. Vestibulum id libero sit amet magna rhoncus
              fermentum nec et velit. Fusce varius nisl sit amet consequat fermentum.
            </Balancer>
          </p>
          <h2 className="text-center text-[#ea580c] font-mono font-bold">
            🧡 The RowdyHacks Team
          </h2>
        </div>

        {/* Placeholder for future image */}
        {/* <Image
          src={rh_logo}
          alt="RowdyHacks 10 Year Anniversary Logo"
          className="w-80 sm:w-96 md:w-[25rem] lg:w-[26rem] 2xl:w-[34rem] mx-auto"
        /> */}
      </div>
    </section>
  );
}
