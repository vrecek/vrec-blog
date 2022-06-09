import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaSteamSquare, FaYoutubeSquare } from 'react-icons/fa'

const NavigationHiddenMenuIcons = () => {
   return (
      <>
         <span> <AiFillGithub /> </span>
         <span> <FaYoutubeSquare /> </span>
         <span> <AiFillLinkedin /> </span>
         <span> <FaSteamSquare /> </span>
      </>
   )
}

export default NavigationHiddenMenuIcons