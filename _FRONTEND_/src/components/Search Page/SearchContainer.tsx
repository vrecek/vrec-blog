import React from 'react'
import '../../css/Paginate.css'
import { SearchArticlesJSON, SearchContainerType, SearchType } from '../../interfaces/SearchPageInterface'
import OneArticle from '../Main Page/AllArticles/Article/OneArticle'
import FigureImage from '../REUSABLE/FigureImage'
import SearchDiv from './SearchDiv'
import emptyImg from '../../images/search_empty.png'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../functions/PaginationClass'
import { LoadingCss } from '../../functions/Loading'
import Fetches from '../../functions/Fetches'
import { scroller } from 'react-scroll'

const SearchContainer = ({ articles, countArticles, setState }: SearchContainerType) => {
   const isLength = articles?.length

   const styles = {
      width: '100%'
   }

   const n = useNavigate()
   const pagination = new Pagination(10, countArticles, 1)
   const l = new LoadingCss('loading-fixed')

   const clickPage = async (e: React.MouseEvent) => {
      const t = e.target as HTMLDivElement
      const clickedNum: number = parseInt(t.textContent ?? '1') || 1

      const loc: string = window.location.href
      const query: string = loc.slice(loc.lastIndexOf('/') + 1)
   
      const position: number = loc.lastIndexOf(query) - 2
      const type: SearchType = loc.slice(position, position + 1) as SearchType

      try {
         l.append(document.body)

         const data = await Fetches.mix<SearchArticlesJSON>(`${ process.env.REACT_APP_API_ARTICLE_SEARCH }/${ type }/${ query }/${ clickedNum }/true`, 'GET')

         setState((curr: any) => {
            curr.allArticles = data.json.allArticles

            return {...curr}
         })

      }catch(err: any) {
         n('/error', { state: { code: err.code, msg: err.msg } })

      }finally { 
         setTimeout(() => {
            scroller.scrollTo('App', {})
            l.remove()
         }, 1)
      }
   }

   return (
      <section style={ styles } className='container'>
         <SearchDiv searchQuery={ window.location.href.slice(window.location.href.lastIndexOf('/') + 1) } />

         {
            isLength
            ?
               <>
                  {
                     articles.map((x, i) => (
                        <OneArticle 
                           key={ i }
                           title={ x.title }
                           tags={ x.tags }
                           id={ x._id }  
                           published={ x.published.str }
                           category={ x.category }
                           text={ x.text }
                        />
                     ))
                  }
                  {
                     pagination.drawPages(clickPage, 'pagination')
                  }
               </>
            :
               <>
                  <h1 className='no-articles-search'>No articles found</h1>
                  <FigureImage source={ emptyImg } altTxt='No articles' />
               </>
            
         }
      </section>
   )
}

export default SearchContainer