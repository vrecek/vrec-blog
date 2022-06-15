import React from 'react'

const TopicTags = ({ tags }: { tags: string[] }) => {
   return (
      <div className="tags">
         {
            tags.map((x, i) => (
               <span key={ i }>{ x }</span>
            ))
         }
      </div>
   )
}

export default TopicTags