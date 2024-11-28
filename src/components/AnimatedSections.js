"use client";
import { RiJavascriptFill } from "react-icons/ri";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiN8N, SiPrisma } from "react-icons/si";
import {
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaNode, FaCss3Alt } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { useEffect, useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoMdCloudDownload } from "react-icons/io";

export default function AnimatedSections() {
  useScrollReveal();

  const words = ["Developer", "Gamer", "Innovator"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "Qu1ck AI - Estágio desenvolvedor fullstack",
      date: "Setembro de 2024 - Atualmente",
      description: [
        "Criação de APIs e telas utilizando Next.js para gerenciamento de pedidos e entregas em restaurantes",
        "Modelagem e manutenção de banco de dados PostgreSQL com uso do Prisma ORM",
        "Desenvolvimento de chatbots utilizando N8N para automação de processos",
        "Criação de interfaces responsivas e otimizadas com TailwindCSS",
        "Integração e melhoria contínua de sistemas para aprimorar a experiência do cliente e a eficiência operacional",
      ],
    },
    {
      title: "Desenvolvedor autônomo",
      date: "Janeiro de 2023 - Setembro de 2024",
      description: [
        "Desenvolvimento de sistema de cardápio e pedidos para restaurante, utilizando Next, Node, Typescript e PostgreSQL",
        "Desenvolvimento de sistema de controle de dietas, utilizando React, Node, Typescript e MySQL",
        "Desenvolvimento de sistema de flashcards para aprender idiomas, utilizando React e Firebase",
        "Desenvolvimento de aplicativo para controle de vacinas, utilizando React Native e Firebase",
        "Desenvolvimento de sistema de estoque para uma loja de roupas, utilizando Node, React e MySQL",
      ],
    },
    {
      title: "Williarts - Estágio desenvolvedor fullstack",
      date: "Agosto de 2021 - Fevereiro de 2022",
      description: [
        "Desenvolvimento e manutenção de sistemas principalmente para àrea de saúde e pet shops",
        "Desenvolvimento telas e APIs para consumo e apresentação de notícias",
        "Gerenciamento com banco de dados MySQL",
        "Desenvolvimento utilizando PHP, Javascript, HTML e CSS ",
        "Criação de gráficos de serviços e custos utilizando Google Charts para gerenciamento e controle de negócio, assim facilitando o controle do cliente sobre seu orçamento e demanda de trabalho",
      ],
    },
  ];

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
    window.open(
      "https://www.linkedin.com/in/guilherme-nobre-chuman-76583b181/",
      "_blank"
    );
  };

  const openGithubProfile = () => {
    window.open("https://github.com/Guichuman", "_blank");
  };

  const downloadCurriculo = () => {
    const link = document.createElement("a");
    link.href = "/curriculoGuilhermeChuman.pdf"; 
    link.download = "Currículo - Guilherme Chuman.pdf";
    link.click();
  }

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        // Delete text
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); 
        }
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setIsDeleting(true); 
        }
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout); 
  }, [text, isDeleting, index]);

  return (
    <>
      <div className="containerBody">
        <div className="animate-section h-screen  flex items-center justify-center text-white ">
          <div className="section flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-10">
            <div className="hidden-left md:w-1/2 space-y-4  ">
              <h1 className="text-7xl font-bold pb-5">Guilherme Chuman</h1>
              <h1 className="text-5xl font-bold text-white pb-5">
                Hi, I am a <span className="typed-text">{text}</span>
                <span className="blinking-cursor">|</span>
              </h1>
              <div className="flex justify-between w-2/4 mt-8 pb-5">
                <FaLinkedin
                  className="iconLink"
                  onClick={openLinkedinProfile}
                />
                <FaGithub className="iconLink" onClick={openGithubProfile} />
                <MdEmail className="iconLink" />
              </div>
              <div>
                <button onClick={downloadCurriculo} className="btnCurriculo text-xl mt-8">
                  <IoMdCloudDownload className="mr-2" />
                  Baixar currículo
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center hidden-right md:w-1/2 space-y-4">
              <img
                src="/portfolioPicture.jpeg"
                alt="About me"
                className="rounded-2xl w-4/6 shadow-lg object-contain ml-10 "
              />
            </div>
          </div>
        </div>
        <div className="animate-section h-screen w-full flex  text-white px-10">
          <div className="hidden-left w-1/2 space-y-4  section delay-100 flex items-center justify-center">
            <div className="p-4">
              <h2 className="text-6xl pb-14 font-bold">Formações</h2>
              <p className="text-4xl flex pb-5">
                <BiCaretRight className="mr-2 blinking-caret" />
                Bacharelado em Engenharia de Software - UTFPR Formação em 2025
              </p>
              <div className="text-3xl">
                <p className="flex pb-3">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Curso: The complete javascript course 2024: From zero to
                  expert!
                </p>
                <p className="text-3xl flex pb-3">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Curso: Formação Node.js
                </p>
                <p className="text-3xl flex pb-3">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Curso: Projeto completo node.js, react, react native e
                  typescript
                </p>
                <p className="text-3xl flex pb-3">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Curso: Crie sites responsivos com HTML5 e CSS
                </p>
                <p className="text-3xl flex">
                  <BiCaretRight className="mr-2 blinking-caret" />
                  Curso: UX Design rápido e prático
                </p>
              </div>
            </div>
          </div>
          <div className="hidden-right w-1/2 space-y-4 section flex items-center justify-center">
            <div>
              <h2 className="text-6xl font-bold pb-16">
                Experiências profissionais
              </h2>
              <div className="list-none ml-5">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p className="flex items-center text-4xl cursor-pointer pb-14">
                      <BiCaretRight className="mr-2 blinking-caret" />
                      {experience.title}
                    </p>

                    {hoveredIndex === index && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-gray-100 p-5 rounded-lg shadow-lg professionalExperience">
                        <p className="text-2xl text-gray-500 mb-2 font-semibold ">
                          {experience.date}
                        </p>
                        <ul className="list-disc list-inside text-xl text-gray-700">
                          {experience.description.map((item, i) => (
                            <li key={i} className="mb-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="animate-section h-screen w-full text-white flex flex-col items-center justify-center ">
          <h2 className="text-6xl font-bold text-center mb-20  skill-title opacity-0">
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
                className="group-hover:text-blue-800 transition-colors"
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
        <div className="animate-section h-screen w-full text-white px-10 ">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
        <div className="animate-section h-screen w-full text-white px-10 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md ">
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
