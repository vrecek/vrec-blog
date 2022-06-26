import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../REUSABLE/Button'
import CardsTextParagraph from './CardsTextParagraph'

const CardsText = ({ category, when }: { category: string, when: string }) => {
   const n = useNavigate()

   return (
      <section className="text">
         <h1>Find your category</h1>

         <CardsTextParagraph category={ category } when={ when } />

         <Button text='Browse' action={ () => n(`/search/c/${ category }`) } additional={ <div></div> } />
      </section>
   )
}

export default CardsText