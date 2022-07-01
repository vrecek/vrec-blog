import React from 'react'
import UserType from '../../interfaces/UserType'
import FigureImage from '../REUSABLE/FigureImage'
import InlineDiv from './InlineDiv'
import RoundedText from './RoundedText'
import blank from '../../images/user_blank.png'

const AsideSection = ({ user }: { user: UserType }) => {
   return (
      <aside>

         <FigureImage source={ user?.avatar?.url || blank } altTxt='avatar' />
         <RoundedText cname='type'>{ user.role }</RoundedText>

         <section className='wrap'>

            <InlineDiv title='Created' content={ user.created.str } />
            
         </section>

      </aside>
   )
}

export default AsideSection