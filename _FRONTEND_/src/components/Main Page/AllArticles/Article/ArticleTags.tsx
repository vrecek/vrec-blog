import React from 'react'

const ArticleTags = ({ tags }: { tags: string[] }) => {
   return (
      <div>
         {
            tags.map((x, i) => (
               <span key={ i }>{ x }</span>
            ))
         }
      </div>
   )
}

export default ArticleTags