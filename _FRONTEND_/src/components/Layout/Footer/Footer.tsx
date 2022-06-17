import React from 'react'
import '../../../css/Footer.css'
import FigureImage from '../../REUSABLE/FigureImage'
import i from '../../../images/introduction.png'
import FooterList from './FooterList'
import FooterIcons from './FooterIcons'
import FooterTextbar from './FooterTextbar'

const Footer = () => {
   const lists = [
      [
         { text: 'JavaScript', url: '/search/t/JavaScript' },
         { text: 'HTML', url: '/search/t/HTML' },
         { text: 'CSS', url: '/search/t/CSS' },
         { text: 'Node JS', url: '/search/t/NodeJS' },
         { text: 'React JS', url: '/search/t/ReactJS' },
         { text: 'Git', url: '/search/t/Git' }
      ],

      [
         { text: 'Backend', url: '/search/c/Backend' },
         { text: 'Frontend', url: '/search/c/Frontend' },
         { text: 'Programming', url: '/search/c/Programming' },
         { text: 'News', url: '/search/c/News' }
      ],

      [
         { text: 'Log in', url: '/credentials/log-in' },
         { text: 'Register', url: '/credentials/register' },
         { text: 'About', url: '/about' },
         { text: 'Contact', url: '/contact' }
      ]
   ]

   return (
      <footer className="layout-footer">
         <section className='main-section'>
            <FooterList header='Articles' lists={ lists[0] } />

            <FooterList header='Categories' lists={ lists[1] } />

            <FooterList header='Misc' lists={ lists[2] } />

            <FigureImage source={ i } />
         </section>

         <FooterIcons />

         <FooterTextbar />
      </footer>
   )
}

export default Footer