import React from 'react'
import '../../css/ArticlesSection.css'
import '../../css/SearchPageMain.css'
import ArticlesAsideSection from '../Main Page/AllArticles/ArticlesAsideSection'
import { useLocation, useNavigate } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import { ComponentHookType } from '../../interfaces/ReusableTypes'
import { SearchArticlesJSON, SearchType } from '../../interfaces/SearchPageInterface'
import { LoadingCss } from '../../functions/Loading'
import SearchContainer from './SearchContainer'

const SEARCH_PAGE = () => {
   const [articles, setArticles] = React.useState<ComponentHookType<SearchArticlesJSON>>(null)
   const n = useNavigate()
   const location = useLocation()

   window.scrollTo(0, 0)

   React.useEffect(() => {
      const init = async () => {
         const loc: string = window.location.href
         const query: string = loc.slice(loc.lastIndexOf('/') + 1)
      
         const position: number = loc.lastIndexOf(query) - 2
         const type: SearchType = loc.slice(position, position + 1) as SearchType

         const l = new LoadingCss('loading-fixed')

         try {
            l.append(document.body)

            const data = await Fetches.mix<SearchArticlesJSON>(`${ process.env.REACT_APP_API_ARTICLE_SEARCH }/${ type }/${ query }/1`, 'GET')

            setArticles({
               allArticles: data.json.allArticles,
               related: data.json.related,
               finished: true,
               count: data.json.count
            })

         }catch(err: any) {
            n('/error', { state: { msg: err.json.msg, code: err.code }, replace: true })

         }finally { l.remove() }
      }
      init()
   }, [location])

   return (
      <main className='search-page-container'>

         {
            articles?.finished
            ?
               <>
                  {
                     articles?.allArticles?.length
                     ?
                        <>
                           <aside>
                              <ArticlesAsideSection 
                                 cname={ articles?.related?.length > 0 ? '' : 'no-h2' } 
                                 title='Related searches' 
                                 links={ articles.related } 
                              />
                           </aside>

                           <SearchContainer setState={ setArticles } countArticles={ articles.count } articles={ articles.allArticles } />
                        </>
                     :
                     <SearchContainer setState={ setArticles } countArticles={ articles.count } articles={ articles.allArticles } />
                  }
               </>
            :
            <></>
         }

      </main>
   )
}

export default SEARCH_PAGE