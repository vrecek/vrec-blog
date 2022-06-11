import React from 'react'
import '../../../css/TechnologiesSection.css'
import TechnologiesText from './TechnologiesText'
import TechnologiesType from './TechnologiesType'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiTypescript, SiMongodb } from 'react-icons/si'
import { FaNode, FaSass,FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'

const Technologies = () => {
   return (
      <article className='technologies-section'>
         <section className='cards'>

            <TechnologiesType icon={ <IoLogoJavascript /> } label='JavaScript' />
            <TechnologiesType icon={ <SiTypescript /> } label='TypeScript' />           
            <TechnologiesType icon={ <AiFillHtml5 /> } label='HTML' />
            <TechnologiesType icon={ <IoLogoCss3 /> } label='CSS' />
            <TechnologiesType icon={ <FaSass /> } label='SASS' />
            <TechnologiesType icon={ <FaReact /> } label='React JS' />
            <TechnologiesType icon={ <SiMongodb /> } label='Mongoose' />
            <TechnologiesType icon={ <FaNode /> } label='Node JS' />

         </section>

         <TechnologiesText />
      </article>
   )
}

export default Technologies