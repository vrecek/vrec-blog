import React from 'react'
import { useNavigate } from 'react-router-dom'

const TagsContainer = ({ tags }: { tags: string[] }) => {
   const n = useNavigate()

   return (
      <section className="tags">
         {
            tags.map((x, i) => (
               <span onClick={ () => n(`/search/t/${ x }`) } key={ i }>{ x }</span>
            ))
         }
      </section>
   )
}

export default TagsContainer