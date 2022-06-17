import React from 'react'

const NavigationMenu = ({ hiddenMenuReference }: { hiddenMenuReference: React.RefObject<HTMLDivElement> }) => {
   const toggleMenu = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const spans: HTMLElement[] = Array.from(t.children as HTMLCollectionOf<HTMLElement>)

      t.classList.toggle('active')

      const isActive: boolean = t.classList.contains('active')

      const top: number[] = isActive ? [50, 50, 50] : [0, 50, 100]
      const rotate: number[] = isActive ? [50, 50, 130] : [0, 0, 0]

      for(let i = 0; i <= 2; i++) {
         spans[i].style.top = `${ top[i] }%`
         spans[i].style.transform = `rotate(${ rotate[i] }deg)`
      }

      const { current } = hiddenMenuReference
      const menu = current!.children[0] as HTMLElement

      if(isActive) {
         menu.style.transform = 'translateX(0)'
         current!.style.opacity = '1'
         current!.style.pointerEvents = 'all'
         return
      }
      
      menu.style.transform = 'translateX(-150%)'
      current!.style.opacity = '0'
      current!.style.pointerEvents = 'none'
   }

   return (
      <div onClick={ toggleMenu } className='icons-menu'>
         <span className='line'></span>
         <span className='line'></span>
         <span className='line'></span>
      </div>
   )
}

export default NavigationMenu