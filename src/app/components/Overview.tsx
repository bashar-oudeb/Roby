const Overview = () => {
  return (
    <section className=" pt-16 lg:pt-24 px-4">
      <div className="lg:px-4 ">
        <h1 className=" font-roboto text-primary font-bold text-4xl text-center lg:text-start">
          THE PERFECT
        </h1>
        <h6 className=" mt-2 text-3xl font-roboto text-primary  text-center lg:text-start ">
          AGENCY FOR YOUR BRAND
        </h6>
      </div>
      <div className=" pt-10 lg:flex lg:gap-10 ">
        <div className="lg:px-4 lg:w-2/4">
          <p className=" font-roboto text-secondary text-base leading-5 md:w-2/4 lg:w-full md:text-center md:mx-auto lg:text-start lg:mx-0 ">
            We love what we do and create partnerships with our clients to
            ensure their digital transformation is positioned for long-term
            success.
          </p>
          <p className=" mt-4 font-roboto text-secondary text-base leading-5 md:w-2/4 lg:w-full md:text-center md:mx-auto lg:text-start lg:mx-0 ">
            We believe that the human dimensions essential to start any
            successful project and that this is where splendid emotional
            relationships between the company and people are born.
          </p>
        </div>

        <div className=" pt-10 lg:w-2/4">
          <div className=" md:w-2/4 lg:w-2/3   md:mx-auto">
            <div className=" flex items-center justify-between">
              <h1 className=" font-roboto font-bold text-lg ">Awwards</h1>
              <span className=" font-roboto font-bold text-lg"> 14</span>
            </div>
            <hr className=" mt-3 border border-primary" />
            <div className="mt-4 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
                Site of the Day
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                3
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
                Developer Award
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                3
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
                Honorable Mention
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                3
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
                Mobile Exelence
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                3
              </span>
            </div>
          </div>

          <div className=" pt-10  md:w-2/4 lg:w-2/3   md:mx-auto ">
            <div className=" flex items-center justify-between">
              <h1 className=" font-roboto font-bold text-lg ">
                CSS Design Awards
              </h1>
              <span className=" font-roboto font-bold text-lg"> 34</span>
            </div>
            <hr className=" mt-3 border border-primary" />
            <div className="mt-4 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
              UX Design Award
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                10
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
              UI Design Award
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                4
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
              Innovation Design Award
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                3
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h1 className=" font-roboto text-base text-secondary hover:text-linkHover transition-all">
              Website of the Day
              </h1>
              <span className="font-roboto text-base text-secondary hover:text-linkHover transition-all">
                13
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
