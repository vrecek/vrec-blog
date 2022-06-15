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
         { text: 'JavaScript', url: '/' },
         { text: 'HTML', url: '/' },
         { text: 'CSS', url: '/' },
         { text: 'Node JS', url: '/' },
         { text: 'React JS', url: '/' },
         { text: 'Git', url: '/' }
      ],

      [
         { text: 'Backend', url: '/' },
         { text: 'Frontend', url: '/' },
         { text: 'Programming', url: '/' },
         { text: 'News', url: '/' }
      ],

      [
         { text: 'Sign in', url: '/' },
         { text: 'Register', url: '/' },
         { text: 'About', url: '/' },
         { text: 'Contact', url: '/' }
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