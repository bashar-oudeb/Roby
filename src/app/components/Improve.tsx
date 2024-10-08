import Image from "next/image";
import img from "../assets/landingPage/improve/IMAGE.png";

const Improve = () => {
  return (
    <section className=" pt-16 px-4">
      <div className="">
        <h1 className=" text-primary font-bold text-4xl uppercase  text-center ">
          Improve
          <span className=" font-normal "> your brand</span> with an awesome
          site.
        </h1>


        <div className=" pt-10">
          <div className=" flex items-center gap-3 md:justify-center">
            <h1 className=" font-roboto font-bold text-xl text-primary">Comprehensive</h1>
            <span className=" font-roboto text-sm  self-center">Brand</span>
          </div>
          <p className="mt-1 md:mt-2 font-roboto text-sm text-secondary leading-5 md:mx-auto md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
        <div className=" pt-6">
          <div className=" flex items-center gap-3 md:justify-center">
            <h1 className=" font-roboto font-bold text-2xl text-primary">web</h1>
            <span className=" font-roboto text-sm  self-center ">Presence</span>
          </div>
          <p className="mt-1 md:mt-2 font-roboto text-sm text-secondary leading-5 md:mx-auto md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
      </div>

      <div className=" pt-10">
        <Image src={img} alt=" "/>
      </div>
    </section>
  );
};

export default Improve;
