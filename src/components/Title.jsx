import React from 'react'

const Title = ({title, subTitle, font, align}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl md:text-[40px] '>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90
      mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title
