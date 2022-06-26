import React from 'react'
import { CodeAndResponseType } from '../../interfaces/ErrorPageInterface'

const CodeAndResponse = ({ code, defaultMessage }: CodeAndResponseType) => {
   return (
      <div>
         <h4 className='code'>{ code }</h4>

         <h4 className='default-response'>{ defaultMessage }</h4>
      </div>
   )
}

export default CodeAndResponse