import React from 'react'
import { ArticlePostdateType } from '../../interfaces/ReusableTypes'

const PostDate = ({ children, preText }: ArticlePostdateType) => {
   const preDateTxt: string = preText ? preText : 'published'

   return (
      <h4 className="postdate-component">
         <span className='info-text'>{ preDateTxt }:</span> 
         <span className='date'>{ children }</span>
      </h4>
   )
}

export default PostDate