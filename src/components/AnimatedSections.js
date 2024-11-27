"use client";
import { RiJavascriptFill } from "react-icons/ri";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiN8N, SiPrisma } from "react-icons/si";
import { FaGitAlt, FaReact, FaHtml5, FaGithub, FaLinkedin   } from "react-icons/fa";
import { FaNode, FaCss3Alt } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { useEffect, useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoMdCloudDownload } from "react-icons/io";

export default function AnimatedSections() {
  useScrollReveal();

  const words = ["Developer", "Designer", "Creator", "Innovator"];
  const [text, setText] = useState(""); // Current text being typed
  const [index, setIndex] = useState(0); // Index of the current word
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("pop-in");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.remove("pop-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".hidden-left, .hidden-right");
    sections.forEach((section) => observer.observe(section));

    const skills = document.querySelectorAll(".skill-card, .skill-title");
    skills.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  const openLinkedinProfile = () => {
     window.open("https://www.linkedin.com/in/guilherme-nobre-chuman-76583b181/", "_blank");
  }

  const openGithubProfile = () => {
     window.open("https://github.com/Guichuman", "_blank");
  }

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        // Delete text
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); // Move to the next word
        }
      } else {
        // Add text
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setIsDeleting(true); // Start deleting after typing complete
        }
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [text, isDeleting, index]);

  return (
    <>
      <div className="containerBody">
        <div className="animate-section h-screen w-full flex items-center justify-center bg-slate-950 text-white rajdhani-light">
          <div className="section flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-10">
            <div className="hidden-left md:w-1/2 space-y-4 rajdhani-light ">
              <h1 className="text-5xl font-bold">Guilherme Chuman</h1>
              <div className="flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">
                  Hi, I am a <span className="typed-text">{text}</span>
                  <span className="blinking-cursor">|</span>
                </h1>
              </div>
              <div className="flex justify-between p-1">
                <FaLinkedin className="iconLink" onClick={openLinkedinProfile}/>
                <FaGithub className="iconLink" onClick={openGithubProfile}/>
                <MdEmail className="iconLink"/>
              </div>
            </div>
            <div className="hidden-right md:w-1/2">
              <img
                src="/path-to-your-image.jpg"
                alt="About me"
                className="rounded-lg w-3/4 shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
        <div className="animate-section h-screen w-full flex items-center justify-center bg-slate-950 text-white px-10">
          <div className="hidden-left w-1/2 space-y-4 rajdhani-light section delay-100 flex items-center justify-center">
            <div className="">
              <h2 className="text-6xl pb-14 font-bold">Education</h2>
              <p className="text-xl">Degree: Bachelor of Computer Science</p>
              <div className="text-xl">
                <p className="flex items-center">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Course: Fullstack Development Bootcamp
                </p>
                <p className="flex items-center">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Course: Advanced React and Next.js
                </p>
              </div>
            </div>
          </div>
          <div className="hidden-right w-1/2 space-y-4 rajdhani-light section flex items-center justify-center">
            <div>
              <h2 className="text-6xl font-bold pb-14">
                Professional Experiences
              </h2>
              <div className="list-none ml-5 text-xl">
                <p className="flex items-center">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Software Developer at [Company Name] (2022 - Present)
                </p>
                <p className="flex items-center">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Internship at [Company Name] (2020 - 2022)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-section h-screen w-full bg-slate-950 text-white flex flex-col items-center justify-center rajdhani-light">
          <h2 className="text-5xl font-bold text-center mb-20 rajdhani-light skill-title opacity-0">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-20 mt-6">
            <div className="skill-card  bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <FaHtml5
                className="group-hover:text-orange-500 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card  bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <FaCss3Alt
                className="group-hover:text-blue-500 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card  bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <SiMysql
                className="group-hover:text-blue-700 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card  bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <RiJavascriptFill
                className="group-hover:text-yellow-400 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card  bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <BiLogoPostgresql
                className="group-hover:text-blue-600 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <FaNode
                className="group-hover:text-green-700 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <FaGitAlt
                className="group-hover:text-orange-500 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <FaReact
                className="group-hover:text-cyan-400 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <BiLogoTypescript
                className="group-hover:text-blue-500 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <TbBrandReactNative
                className="group-hover:text-cyan-400 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <SiPrisma
                className="group-hover:text-indigo-500 transition-colors"
                size={85}
              />
            </div>
            <div className="skill-card bg-white text-black p-4 rounded-lg shadow-lg flex items-center justify-center containerSkillCard transition-transform transform hover:scale-105 hover:shadow-xl group ">
              <SiN8N
                className="group-hover:text-red-600 transition-colors"
                size={85}
              />
            </div>
          </div>
        </div>
        <div className="animate-section h-screen w-full bg-slate-950 text-white px-10 rajdhani-light">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rajdhani-light">
            <a
              href="https://github.com/your-project-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src="/path-to-project-image.jpg"
                alt="Project Image"
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">Project Name</h3>
            </a>
            {/* Add more project cards */}
          </div>
        </div>
        <div className="animate-section h-screen w-full bg-slate-950 text-white px-10 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md rajdhani-light">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form
              action="mailto:your-email@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 border-2 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-gray-300 border-2 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border-gray-300 border-2 rounded-md p-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white font-bold py-2 rounded-md hover:bg-purple-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
