"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: 'Website Ticoz',
        description: 'ticketing website',
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 2,
        title: 'React Demon Slayer',
        description: 'Demon Slayer',
        image: '/images/projects/2.jpeg',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 3,
        title: 'NextJs Portfolio Website',
        description: 'My Portofolio Website',
        image: '/images/projects/3.jpeg',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 3,
        title: 'Mobile UI/UX',
        description: 'Make a design kita peduli',
        image: '/images/projects/4.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
]

const ProjectSection = () => {
    const [tag,setTag] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y:50, opacity: 0 },
        animate: { y:0, opacity: 1 },
    }

  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === 'Web'} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === 'Mobile'} />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
            <motion.li 
            key={index}
            variants={cardVariants} 
            initial='initial' 
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            >
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description} 
                imgUrl={project.image} 
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
            </motion.li>
    ))}
    </ul>
    </section>
  )
}

export default ProjectSection
