"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-[90vh] lg:w-1/2 relative">
          <Image src="/hero.jpg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Saifee Rahman
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hi there!  I&rsquo;m a Full Stack Web Developer with a passion for turning ideas into fully functional, responsive, and engaging web applications. With expertise in the MERN stack, Next.js, MySQL, and cloud platforms like AWS, I craft seamless digital experiences from front to back. Whether it&apos;s an e-commerce store, social media platform, or a complex news outlet, my goal is to deliver powerful, user-focused solutions that drive results. Check out my projects and feel free to connect with me for collaborations or freelance opportunities!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
