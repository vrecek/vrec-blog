import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import '../../../css/Footer.css'
import FigureImage from '../../REUSABLE/FigureImage'
import i from '../../../images/introduction.png'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className="layout-footer">
         <section className='main-section'>
            <ul>
               <li className='li-header'>lorem ipsum</li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
            </ul>

            <ul>
               <li className='li-header'>lorem ipsum</li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
            </ul>

            <ul>
               <li className='li-header'>lorem ipsum</li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
               <li className='li-link'> <Link to='/'>lorem ipsum</Link> </li>
            </ul>

            <FigureImage source={ i } />
         </section>

         <div>
            <span> <AiFillGithub /> </span>
            <span> <AiFillGithub /> </span>
            <span> <AiFillGithub /> </span>
            <span> <AiFillGithub /> </span>
         </div>

         <section className='bar'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </section>
      </footer>
   )
}

export default Footer