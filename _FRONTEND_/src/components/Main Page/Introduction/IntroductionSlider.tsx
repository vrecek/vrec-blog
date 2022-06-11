import React from 'react'
import s1 from '../../../images/slider1.jpg'
import s2 from '../../../images/slider2.jpg'
import s3 from '../../../images/slider3.jpg'
import '../../../css/IntroductionSlider.css'
import IntroductionSliderRadios from './IntroductionSliderRadios'

const IntroductionSlider = () => {
   const imageRef = React.useRef<HTMLDivElement>(null)

   let counter: number = 1
   let interval: NodeJS.Timer
   
   const intervalFunc = (current: HTMLElement, radioCont: HTMLElement[], len: number) => {
      if(counter >= len) counter = 0

      current.style.transform = `translateX(-${ counter * 100 }%)`

      for(let x of radioCont) x.className = ''

      radioCont[counter].className = 'active'

      ++counter
   }

   const changeSlider = (e: React.MouseEvent, nr: number) => {
      const { current } = imageRef
      const t = e.target as HTMLElement
      const radioCont = Array.from( t.parentElement!.children as HTMLCollectionOf<HTMLElement> )

      for(let x of radioCont) {
         x.className = ''
      }

      t.className = 'active'

      current!.style.transform = `translateX(-${ nr * 100 }%)`

      counter = nr + 1

      clearInterval(interval)
      interval = setInterval(() => intervalFunc(current!, radioCont, radioCont.length), 4000)
   }

   React.useEffect(() => {
      const { current } = imageRef
      const radioCont: HTMLElement[] = Array.from( current!.parentElement!.children[1].children as HTMLCollectionOf<HTMLElement> )

      interval = setInterval(() => intervalFunc(current!, radioCont, radioCont.length), 4000)
   }, [])

   return (
      <figure className='introduction-slider'>

         <div ref={ imageRef } className='img-cont'>
            <img src={ s1 } alt='slider' />
            <img src={ s2 } alt='slider' />
            <img src={ s3 } alt='slider' />
         </div>

         <IntroductionSliderRadios changeSlider={ changeSlider } />
      </figure>
   )
}

export default IntroductionSlider