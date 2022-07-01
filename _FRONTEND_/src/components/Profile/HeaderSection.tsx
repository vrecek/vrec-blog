import React from 'react'

const HeaderSection = ({ children }: { children: string }) => {
   return (
      <h3 className='title-what'>{ children }</h3>
   )
}

export default HeaderSection