import React from 'react'
import '../../css/ArticleSection.css'
import Hashtag from '../REUSABLE/Hashtag'
import CommentSection from './ArticleComments/CommentSection'
import ArticleTitle from './ArticleDetails/ArticleTitle'
import PostDate from '../REUSABLE/PostDate'
import TagsContainer from './ArticleDetails/TagsContainer'
import TextContent from './ArticleDetails/TextContent'
import ArticleInformations from './ArticleInformations'
import ArticleLocation from './ArticleLocation'
import RelatedTopicsSection from './ArticleRelated/RelatedTopicsSection'
import FigureImage from '../REUSABLE/FigureImage'
import Fetches from '../../functions/Fetches'

const ARTICLE_PAGE = () => {
   const [article, setArticle] = React.useState<any>(null) 

   window.scrollTo(0, 0)

   // color / bold / header / box / image (img inside) <-- SPAN CNAME
   React.useEffect(() => {
      const id: string = '213'

      const init = async () => {
         try {
            const data = await Fetches.mix(`${ process.env.REACT_APP_API_ARTICLE_PRODUCT_PAGE }/${ id }`, 'GET')
            console.log(data)

         }catch(err) {
            console.log(err)
         }
      }
      init()
   }, [])

   return (
      <main className='article-section-container'>
         <section className='article-container'>

            <div className='wrap'>
               <ArticleInformations />

               <article className="article-content">
                  <ArticleLocation
                     articleTitle='Dummy title'
                     articleCategory='Backend' 
                  />

                  <FigureImage
                     source='https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg'
                     cname='main-title-image'
                     altTxt='title image'
                  />

                  <div className="hash-date-wrap">
                     <Hashtag>loremipsum</Hashtag>
                     <PostDate>12.20.2022</PostDate>
                  </div>

                  <TagsContainer 
                     tags={ ['Contest', 'Ipsum', 'Adispicing'] }
                  />

                  <ArticleTitle 
                     title='Lorem ipsum dolor ist amet consecteturr elit.'
                  />

                  <TextContent>xd</TextContent>
                  
               </article>
            </div>

          

            <div className="wrap2">

               <div className="SEPARATOR"></div>

               <RelatedTopicsSection />

               <div className="SEPARATOR"></div>
               
               <CommentSection />

            </div>
            
         </section>
      </main>
   )
}

export default ARTICLE_PAGE