import Image from "next/image";
import img from "../assets/landingPage/stats/IMAGE.svg";
import img2 from "../assets/landingPage/stats/IMAGE (1).svg";
import img3 from "../assets/landingPage/stats/IMAGE (2).svg";

const Stats = () => {
  return (
    <section className=" pt-16">
      <div className="">
        <h1 className=" font-roboto font-bold text-4xl lg:text-5xl  text-center uppercase">
          Fun <span className=" font-normal "> facts</span>
        </h1>
      </div>
      <div className=" pt-10 px-4 grid grid-cols-2 lg:grid-cols-4  items-center">
        <div className="">
          <div className=" flex items-center justify-center gap-1">
            <Image src={img} alt="" />
            <h3 className=" font-bold text-5xl">8</h3>
          </div>
          <h6 className=" font-roboto text-base text-secondary  text-center">
            Years on market
          </h6>
        </div>

        <div className="">
          <h3 className=" font-bold text-5xl  text-center">8</h3>

          <h6 className=" font-roboto text-base text-secondary  text-center">
            Years on market
          </h6>
        </div>

        <div className=" mt-5">
          <div className=" flex items-center justify-center gap-1">
            <Image src={img2} alt="" />
            <h3 className=" font-bold text-5xl">8</h3>
          </div>
          <h6 className=" font-roboto text-base text-secondary  text-center">
            Years on market
          </h6>
        </div>

        <div className=" mt-5">
          <div className=" flex items-center justify-center gap-1">
            <Image src={img3} alt="" />
            <h3 className=" font-bold text-5xl">8</h3>
          </div>
          <h6 className=" font-roboto text-base text-secondary text-center ">
            Years on market
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Stats;
