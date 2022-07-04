import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import '../../css/UserProfile.css'
import LoadingBlank from '../Article Page/LoadingBlank'
import Header from './Header'
import LeftSection from './LeftSection'
import AsideSection from './AsideSection'
import RightSection from './RightSection'

const PROFILE_PAGE = () => {
   window.scrollTo(0, 0)
   
   const user = React.useContext(UserContext)

   const n = useNavigate()

   React.useEffect(() => {
      if(!user) n('/error', { state: { code: 401, msg: 'Log in to view profile' } })
   }, [])

   if(user)
   return (
      <main className="user-profile">

         <AsideSection user={ user } />

         <section className="main-content">

            <Header icon={ <AiOutlineSetting /> }>Settings</Header>

            <section className='all-wrap'>
               
               <LeftSection user={ user } />

               <RightSection user={ user } />

            </section>

         </section>

      </main>
   )

   return (<LoadingBlank />)
}

export default PROFILE_PAGE