import React from 'react'
import '../../../css/Navigation.css'
import NavigationIcons from './NavigationIcons'
import NavigationList from './NavigationList'

const Navigation = () => {
   const navRef = React.useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      let canChange: boolean = true
      
      window.addEventListener('scroll', () => {
         if(window.scrollY >= 25 && canChange) {
            navRef.current!.style.background = '#0d0d0d'
            navRef.current!.style.borderColor = '#252525'
            canChange = false
         }
         else if(window.scrollY < 25 && !canChange) {
            navRef.current!.style.background = 'transparent'
            navRef.current!.style.borderColor = 'transparent'
            canChange = true
         }
      })

   }, [])

   return (
      <nav ref={ navRef } className='layout-nav'>
         <NavigationIcons />

         <NavigationList />
      </nav>
   )
}

export default Navigation