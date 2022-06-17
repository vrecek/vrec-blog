import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenuLiType } from '../../../interfaces/NavigateInterface'

const NavigationHiddenMenuLi = ({ icon, route, string }: NavigationMenuLiType) => {
   const hideMenu = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      
      const { tagName } = t
      let menu: HTMLElement | undefined

      if(tagName === 'SPAN') menu = t.parentElement?.parentElement?.parentElement?.parentElement as HTMLElement
      else if(tagName === 'A') menu = t.parentElement?.parentElement?.parentElement as HTMLElement

      if(menu?.tagName !== 'ASIDE') return

      const darkOverlay = menu.parentElement as HTMLElement

      menu.style.transform = 'translateX(-150%)'
      darkOverlay.style.cssText = 'opacity: 0; pointer-events: none';

      const spansCont = darkOverlay.parentElement?.children[0]
      const spans = Array.from(spansCont?.children as HTMLCollectionOf<HTMLSpanElement>)

      if(spans?.length <= 0 || !spansCont) return

      const topValues: number[] = [0, 50, 100]
      for(let i = 0; i <= 2; i++) {
         spans[i].style.top = `${ topValues[i] }%`
         spans[i].style.transform = 'rotate(0)'
      }
      spansCont.classList.remove('active')
      
   }

   return (
      <li>
         <Link onClick={ hideMenu } to={ route }> 
            <span>{ icon }</span> 
            { string }
         </Link>
      </li>
   )
}

export default NavigationHiddenMenuLi