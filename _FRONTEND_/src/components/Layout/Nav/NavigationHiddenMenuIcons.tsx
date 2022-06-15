import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaSteamSquare, FaYoutubeSquare, FaGithubSquare } from 'react-icons/fa'

const NavigationHiddenMenuIcons = () => {
   return (
      <>
         <span onClick={ () => window.open('https://github.com/vrecek', '_blank') }> <FaGithubSquare /> </span>
         <span> <FaYoutubeSquare /> </span>
         <span> <AiFillLinkedin /> </span>
         <span> <FaSteamSquare /> </span>
      </>
   )
}

export default NavigationHiddenMenuIcons