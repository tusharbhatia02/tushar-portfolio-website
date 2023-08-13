
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="mt-6 prose prose-lg">
        <p className="mb-6">
          Hey there, I'm <span className="font-semibold">Tushar Bhatia</span>, a Computer Science enthusiast with a knack for transforming lines of code into captivating digital experiences. As a student and creator, I thrive on challenges and revel in the ever-evolving world of technology.
        </p>

        <p className="mb-6">
          My journey started with the excitement of solving puzzles through programming, and it has evolved into a deep passion for crafting seamless web applications. From breathing life into intricate designs to meticulously optimizing user interfaces, I find joy in every facet of the development process.
        </p>

        <p className="mb-6">
          With a rock-solid foundation in languages like Python, Java, and JavaScript, I've honed my skills in both front-end and back-end development. My journey has led me to delve into cutting-edge frameworks like React and Next.js, allowing me to bring ideas to life in the digital realm.
        </p>

        <p className="mb-6">
          The satisfaction of solving complex problems is what fuels my curiosity. As a perpetual learner, I'm continuously inspired by the endless possibilities that the tech world offers. Beyond coding, I'm a proponent of collaboration, a problem solver at heart, and a believer in the elegance of solutions.
        </p>

        <p className="mb-6">
          Join me as I continue to explore, innovate, and forge meaningful connections through code. Let's embark on a journey of limitless creativity!
        </p>
      </div>
    </motion.section>
  );
}
