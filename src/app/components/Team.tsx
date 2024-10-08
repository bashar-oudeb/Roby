import Image from "next/image";
import team from "../assets/landingPage/team/pexels-airamdphoto-20044372.jpg";

const Team = () => {
  return (
    <section className=" pt-16  ">
      <div className="bg-primary px-4 ">
        <div className=" ">
          <div className=" pt-6">
            <h1 className="font-roboto text-white font-bold text-4xl text-center uppercase">
              Our <span className=" font-normal text-3xl"> team</span> Skills
            </h1>
          </div>
        </div>
        <div className=" pt-14 md:w-2/4 md:mx-auto">
          <div className=" flex justify-between items-center">
            <h1 className=" font-roboto text-sm text-white">Graphic Design</h1>
            <span className=" font-roboto text-sm text-white">80%</span>
          </div>
          <hr className="mt-2 border border-secondary w-[80%]" />
        </div>

        <div className=" pt-5 md:w-2/4 md:mx-auto">
          <div className=" flex justify-between items-center">
            <h1 className=" font-roboto text-sm text-white">Lead Generation</h1>
            <span className=" font-roboto text-sm text-white">41%</span>
          </div>
          <hr className="mt-2 border border-secondary w-[41%]" />
        </div>

        <div className=" pt-5 md:w-2/4 md:mx-auto">
          <div className=" flex justify-between items-center">
            <h1 className=" font-roboto text-sm text-white">Photoshop</h1>
            <span className=" font-roboto text-sm text-white">70%</span>
          </div>
          <hr className="mt-2 border border-secondary w-[70%]" />
        </div>

        <div className=" pt-5 md:w-2/4 md:mx-auto">
          <div className=" flex justify-between items-center">
            <h1 className=" font-roboto text-sm text-white">Illustration</h1>
            <span className=" font-roboto text-sm text-white">100%</span>
          </div>
          <hr className="mt-2 border border-secondary " />
        </div>

        <p className="mt-4 pb-10 font-roboto text-sm text-gray-200 md:text-center">
          * Over 8 years creating templates on Marketplace.
        </p>
      </div>

      <div className=" ">
        <Image src={team} alt="" />
      </div>
    </section>
  );
};

export default Team;
