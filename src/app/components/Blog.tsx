import Image from "next/image";
import img from "../assets/landingPage/blog/IMAGE (1).png";
import img2 from "../assets/landingPage/blog/IMAGE (2).png";
import img3 from "../assets/landingPage/blog/IMAGE (3).png";

const Blog = () => {
  return (
    <section className=" px-4 pt-16">
      <div className="">
        <div className="">
          <h1 className=" font-roboto font-bold text-4xl lg:text-5xl text-center uppercase">
            our <span className=" font-normal "> blog</span>
          </h1>
        </div>
      </div>

      <div className=" pt-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="">
          <div className="">
            <Image src={img} alt="" className=" mx-auto" />
          </div>
          <div className="w-fit mt-6 ml-3 border border-primary rounded-3xl px-4 md:mx-auto  ">
             <span className=" font-roboto text-xs font-bold ">Marketing</span>
          </div>
          <h1 className=" mt-4 pl-3 font-roboto font-bold text-xl   md:text-center">Curating a workplace that inspires all of us</h1>
          <p className=" mt-6 pl-3 font-roboto text-secondary md:text-center ">February 3, 2021</p>
        </div>

        <div className="pt-10 lg:pt-0">
          <div className="">
            <Image src={img2} alt="" className=" mx-auto" />
          </div>
          <div className="w-fit mt-6 ml-3 border border-primary rounded-3xl px-4 md:mx-auto ">
             <span className=" font-roboto text-xs font-bold ">Marketing</span>
          </div>
          <h1 className=" mt-4 pl-3 font-roboto font-bold text-xl   md:text-center">Curating a workplace that inspires all of us</h1>
          <p className=" mt-6 pl-3 font-roboto text-secondary md:text-center">February 3, 2021</p>
        </div>

        <div className=" pt-10 lg:pt-0">
          <div className="">
            <Image src={img3} alt="" className=" mx-auto" />
          </div>
          <div className="w-fit mt-6 ml-3 border border-primary rounded-3xl px-4 xl:py-1 md:mx-auto ">
             <p className=" font-roboto text-xs font-bold ">Marketing</p>
          </div>
          <h1 className=" mt-4 pl-3 font-roboto font-bold text-xl   md:text-center">Curating a workplace that inspires all of us</h1>
          <p className=" mt-6 pl-3 font-roboto text-secondary md:text-center">February 3, 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
