import Image from "next/image";
import Conference from "../assets/landingPage/selected/IMAGE.png";
import Magazine from "../assets/landingPage/selected/pexels-ekrulila-2385565.jpg";
import Ivor from "../assets/landingPage/selected/IMAGE (1).png";
import Apple from "../assets/landingPage/selected/IMAGE (2).png";
import Flying from "../assets/landingPage/selected/IMAGE (3).png";
import Dharma from "../assets/landingPage/selected/IMAGE (4).png";






const Selected = () => {
  return (
    <section className="pt-16 lg:pt-24 px-4 ">
      <div className="  ">
        <h1 className=" font-roboto font-bold text-4xl xl:text-5xl text-center uppercase">
          selected <span className=" font-normal text-3xl xl:text-4xl">work</span>
        </h1>
      </div>

      <div className=" pt-6 lg:pt-16 lg:grid lg:grid-cols-2 xl:gap-x-12">
        <div className="xl:w-fit xl:ml-auto">
          <div className=" h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Conference} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Conference</h1>
          <p className=" text-secondary font-roboto  text-center">Art Direction, Design</p>
        </div>

        <div className=" pt-5 lg:mt-10 xl:w-fit xl:mr-auto">
          <div className="h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Magazine} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Magazine</h1>
          <p className=" text-secondary font-roboto  text-center">Logo, User Interface</p>
        </div>

        <div className=" pt-5 lg:-mt-4 xl:w-fit xl:ml-auto">
          <div className=" h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Ivor} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Ivor Application</h1>
          <p className=" text-secondary font-roboto  text-center">User Interface</p>
        </div>

        <div className=" pt-5 lg:mt-10 xl:w-fit xl:mr-auto">
          <div className=" h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Apple} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Black Apple Watch</h1>
          <p className=" text-secondary font-roboto  text-center">Logo, User Interface</p>
        </div>

        <div className=" pt-5 lg:-mt-4 xl:w-fit xl:ml-auto">
          <div className=" h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Flying} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Flying to the moon</h1>
          <p className=" text-secondary font-roboto  text-center">User Experiences</p>
        </div>

        <div className=" pt-5 lg:mt-10 xl:w-fit xl:mr-auto">
          <div className=" h-[450px] lg:h-[500px] md:w-[400px] md:mx-auto">
            <Image src={Dharma} alt="" className=" w-full h-full object-cover"/>
          </div>
          <h1 className="mt-2 font-roboto text-lg font-bold text-center">Dharma Webfont</h1>
          <p className=" text-secondary font-roboto  text-center">Branding, Web Design</p>
        </div>
      </div>
    </section>
  );
};

export default Selected;
