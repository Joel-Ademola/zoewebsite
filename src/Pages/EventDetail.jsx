import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo, campus, s1, s2, s3, s4 } from "../assets";
import { CheckIcon } from "@heroicons/react/20/solid";
const TicketCard = ({ price, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold">{price}$</h3>
      <p className="text-gray-500">{title}</p>
      <ul className="text-sm text-gray-600 mt-4">
        <li>- Feature 1</li>
        <li>- Feature 2</li>
        <li>- Feature 3</li>
      </ul>
    </div>
  );
};
const SpeakerCard = ({ speaker }) => {
  return (
    <div className="bg-[#49bb8c] pb-3 text-white mb-10 text-center overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-44 object-top object-cover filter grayscale"
      />
      <h3 className="text-lg font-bold mt-4">{speaker.name}</h3>
      <p className="text-sm">{speaker.company}</p>
      <button className="mt-6 px-4 text-sm border-2 cursor-pointer text-white">
        View Bio
      </button>
    </div>
  );
};
const tiers = [
  {
    name: "Single",
    id: "tier-hobby",
    href: "#",
    price: "$310",
    size: "/person",

    features: ["A room", "Food", "Registration"],
    featured: false,
  },
  {
    name: "Family of 2 Adults",
    id: "tier-hobby",
    href: "#",
    price: "$754",
    size: "",

    features: ["A room", "Food", "Registration"],
    featured: false,
  },
  {
    name: "Family of 3 adults",
    id: "tier-hobby",
    href: "#",
    price: "$850",
    size: "",

    features: ["A room", "Food", "Registration"],
    featured: false,
  },
  {
    name: "Kid’s Meal (ages 2-10)",
    id: "tier-hobby",
    href: "#",
    price: "$8 ",
    size: "/child",

    features: ["Kids 0-2 meals are free"],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SessionCard = ({ session }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-600">
      <p className="text-gray-500 text-sm">{session.time}</p>
      <h3 className="text-lg font-semibold">{session.title}</h3>
      {session.details && (
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {session.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function EventDetail() {
  const programSchedule = [
    {
      day: "THURSDAY June 12, 2025",
      sessions: [
        "Session 1: 4:30PM - 5:45PM",
        "DINNER: 6:00PM",
        "Session 2: 7:45PM - 9:30PM",
      ],
    },
    {
      day: "FRIDAY June 13, 2025",
      sessions: [
        "BREAKFAST: 8:00AM",
        "Session 3: 9:00AM - 11:50AM (Worship, Word, Prayer, Q&A)",
        "LUNCH: 12:00PM",
        "Session 4: 2:00PM - 5:00PM (Worship, Word, Workshop, Q&A)",
        "DINNER: 6:00PM",
        "Session 5: 7:45PM - 9:30PM",
      ],
    },
    {
      day: "SATURDAY June 14, 2025",
      sessions: [
        "BREAKFAST: 8:00AM",
        "Session 6: 9:00AM - 11:45AM (Worship, Word, Prayer, Q&A)",
        "LUNCH: 12:00PM",
        "Session 7: 2:00PM - 5:00PM (Worship, Word, Workshop, Q&A)",
        "DINNER: 6:00PM",
        "Session 8: 7:00PM - 9:00PM",
      ],
    },
    {
      day: "SUNDAY June 15, 2025",
      sessions: ["BREAKFAST: 8:00AM", "Session 9: 9:00AM - 11:30AM"],
    },
  ];
  

  const speakers = [
    {
      id: 1,
      name: "John Doe",
      company: "Tech Innovations",
      image: s1,
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "AI Revolution",
      image: s2,
    },
    {
      id: 3,
      name: "Michael Johnson",
      company: "Cyber Security Experts",
      image: s3,
    },
    {
      id: 4,
      name: "Emily Davis",
      company: "Blockchain Solutions",
      image: s4,
    },
    {
      id: 5,
      name: "Jane Smith",
      company: "AI Revolution",
      image: s2,
    },
    {
      id: 6,
      name: "Emily Davis",
      company: "Blockchain Solutions",
      image: s4,
    },
  ];
  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${campus})`, height: "55vh" }}
    >
      <div className=" absolute bg-black min-w-full min-h-[55vh] opacity-70">
        <div className="relative"></div>
      </div>
      <div className="relative isolate px-6 lg:px-8 pt-40 min-h-[55vh]">
        <h1 className="text-5xl  tracking-tight uppercase text-balance text-white font-bold sm:text-7xl">
          Fit for the Master’s Use
        </h1>
        <p className="mt-8 text-2xl font-medium text-pretty text-white sm:text-lg">
          12 - 15 JUNE 2025
        </p>
      </div>
      <div className=" max-w-6xl flex-col justify-center mx-auto">

      <div className="w-full bg-none py-12 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className=" border-l-2 border-teal-600 flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
            Event detail
          </h1>
          {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}

          <div className="mt-4 text-gray-600">
            <p>
              <span className=" italic text-gray-500">
                “If anyone cleanses himself from the latter, he will be a vessel
                for honor, sanctified and useful for the Master, prepared for
                every good work”
              </span>{" "}
              2 Timothy 2: 21.
            </p>
          </div>
          <div className="flex flex-col items-left ">
            <div className="text-gray-600">
              <i className="fas fa-child text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-sm font-base text-gray-700 mt-2">
              What's Included
            </h3>
            <p className="text-gray-600 max-w-5xl">
              Join us for 4 days of life changing teaching, worship, prayer,
              interactive workshops and much more! Your registration fee will
              cover: Accommodation, Dining and Registration.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-none pt-4 px-4">
        <div className=" max-w-7xl mx-auto text-center">
          <h1 className=" border-l-2 border-teal-600 flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
            The speakers
          </h1>
          {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}
        </div>
      </div>
      <div className="  snap-y snap-mandatory  flex justify-center flex-col sm:p-10 p-4 ">
        <div className=" flex justify-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-none pt-4 pb-12 px-4">
        <div className=" max-w-7xl mx-auto text-center">
          <h1 className=" border-l-2 border-teal-600 flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
            Program Schedule
          </h1>
          {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="">
          {programSchedule.map((daySchedule, index) => (
            <div key={index} className="bg-white shadow-md flex-row justify-start  p-6 border-l-4 border-[#49bb8c]">
              <h3 className="text-2xl font-bold text-[#49bb8c] mb-4">{daySchedule.day}</h3>
              <ul className="list-disc list-inside ali text-gray-700 space-y-2">
                {daySchedule.sessions.map((session, idx) => (
                  <li key={idx}>{session}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  
      <div className="w-full bg-none pt-12 px-4">
        <div className=" max-w-7xl mx-auto text-center">
          <h1 className=" border-l-2 border-teal-600 flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
            Pricing for the Conference
          </h1>
          {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}
        </div>
      </div>
      <div className="relative isolate bg-white px-6 py-2 sm:py-2 lg:px-8">
        <div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   items-center gap-y-6 gap-x-6 sm:mt-20">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={
                "bg-white/60 sm:mx-8 lg:mx-0 rounded-t-3xl   sm:rounded-t-3xl  lrounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              }
            >
              <h3
                id={tier.id}
                className={"text-[#49bb8c] text-base/7 font-semibold"}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={
                    "text-gray-900 text-5xl font-semibold tracking-tight"
                  }
                >
                  {tier.price}
                </span>
                <span className={"text-gray-500 text-base"}>{tier.size}</span>
              </p>

              <ul
                role="list"
                className={"text-gray-600 mt-8 space-y-3 text-sm/6 sm:mt-10"}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-[#49bb8c]",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={
                  "text-[#49bb8c] ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                }
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-none pt-12 px-4">
        <div className=" max-w-7xl mx-auto text-center">
          <h1 className=" border-l-2 border-teal-600 flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
            Save the location
          </h1>
          {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}
        </div>
      </div>
      <div className="  px-4 mt-4">
        <iframe
          className="w-full h-64 md:h-96"
          src="https://maps.google.com/maps?q=Vancouver&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </div>
      {/* <section className="bg-gradient-to-r from-green-400 to-teal-600 flex items-center text-white py-20 text-center px-52">
        <div className=" mx-auto px-4">
          <h2 className="text-2xl max-w-4/6">12 - 15 JUNE 2025</h2>
        </div>
        <div className=" mx-auto px-4 max-w-4/6">
          <h1 className="text-4xl font-bold">Fit for the Master’s Use</h1>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Our Expert Speakers</h2>
        <p className="text-gray-500">
          Meet the experts who will be speaking at the event.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 container mx-auto px-4">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">Buy Your Ticket Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 container mx-auto px-4">
          <TicketCard price={25} title="Individual" />
          <TicketCard price={45} title="Pro" />
          <TicketCard price={99} title="Group" />
        </div>
      </section>
      <section className="py-16 text-center bg-teal-500 text-white">
        <h2 className="text-xl">Check Out</h2>
        <div className="inline-block bg-white p-4 rounded-full mt-4">
          <span className="text-red-500 text-4xl">▶</span>
        </div>
        <h2 className="text-xl mt-2">Last Video</h2>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Save The Location</h2>
        <p className="text-gray-500">1333 Main Street, Vancouver, BC</p>
        <div className="mt-4">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://maps.google.com/maps?q=Vancouver&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">Travel Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 container mx-auto px-4">
          {["Location", "Transport", "Restaurant"].map((item, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="text-gray-500 text-sm">
                Description about {item} services.
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
