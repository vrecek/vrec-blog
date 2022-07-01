import React from 'react'
import '../../../css/ArticleRelated.css'
import ArticleType from '../../../interfaces/ArticleType'
import RelatedTopic from './RelatedTopic'

const RelatedTopicsSection = ({ related }: { related: ArticleType[] }) => {
   return (
      <section className="related-topics-section">
         <h2 className='article-end-header'>Related topics</h2>

         <section className='topics-container'>
            {
               related?.length
               ?
                  related.map((x, i) => (
                     <RelatedTopic 
                        key={ i }
                        tags={ x.tags }
                        title={ x.title }
                        id={ x._id }
                        published={ x.published.str }
                        category={ x.category }
                        image={ x.mainImage.url }
                     />
                  ))
               :
                  <h1 className="no-related">No related articles found</h1>
            }
         </section>
      </section>
   )
}

export default RelatedTopicsSection