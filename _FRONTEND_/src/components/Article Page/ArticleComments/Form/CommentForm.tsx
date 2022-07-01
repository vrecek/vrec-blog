import React from 'react'
import { PostCommentFormType } from '../../../../interfaces/ArticlePageInterface'
import Button from '../../../REUSABLE/Button'
import FigureImage from '../../../REUSABLE/FigureImage'
import UserInformation from '../UserInformation'

const CommentForm = ({ submitAction, username, userAvatar }: PostCommentFormType) => {
   return (
      <form onSubmit={ submitAction }>

         <section className="user-info">

            <FigureImage source={ userAvatar } altTxt='avatar' />

            <UserInformation username={ username } />

         </section>

         <section className="textarea">

            <textarea spellCheck='false'></textarea>
            <Button text='Comment' action={ () => {} } />

         </section>

      </form>
   )
}

export default CommentForm