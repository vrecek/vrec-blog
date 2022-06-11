import React from 'react'

const IntroductionSliderRadios = ({ changeSlider }: { changeSlider: (e: React.MouseEvent, i: number) => void }) => {
   return (
      <div className='radios'>
         {
            [...Array(3)].map((x, i) => (
               <span 
                  className={ i === 0 ? 'active' : '' } 
                  key={ i } 
                  onClick={ (e) => changeSlider(e, i) }>
               </span>
            ))
         }
      </div>
   )
}

export default IntroductionSliderRadios