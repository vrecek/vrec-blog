import React from 'react'
import { useNavigate } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import Pagination from '../../functions/PaginationClass'
import { HomepageArticlesJSON } from '../../interfaces/HomepageArticlesTypes'
import { ComponentHookType } from '../../interfaces/ReusableTypes'
import ArticlesSection from './AllArticles/ArticlesSection'
import Cards from './Cards/Cards'
import MainHeader from './Header/MainHeader'
import Introduction from './Introduction/Introduction'
import Technologies from './Technologies/Technologies'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)

   const n = useNavigate()
   const [articles, setArticles] = React.useState<ComponentHookType<HomepageArticlesJSON>>(null)

   React.useEffect(() => {
      const init = async () => {
         const l = new LoadingCss('loading-fixed')
         l.append(document.body)
         
         const uri: string = `${ process.env.REACT_APP_API_ARTICLE_GET_ALL_HOMEPAGE }/1`

         try {
            const data = await Fetches.mix<HomepageArticlesJSON>(uri, 'GET')
            const { allArticles, categoriesInfo, lastUpdated, latest, popular, articleCount } = data.json

            setArticles({
               allArticles,
               categoriesInfo,
               popular,
               latest,
               lastUpdated,
               articleCount
            })

         }catch(err: any) {
            n('/error', { state: { msg: err.json.msg, code: err.code } })

         }finally { l.remove() } 
      }
      init()
   }, [])

   return (
      <main className='main-page-container'>

         <MainHeader />
         
         <Introduction />

         <Technologies />

         {
            articles
            &&
            <>
               <Cards categoryDetails={ articles.categoriesInfo } lastDetails={ articles.lastUpdated } />

               <ArticlesSection 
                  popular={ articles.popular } 
                  latest={ articles.latest } 
                  articles={ articles.allArticles } 
                  setState={ setArticles }
                  articleCount={ articles.articleCount }
               />
            </>
         }
         
      </main>
   )
}

export default MAIN_PAGE