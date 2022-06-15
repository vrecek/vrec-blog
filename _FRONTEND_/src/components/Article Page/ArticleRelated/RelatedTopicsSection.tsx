import React from 'react'
import '../../../css/ArticleRelated.css'
import RelatedTopic from './RelatedTopic'

const RelatedTopicsSection = () => {
   return (
      <section className="related-topics-section">
         <h2 className='article-end-header'>Related topics</h2>

         <section className='topics-container'>
            <RelatedTopic />
            <RelatedTopic />
            <RelatedTopic />
            <RelatedTopic />
            <RelatedTopic />
            <RelatedTopic />
         </section>
      </section>
   )
}

export default RelatedTopicsSection