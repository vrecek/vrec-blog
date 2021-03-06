import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import NavigateClass from '../../../functions/NavigateClass'
import { NavUserType } from '../../../interfaces/NavigateInterface'
import UserType from '../../../interfaces/UserType'
import Icon from '../../REUSABLE/Icon'
import NavigationHiddenMenu from './NavigationHiddenMenu'
import NavigationMenu from './NavigationMenu'

const NavigationIcons = ({ user }: NavUserType) => {
   const navigate = useNavigate()
   const hiddenMenuRef = React.useRef<HTMLDivElement>(null)
   const nc = new NavigateClass()

   const showInput = (appendTo: HTMLElement, input: HTMLInputElement) => {
      appendTo.appendChild(input)

      const width: number = parseFloat(
         window.getComputedStyle(input, null)
               .getPropertyValue('width')
               .split('px')[0]
      )
      
      input.style.width = '0'

      setTimeout(() => input.style.width = `${ width }px`, 5)
   }
   const hideInput = (input: HTMLElement, transitionMs: number) => {
      input.style.width = '0'
      setTimeout(() => input.remove(), transitionMs)
   }  
 
   const showSearch = (e: React.MouseEvent) => {
      const targetDiv = e.target as HTMLElement

      const inputSearch: HTMLInputElement[] = Array.from(targetDiv.children as HTMLCollectionOf<any>).filter(x => x?.tagName === 'INPUT')

      if(inputSearch.length > 0) {
         const input = inputSearch[0]

         hideInput(input, 300)

         return
      }

      const input = document.createElement('input')
      input.type = 'text'
      input.placeholder = 'Search...'
      input.spellcheck = false
      input.addEventListener( 'keydown', (e) => {
         const url: string = `/search/b/${ input.value }`

         nc.searchNavigateEnter( e, navigate, url.replaceAll(' ', '-'), () => hideInput(input, 300) )
      })

      showInput(targetDiv, input)
   }

   return (
      <section className='layout-nav-icons'>
         <NavigationMenu hiddenMenuReference={ hiddenMenuRef } />
         <NavigationHiddenMenu user={ user } setReference={ hiddenMenuRef } />

         <Icon 
            clickEvent={ showSearch }
            icon={ <BiSearch /> } 
            cname='search-icon' 
         />
      </section>
   )
}

export default NavigationIcons