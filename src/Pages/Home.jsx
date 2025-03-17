import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo, campus } from "../assets";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/about-me" },
    { name: "About", href: "/about-me" },
    { name: "Upcoming Events", href: "/upcoming-events",subLinks: [
      {
        name: "Editorial Board",
        href: "/editorial-board/editorial-board-team",
      },
     
    ], },
    { name: "Give", href: "/read-blog" },
    { name: "Contact", href: "/contact-me" },
  ];

  return (
    <>
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${campus})`, height: "100vh" }}
    >
      <div className="absolute bg-black min-w-full min-h-full opacity-60">
        <div className="relative"></div>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
        <div className="flex mx-auto max-w-2xl justify-center -mb-32 py-32">
          <img src={logo} alt="logo" className="h-52" />
        </div>
        <h1 className="text-5xl tracking-tight uppercase text-white font-bold sm:text-7xl">
          Zoe Tabernacle
        </h1>
        <p className="mt-8 text-lg font-medium text-white sm:text-xl/8">
          Leading Students to Christ...
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="uppercase bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
          >
            Who we are
          </a>
          <a
            href="#"
            className="uppercase bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800"
          >
            Our events
          </a>
        </div>
      </div>
    </div>
      <div className="w-full bg-none py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4>
          <div className="mt-4 text-gray-600">
            <p>
              Bethel Campus Fellowship (BCF) is an interdenominational,
              politically neutral organization established to proclaim the
              Lordship of Jesus Christ on high school and college campuses.
            </p>
            <p className="mt-2">
              The mission of the Bethel Campus Fellowship is – “Leading Students
              to Christ and preparing them to become reliable men and women that
              God can entrust with His word for the next generation”.
            </p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="text-gray-600">
              <i className="fas fa-child text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mt-2">Our Vision</h3>
            <p className="text-gray-600 max-w-md">
              Leading Students to Christ and preparing them to become reliable
              men and women that God can entrust with His word for the next
              generation.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://www.bethelcampusfellowship.com/about-us"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
