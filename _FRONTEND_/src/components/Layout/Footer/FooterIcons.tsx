import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaSteamSquare, FaYoutubeSquare } from 'react-icons/fa'

const FooterIcons = () => {
   return (
      <div>
         <span onClick={ () => window.open('https://github.com/vrecek', '_blank') }> <FaGithubSquare /> </span>
         <span> <AiFillLinkedin /> </span>
         <span> <FaYoutubeSquare /> </span>
         <span> <FaSteamSquare /> </span>
      </div>
   )
}

export default FooterIcons