import React from 'react'
import { HomepageAside } from '../../../interfaces/HomepageArticlesTypes'
import ArticlesAsideSection from './ArticlesAsideSection'

const ArticlesAside = ({ latest, popular }: HomepageAside) => {
   return (
      <aside className='padding-aside'>
         <ArticlesAsideSection title='Latest topics' links={ latest } />

         <ArticlesAsideSection title='Popular' links={ popular } />
      </aside>
   )
}

export default ArticlesAside