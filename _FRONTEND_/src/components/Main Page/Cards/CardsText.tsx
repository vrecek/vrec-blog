import React from 'react'
import Button from '../../REUSABLE/Button'
import CardsTextParagraph from './CardsTextParagraph'

const CardsText = () => {
   return (
      <section className="text">
         <h1>Find your category</h1>

         <CardsTextParagraph />

         <Button text='Browse' action={ () => {} } additional={ <div></div> } />
      </section>
   )
}

export default CardsText