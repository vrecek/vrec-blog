import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../REUSABLE/Button'
import CardsTextParagraph from './CardsTextParagraph'

const CardsText = () => {
   const n = useNavigate()

   // fetch last updated
   const lastCategory: string = 'Backend'

   return (
      <section className="text">
         <h1>Find your category</h1>

         <CardsTextParagraph category={ lastCategory } when='yesterday' />

         <Button text='Browse' action={ () => n(`/search/c/${ lastCategory }`) } additional={ <div></div> } />
      </section>
   )
}

export default CardsText