import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import carpricepredictor from "@/public/carpricepredictor.png"
import Mirae from "@/public/Mirae.png"
import cytoui from "@/public/cytoui.jpg"
import DERMIDimage from "@/public/DERMIDimage.png"
import AutoSQL from "@/public/AutoSQL.png"
import Dashboard from "@/public/Dashboard.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BTech. in Computer Science, GGSIPU",
    location: "Delhi, India",
    description:
      "Pursuing Bachelors of Technology in Computer Science & Engineering, currently in my final year.",
    icon: React.createElement(LuGraduationCap),
    date: "Expected 2024",
  },
  {
    title: "Software Research Intern, IIIT Delhi",
    location: "New Delhi, India",
    description:
      "Worked as a software developer intern. Assisted in the development and Deployment of advance deep learning algorithms. Developed SaaS-based web app for visualization flow-cytometry data for research purposes.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - July 2023",
  },
  {
    title: "Vice-Chairperson at GeeksForGeeks-Student Chapter",
    location: "New Delhi, India",
    description:
      "Managed a team of 8 members, organized various technical events and hackathons in the college.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - April 2023",
  },
  {
    title: "Apprentice, Allsoft Solutions",
    location: "Remote",
    description:
      "Received comprehensive training in AI technologies, including Python, OpenCV, NLP, and Deep Learning.Worked on an industry-grade machine learning project, gaining hands-on experience in developing practical solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Aug 2022",
  },
  {
    title:"Data Science & Analytics Intern, The Sparks Foundation",
    location: "Remote",
    description: "Developed machine learning and data analytics models to extract insights and make predictions based on real-world datasets.",
    icon: React.createElement(CgWorkAlt),
    date:"Sept 2021 - oct 2021",
  }
] as const;

export const projectsData = [
  {
    title: "DERM-ID",
    description:
      "ML-based SaaS web application utilizing JavaScript, Next.JS, Python, Tensorflow, and Flask for preliminary diagnosis of dermatological diseases through image uploading.",
    tags: ["JavaScript", "Next.Js", "TailwindCSS", "Python", "Tensorflow", "Flask"],
    imageUrl: DERMIDimage,
    projectlink:"https://github.com/tusharbhatia2002/DERMID",
  },
  {
    title: "CytoUI",
    description:
      "I worked as a software developer intern at IIIT Delhi, where I worked in development of CytoUI, which is a flow cytometry tool used to visualize flow cytometry data.",
    tags: ["React", "Next.js", "JavaScript", "Redux", "MongoDB", "TailwindCSS", "Prisma", "FastAPI"],
    imageUrl: cytoui,
    projectlink:"https://github.com/tusharbhatia2002/cytoUI_T",
  },
  {
    title: "Auto-SQL Query Generator",
    description:
      "End-to-end LLM application using Google Gemini Pro to generate SQL queries from text and retrieve queries from SQL database",
    tags: ["Python", "Streamlit", "LLM", "Google Gemini Pro", "SQlite"],
    imageUrl: AutoSQL,
    projectlink:"https://auto-sql-query-genartor.streamlit.app/",
  },
  {
    title: "MIX.ai",
    description:
      "Front-end prototype website devloped with AI-pwered chatbot as a part of Internship project.",
    tags: ["Next.js", "TypeScript", "ChakraUI", "Google Analytics", "OpenAI API"],
    imageUrl: Mirae,
    projectlink:"https://main.d1eli87l6v7xbr.amplifyapp.com",
  },
  {
    title: "E-Commerce CMS",
    description:
      "Full-stack Content Management System Dashboard web application for managing ecommerce stores",
    tags: ["Next.js", "TypeScript", "shadcn UI", "MongoDB"],
    imageUrl: Dashboard,
    projectlink:"https://github.com/tusharbhatia2002/ECommerce-CMS-Dashboard",
  },
  {
    title: "Car Price Predictor",
    description:
      "ML-based web application utilizing Flask, HTML, and CSS to accurately predict the selling price of used cars based on user input.",
    tags: ["HTML", "CSS", "Python", "Flask", "machine Learning"],
    imageUrl: carpricepredictor,
    projectlink:"https://github.com/tusharbhatia2002/Car_Price_Prediction_App",
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "Tensorflow",
  "Scikit-Learn",
  "Flask",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Django",
  "Framer Motion",
] as const;
