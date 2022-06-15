import React from 'react'
import '../../../css/ArticleComments.css'
import Comment from './Comment'
import CommentForm from './Form/CommentForm'
import NoCommentsInfo from './NoCommentsInfo'
import NotLoggedInfo from './NotLoggedInfo'

const CommentSection = () => {
   const submitComment = (e: React.FormEvent) => {
      e.preventDefault()

      console.log(e.target);
   }

   return (
      <section className="comment-section">
         <CommentForm
            submitAction={ submitComment } 
            username='Usernametxt'
         />

         {/* <NotLoggedInfo />  */}

         <h2 className='article-end-header'>Comments (99)</h2>

         <section className="user-comments">
            <Comment />
            <Comment />
            <Comment />
            {/* <NoCommentsInfo /> */}
         </section>
      </section>
   )
}

export default CommentSection