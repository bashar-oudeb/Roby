import Image from "next/image";
import logo from "../assets/logo.svg";
import img from "../assets/landingPage/hero/IMAGE.png";
import logo1 from "../assets/landingPage/hero/file.svg";
import logo2 from "../assets/landingPage/hero/file (1).svg";
import logo3 from "../assets/landingPage/hero/file (2).svg";
import logo4 from "../assets/landingPage/hero/file (3).svg";
import logo5 from "../assets/landingPage/hero/file (4).svg";

const Hero = () => {
  return (
    <section className=" pt-14 px-4">
      <div className="">
        <Image src={logo} alt="" className=" w-60 mx-auto" />
      </div>
      <div className=" pt-10">
        <div className="">
          <h1 className=" text-primary font-bold text-4xl uppercase  text-center ">
            “ We believe that <br  className=" md:hidden"/>
            <span className=" font-normal text-3xl"> the power of design</span>
            <br />
            helps businesses.”
          </h1>
        </div>
        <div className=" pt-10">
          <Image src={img} alt="" />
        </div>
      </div>

      <div className=" pt-10">
        <h1 className=" font-roboto text-2xl font-semibold  text-primary text-center uppercase">
          We partner with <br className="md:hidden"/>
          <span className=" text-xl font-normal">
            forward-thinking
          </span> <br /> startups.
        </h1>
      </div>

      <div className="pt-10 grid grid-cols-2  ">
        <div className="w-52 md:mx-auto">
          <Image src={logo1} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className=" w-52 md:mx-auto">
          <Image src={logo2} alt="" className="  w-full h-full object-cover" />
        </div>
        <div className=" w-52 md:mx-auto">
          <Image src={logo3} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className=" w-52 md:mx-auto">
          <Image src={logo4} alt="" className=" w-full h-full object-cover" />
        </div>
        <div className=" w-52 md:col-span-2  md:mx-auto">
          <Image src={logo5} alt="" className=" w-full h-full object-cover " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
