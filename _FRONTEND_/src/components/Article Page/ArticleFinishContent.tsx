import React from 'react'
import { ArticlePageFinishType } from '../../interfaces/ArticlePageInterface'
import RelatedTopicsSection from './ArticleRelated/RelatedTopicsSection'
import CommentSection from './ArticleComments/CommentSection'

const ArticleFinishContent = ({ comments, relatedArticles, artId, articleHook }: ArticlePageFinishType) => {
   return (
      <div className="wrap2">

         <div className="SEPARATOR"></div>

         <RelatedTopicsSection related={ relatedArticles } />

         <div className="SEPARATOR"></div>
         
         <CommentSection hook={ articleHook } artId={ artId } comments={ comments } />

      </div>
   )
}

export default ArticleFinishContent