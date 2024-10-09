import Image from "next/image";
import logo from "../assets/logo.svg";
import img from "../assets/landingPage/hero/IMAGE.png";
import logo1 from "../assets/landingPage/hero/file.svg";
import logo2 from "../assets/landingPage/hero/file (1).svg";
import logo3 from "../assets/landingPage/hero/file (2).svg";
import logo4 from "../assets/landingPage/hero/file (3).svg";
import logo5 from "../assets/landingPage/hero/file (4).svg";
import Btn from "./Btn";

const Hero = () => {
  return (
    <section className=" pt-14 xl:pt-12 px-4 relative">
      <div className=" lg:absolute lg:left-1/2 lg:-ml-28">
        <Image src={logo} alt="" className=" w-60 mx-auto" />
      </div>
      <div className=" pt-10 xl:px-4 lg:flex lg:flex-row-reverse lg:items-center">
        <div className=" ">
          <h1 className="lg:mt-24  text-primary font-bold text-4xl xl:text-5xl uppercase  text-center ">
            “ We believe that <br  className=" md:hidden "/>
            <span className=" font-normal text-3xl"> the power of design</span>
            <br />
            helps businesses.”
          </h1>

          <div className=" hidden lg:block pt-10 pl-10 ">
            <Btn/>
          </div>
        </div>
        <div className=" pt-10 ">
          <Image src={img} alt="" />
        </div>
      </div>

      <div className=" pt-10">
        <h1 className=" font-roboto text-2xl font-semibold  text-primary text-center uppercase">
          We partner with <br className="md:hidden"/>
          <span className=" text-xl font-normal">
            forward-thinking
          </span> <br  className=" lg:hidden"/> startups.
        </h1>
      </div>

      <div className="pt-10 grid grid-cols-2 gap-y-5 gap-x-2 lg:gap-y-0 lg:gap-x-0 lg:grid-cols-3  xl:grid-cols-5 ">
        <div className="w-52 xl:w-40 md:mx-auto">
          <Image src={logo1} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className=" w-52 xl:w-40 md:mx-auto">
          <Image src={logo2} alt="" className="  w-full h-full object-cover" />
        </div>
        <div className=" w-52 xl:w-40 md:mx-auto">
          <Image src={logo3} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className=" w-52 xl:w-40 md:mx-auto">
          <Image src={logo4} alt="" className=" w-full h-full object-cover" />
        </div>
        <div className=" w-52 xl:w-40 md:col-span-2 lg:col-span-1   md:mx-auto">
          <Image src={logo5} alt="" className=" w-full h-full object-cover " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
