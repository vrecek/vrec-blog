import React from 'react'
import '../../../css/ArticlesSection.css'
import '../../../css/Paginate.css'
import ArticlesAside from './ArticlesAside'
import OneArticle from './Article/OneArticle'
import { HomepageArticleContainer, HomepageArticlesJSON } from '../../../interfaces/HomepageArticlesTypes'
import Pagination from '../../../functions/PaginationClass'
import Fetches from '../../../functions/Fetches'
import { scroller } from 'react-scroll'
import { LoadingCss } from '../../../functions/Loading'
import { useNavigate } from 'react-router-dom'

const ArticlesSection = ({ articles, latest, popular, setState, articleCount }: HomepageArticleContainer) => {
   const n = useNavigate()
   const pagination = new Pagination(10, articleCount, 1)
   const l = new LoadingCss('loading-fixed')

   const clickPage = async (e: React.MouseEvent) => {
      const t = e.target as HTMLDivElement
      const clickedNum: number = parseInt(t.textContent ?? '1') || 1

      try {
         l.append(document.body)

         const data = await Fetches.mix<HomepageArticlesJSON>(`${ process.env.REACT_APP_API_ARTICLE_GET_ALL_HOMEPAGE }/${ clickedNum }/true`, 'GET')

         setState((curr: any) => {
            curr.allArticles = data.json.allArticles

            return {...curr}
         })

      }catch(err: any) {
         n('/error', { state: { code: err.code, msg: err.msg } })

      }finally { 
         setTimeout(() => {
            scroller.scrollTo('article-section', { offset: -66 })
            l.remove()
         }, 1)
      }
   }

   return (
      <article className='article-section'>
         <ArticlesAside popular={ popular } latest={ latest } />

         <section className='container'>
            
            {
               articles.map((x, i) => (
                  <OneArticle
                     id={ x._id }
                     category={ x.category }
                     tags={ x.tags }
                     title={ x.title }
                     text={ x.text }
                     published={ x.published.str }
                     key={ i } 
                  />
               ))
            }

            {
               pagination.drawPages(clickPage, 'pagination')
            }

         </section>
      </article>
   )
}

export default ArticlesSection