import React from 'react'
import ArticlesAsideSection from './ArticlesAsideSection'

const ArticlesAside = () => {
   const txts = [...Array(6)].map(x => 'conqesutaret elit')
   
   return (
      <aside>
         <ArticlesAsideSection title='Latest topics' links={ txts } />

         <ArticlesAsideSection title='Popular' links={ txts } />
      </aside>
   )
}

export default ArticlesAside