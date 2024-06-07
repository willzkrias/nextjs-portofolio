"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>MySql</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Figma</li>
        <li>AdobeXD</li>
        <li>UX/UX Designer</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SMA NEGERI 1 MANADO</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fundamental React</li>
        <li>Making A Website Pokemon With React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 flex flex-wrap justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className='rounded-full bg-transparent w-[300px] h-[300px] relative border border-white overflow-hidden'>
                    <Image
                        src="/images/about-image.png"
                        alt='about image'
                        className='absolute transform -translate-x-2/4 -translate-y-2/3 top-2/3 left-[50%]'
                        width={300}
                        height={300}
                    /> 
                </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Front End web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, HTML, CSS, UI/UX Designer and Git. I 
            am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          { <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> }
          {<div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;