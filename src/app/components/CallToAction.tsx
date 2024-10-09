const CallToAction = () => {
  return (
    <section className=" mt-16 bg-primary lg:flex lg:justify-between lg:items-center lg:px-8">
      <div className=" pt-10">
        <h1 className=" font-roboto text-white font-bold text-4xl lg:text-5xl  text-center lg:text-start uppercase">
          Let&apos;s <span className=" font-normal "> Talk</span>
        </h1>

        <p className="mt-3 pb-10 font-roboto text-base text-gray-300 text-center lg:text-start">
          Feel free to contact us
        </p>
      </div>
      <div className=" hidden  bg-white w-28 h-28 rounded-full lg:flex justify-center hover:bg-gray-300 cursor-pointer transition-all ">
        <h6 className=" font-roboto text-xs text-primary  self-center text-center uppercase ">
          View on <br /> Designer
        </h6>
      </div>
    </section>
  );
};

export default CallToAction;
