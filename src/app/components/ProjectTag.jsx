import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? 'text-white border-yellow-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-slate-800 px-6 py-6 text-xl cursor-pointer`}
    onClick={() => onClick(name)}>
        {name}</button>
  )
}

export default ProjectTag
