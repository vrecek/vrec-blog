import React from 'react'
import { Link } from 'react-router-dom'

const ButtonContainer = ({ btnContRef }: { btnContRef: React.RefObject<HTMLDivElement> }) => {
   return (
      <div ref={ btnContRef } className='type-select'>

         <Link to='/credentials/log-in'>Log in</Link>
         <Link to='/credentials/register'>Register</Link>

      </div>
   )
}

export default ButtonContainer