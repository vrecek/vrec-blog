import React from 'react'
import FigureImage from '../../REUSABLE/FigureImage'
import PostDate from '../../REUSABLE/PostDate'
import UserInformation from './UserInformation'

const Comment = () => {
   return (
      <article className="comment">
         <section className="user">

            <FigureImage 
               source='https://wallpaperaccess.com/full/13192.jpg'
               altTxt='avatar'
            />
            
            <div className='text-info'>
               <UserInformation username='myusername99' />
               <PostDate preText='posted'>12.12.2022</PostDate>
            </div>

         </section>

         <article className="text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita qui, molestiae sunt nihil repudiandae asperiores odio harum vero in fugiat, labore adipisci nostrum facilis consequuntur possimus inventore ad? Dolorem!</p>
         </article>
      </article>
   )
}

export default Comment