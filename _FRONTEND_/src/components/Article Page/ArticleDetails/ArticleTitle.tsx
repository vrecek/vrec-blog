import React from 'react'

const ArticleTitle = ({ title }: { title: string }) => {
   return (
      <h1 className="title">{ title }</h1>
   )
}

export default ArticleTitle