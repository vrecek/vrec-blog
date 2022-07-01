import React from 'react'
import '../../css/ArticleSection.css'
import Fetches from '../../functions/Fetches'
import { ComponentHookType } from '../../interfaces/ReusableTypes'
import { ArticlePageType } from '../../interfaces/ArticlePageInterface'
import ArticleMainContent from './ArticleMainContent'
import ArticleFinishContent from './ArticleFinishContent'
import LoadingBlank from './LoadingBlank'
import { LoadingCss } from '../../functions/Loading'
import { useLocation, useNavigate } from 'react-router-dom'

const ARTICLE_PAGE = () => {
   const n = useNavigate()
   const [article, setArticle] = React.useState<ComponentHookType<ArticlePageType>>(null) 
   const location = useLocation()

   window.scrollTo(0, 0)

   React.useEffect(() => {
      const loc: string = window.location.pathname
      const id: string = loc.slice(loc.lastIndexOf('/') + 1)

      const init = async () => {
         setArticle(null)
         
         const l = new LoadingCss('loading-fixed transparent')
         l.append(document.body)
         
         try {
            const data = await Fetches.mix<ArticlePageType>(`${ process.env.REACT_APP_API_ARTICLE_PRODUCT_PAGE }/${ id }`, 'GET')

            setArticle({
               content: data.json.content,
               related: data.json.related,
               finished: true
            })

         }catch(err: any) {
            n('/error', { state: { code: err.code, msg: err?.json?.msg ?? err.msg  } })

         }finally { l.remove() }
      }
      init()
   }, [location])

   return (
      <main className='article-section-container'>
         <section className='article-container'>

            {
               article?.finished
               ?
                  <>
                     <ArticleMainContent content={ article.content } />    

                     <ArticleFinishContent 
                        articleHook={ setArticle }
                        artId={ article.content._id } 
                        relatedArticles={ article.related } 
                        comments={ article.content.comments } 
                     />   
                  </>
               :
               <LoadingBlank />
            }
            
         </section>
      </main>
   )
}

export default ARTICLE_PAGE