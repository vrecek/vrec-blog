import React from 'react'
import '../../css/ArticlesSection.css'
import '../../css/SearchPageMain.css'
import ArticlesAsideSection from '../Main Page/AllArticles/ArticlesAsideSection'
import OneArticle from '../Main Page/AllArticles/Article/OneArticle'
import SearchDiv from './SearchDiv'
import { useLocation } from 'react-router-dom'

const SEARCH_PAGE = () => {
   const [articles, setArticles] = React.useState<string[]>([])

   window.scrollTo(0, 0)

   const location = useLocation()
   React.useEffect(() => {
      // b - search bar | c - category | t - tags
      const loc: string = window.location.href
      const query: string = loc.slice(loc.lastIndexOf('/') + 1)

      const w = query.split('-')

      setArticles( w )
   }, [location])

   const txts = [...Array(16)].map(x => 'conqesutaret elit')

   return (
      <main className='search-page-container'>

         <aside>
            <ArticlesAsideSection title='Related searches' links={ txts } />
         </aside>

         <section className='container'>
            <SearchDiv searchQuery={ window.location.href.slice(window.location.href.lastIndexOf('/') + 1) } />

            {
               articles?.length &&
               articles.map((x, i) => (
                  <OneArticle key={ i } />
               ))
            }
         </section>

      </main>
   )
}

export default SEARCH_PAGE