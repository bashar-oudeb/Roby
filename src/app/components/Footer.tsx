import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      items: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      items: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "YouTube Playlist",
      ],
    },
    {
      title: "Extra Links",
      items: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <footer className=" pt-20 bg-primary sm:pt-16 lg:pt-24">
      <div className=" mx-auto ">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {links.map((linkSection, index) => (
            <div key={index}>
              <p className="text-base text-white font-roboto font-bold">
                {linkSection.title}
              </p>
              <ul className="mt-8 space-y-4">
                {linkSection.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-base md:text-sm text-gray-300 transition-all  hover:text-opacity-80 focus:text-opacity-80"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="pt-6 flex flex-wrap md:flex-wrap-reverse items-center justify-between bg-white ">
          <Image className=" w-24 md:order-1 mx-auto " src={Logo} alt="Logo" />

          <p className="w-full mt-4 pb-4 font-roboto  text-base text-center text-primary ">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
