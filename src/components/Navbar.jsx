import { React, useState, useEffect } from "react";
import {
  Dialog,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
// import { logoName, logoName1 } from "../assets";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-me" },
  {
    name: "Upcoming Events",
    href: "/upcoming-events",
    subLinks: [
      {
        name: "FIT 2025",
        href: "/event",
      },
    ],
  },
  { name: "Give", href: "/read-blog" },
  { name: "Contact", href: "/contact-me" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex md:flex-row flex-col-reverse justify-center  `}>
      <header
        className={`fixed inset-x-0 top-0 z-50 font-bold   ${
          scrolling
            ? "bg-[#000000] ease-in duration-300 opacity-85 text-white"
            : "bg-transparent text-white"
        }`}
      >
        <nav
          className="flex items-center justify-center p-8 lg:px-8"
          aria-label="Global"
        >
          <div className="w-full flex justify-end pr-4 lg:hidden">
            <button
              type="button"
              className="flex justify-end rounded-md text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="  justify-center uppercase hidden  lg:flex  lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.subLinks ? (
                  <Menu>
                    <MenuButton className="text-sm font-bold uppercase leading-6 hover:text-amber-200 flex items-center gap-2">
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                    </MenuButton>
                    <MenuItems className="absolute mt-2  z-10">
                      {item.subLinks.map((subItem) => (
                        <MenuItem key={subItem.name}>
                          {({ active }) => (
                            <Link
                              to={subItem.href}
                              className={`block text-white bg-[#000000be]  hover:text-amber-200 w-44 px-4 py-2 text-sm ${
                                active ? "text-amber-200" : ""
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm leading-6 hover:text-amber-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
              // <Link
              //   key={item.name}
              //   to={item.href}
              //   className="text-sm font-semibold leading-6 hover:text-amber-300 hover:ease-in-out hover:duration-150"
              // >
              //   {item.name}
              // </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <img className="h-16 w-auto" src={logoName} alt="" /> */}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      {item.subLinks ? (
                        <Menu>
                          <MenuButton className="text-sm leading-6 hover:text-amber-200 flex items-center gap-2">
                            <span>{item.name}</span>
                            <ChevronDownIcon
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </MenuButton>
                          <MenuItems className="absolute mt-2 z-10">
                            {item.subLinks.map((subItem) => (
                              <MenuItem key={subItem.name}>
                                {({ active }) => (
                                  <Link
                                    to={subItem.href}
                                    className={`block text-black bg-[#000000be]  w-44 px-4 py-2 text-sm ${
                                      active ? "bg-gray-100" : ""
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm leading-6 hover:text-amber-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                    // <Link
                    //   key={item.name}
                    //   to={item.href}
                    //   className="-mx-3 block rounded-lg px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    // >
                    //   {item.name}
                    // </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
