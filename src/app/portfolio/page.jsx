"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ReactPlayer from 'react-player';

const items = [

  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Ecommerce Site",
    desc: "This is a ecommerce site I made using Next.js, TailwindCSS and MySQL. It is a site that allows you to buy and sell aquarium related items. It has categories, filtering, a shopping cart and a checkout process like any ecommerce site.",
    img: "/RajAqua.mp4",
    link: "https://rajshahiaquatics.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Dhaka Dosts Social Media React App ",
    desc: "Made with the MERN Stack . It is more like a sample of my CRUD capabilites. You can make a profile and do basic posting and commenting",
    img: "/dhakadosts.mp4",
    link: "https://dhakadosts.vercel.app/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "University Management System ",
    desc: "Made with Next.js, TailwindCSS and MySQL. It is a simple site for managing a university.  It has a dashboard for the admin and a login system. It is a simple site for managing a university. It has a dashboard for the admin and a login system.",
    img: "/mbhec.mp4",
    link: "https://mbhec.edu.bd/",
  },
    {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Patient Management System ",
    desc: "Built a patient management system using Next.js and TypeScript.Features include patient records management, appointment scheduling, and real-time updates. Designed with a modern UI/UX and responsive layout",
    img: "/phs.mp4",
    link: "https://patentmanagement.vercel.app"
  },
  
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Mern News Site",
    desc: "I used a MERN Stack to create a news site with full CRUD functionality and authentication. I used a classic red, black and white palette to accent the site. We have diferrent categories and subcategories to navigate through the site. I set up an API to get weather updates on Rajshahi since that is where the majority of our reader are based on.",
    img: "/natunprovat.mp4",
    link: "https://www.natunprovat.com",

  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next.js Tour Booking App",
    desc: "It is a simple site for booking tours to visit the Sundarbans, Made with Next.js, TailwindCSS and MySQL, my favourite combo. The customer tracks the booking status thgrough order Id's. It was one my first sites so it is very dear to me. The client does not use it anymore.",
    img: "/insanat.mp4",
    link: "https://insaniat.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-full h-56 md:w-[38vw] md:h-[40vh] ">
                    <ReactPlayer 
                      url={item.img}
                      className='react-player'
                      width='100%'
                      height='100%'
                      controls={true}
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
