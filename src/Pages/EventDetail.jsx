import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import RegistrationModal from "../components/RegistrationModal";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  logo,
  campus,
  Dr_Kwame,
  Emeka,
  Sam_Oyebode,
  Sunmisola_Keye,
  s1,
  s2,
} from "../assets";
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
    <div className=" pb-3 bg-primary   text-white mb-10 text-center overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-60 object-top object-cover"
        // className="w-full h-44 object-top object-cover filter grayscale"
      />
      <h3 className="text-lg font-bold mt-4">{speaker.name}</h3>
      <p className="text-sm">{speaker.company}</p>
      {/* <button className="mt-6 px-4 text-sm bg-black   cursor-pointer text-primary">
        View Bio
      </button> */}
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
  const faqs = [
    {
      question: "Where is the event being held?",
      answer:
        "Camp Copass, 8200 E Mckinney St, Denton, TX 76208 · the camp is located on a peninsula, surrounded by Lake Lewisville. It is in the heart of Denton City and yet quiet, private and serene. It is a very secure campground, with several facilities for lodging, camping and our conference participants are staying in the Tally Retreat Center, an hotel style accommodation. Each room is equipped with 2 queen-size bed, table, bathroom and all the amenities of an hotel. ",
    },
    {
      question: "Can my children come with me?",
      answer:
        "Yes, you can bring your children and or sibling with you. Just make sure that you indicate on the registration all their names and ages and gender so we can prepare to take adequate care of them.",
    },
    {
      question: "What does my payment cover?",
      answer: "The payment covers room, food and registration.",
    },
    {
      question: "Will there be a prayer and counselling room and opportunity?",
      answer:
        "Yes! Throughout the conference, you will be able to receive prayer and counseling.",
    },
    {
      question: "What should I bring to the conference?",
      answer:
        "Your bible & journal, and a heart to receive Your face mask and appropriate clothing Money for food, offering, and to buy things from the bookstore Any medication you’ve been medically prescribed ",
    },
    {
      question: "How does the room look like?",
      answer: "The payment covers room, food and registration.",
    },
    {
      question: "Will I receive a confirmation email once I register?",
      answer:
        "yes, once you successfully complete the registration process, you will receive a confirmation email. ",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Yes. The installment payment can be made but you need to come back to complete the payment on or before June 1st, 2025.",
    },
    {
      question:
        "Can I pay using the church center app on my phone?How does the room look like?",
      answer:
        "Yes, you can pay either online on the registration page here or download the church center app, follow the steps as outlined in Zoe tabernacle giving directions provided. Please remember to choose “FIT 2025” option for your giving.",
    },
    {
      question: "What is the deadline for payment?",
      answer: "On or before June 1st 2025.",
    },
  ];
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
      name: "Pastor Sam Oyebode",
      company: "Tech Innovations",
      image: Sam_Oyebode,
    },
    {
      id: 2,
      name: "Dr Kwame",
      company: "Cyber Security Experts",
      image: Dr_Kwame,
    },
    {
      id: 3,
      name: "Sunmisola Keye",
      company: "Blockchain Solutions",
      image: Sunmisola_Keye,
    },
    {
      id: 4,
      name: "Tessy Somoye",
      company: "Blockchain Solutions",
      image: logo,
    },
    {
      id: 5,
      name: "Emeka Onyejizu",
      company: "AI Revolution",
      image: Emeka,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [attendants, setAttendants] = useState([]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    setIsOpen(false); // Close modal after submission
  };

  const handleAddAttendant = () => {
    setAttendants([...attendants, { name: "", gender: "" }]);
  };

  const handleRemoveAttendant = (index) => {
    setAttendants(attendants.filter((_, i) => i !== index));
  };
  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${campus})`, height: "55vh" }}
      >
        <div className=" absolute bg-black min-w-full min-h-[55vh] opacity-70">
          <div className="relative"></div>
        </div>
        <div className="relative isolate px-6 lg:px-8 sm:pt-40 pt-20 min-h-[55vh]">
          <h1 className="text-5xl  tracking-tight uppercase text-balance text-white font-bold sm:text-7xl">
            Fit for the Master’s Use
          </h1>
          <p className="mt-8 text-2xl font-medium text-pretty text-white sm:text-lg">
            12 - 15 JUNE 2025
          </p>
          <RegistrationModal />
        </div>
      </div>
      <div className=" max-w-6xl flex-col justify-center mx-auto">
        <div className="w-full bg-none py-12 px-4">
          <div className="max-w-7xl mx-auto text-left">
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
              Event detail
            </h1>
            {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}

            <div className="mt-4 text-gray-600">
              <p>
                <span className=" italic text-gray-500">
                  “If anyone cleanses himself from the latter, he will be a
                  vessel for honor, sanctified and useful for the Master,
                  prepared for every good work”
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
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
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
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
              Program Schedule
            </h1>
            {/* <h4 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"typedText"}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h4> */}
          </div>
        </div>
        <div className="container sm:text-left px-4">
          <div className="space-y-6">
            {programSchedule.map((daySchedule, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 border-l-4 border-black"
              >
                {/* Day Heading */}
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {daySchedule.day}
                </h3>

                {/* Sessions List */}
                <ul className=" text-gray-700">
                  {daySchedule.sessions.map((session, idx) => {
                    const parts = session.split(":"); // Split into Title & Time
                    const title = parts[0].trim(); // Get the session name
                    const time = parts.slice(1).join(":").trim(); // Get the time (in case of multiple colons)

                    return (
                      <li
                        key={idx}
                        className=" grid grid-cols-2 sm:flex sm:justify-start  py-2 "
                      >
                        {/* Session Title */}
                        <span className=" sm:flex font-semibold sm:w-1/3">
                          {title}:
                        </span>

                        {/* Time (if exists) */}
                        <span className="text-gray-500 sm:w-1/2  sm:flex ">
                          {time ? time : "—"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-none pt-12 px-4">
          <div className=" max-w-7xl mx-auto text-center">
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
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
                  className={"text-primary text-base/7 font-semibold"}
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
                          tier.featured ? "text-indigo-400" : "text-primary",
                          "h-6 w-5 flex-none"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={
                    "text-primary ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  }
                >
                  Get started today
                </a> */}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-none pt-12 px-4">
          <div className=" max-w-7xl mx-auto text-center">
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
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
        <div className="w-full bg-none pt-12 px-4">
          <div className=" max-w-7xl mx-auto text-center">
            <h1 className=" border-l-2 border-primary flex justify-start font-bold text-gray-700 text-lg sm:text-xl  text-dark-0  p-2">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto my-10 p-6 border border-gray-200 bg-white ">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-gray-500">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="p-4 text-gray-700 text-left bg-gray-50 rounded-md">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
