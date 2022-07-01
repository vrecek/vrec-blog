import React from 'react'
import ArticleType from '../../interfaces/ArticleType'
import FigureImage from '../REUSABLE/FigureImage'
import Hashtag from '../REUSABLE/Hashtag'
import PostDate from '../REUSABLE/PostDate'
import ArticleTitle from './ArticleDetails/ArticleTitle'
import TagsContainer from './ArticleDetails/TagsContainer'
import TextContent from './ArticleDetails/TextContent'
import ArticleInformations from './ArticleInformations'
import ArticleLocation from './ArticleLocation'

const ArticleMainContent = ({ content }: { content: ArticleType }) => {
   const { title, category, published, likes, dislikes, _id, comments, tags, shortTitle, text, mainImage, textImages, views } = content
   const txtImages: string[] = textImages.map(x => x.url) 

   return (
      <div className='wrap'>
         <ArticleInformations 
            likes={ likes } 
            dislikes={ dislikes }
            id={ _id } 
            commNum={ comments.length } 
         />

         <article className="article-content">
            <ArticleLocation
               articleTitle={ shortTitle }
               articleCategory={ category }
               views={ views }
            />

            <FigureImage
               source={ mainImage.url }
               cname='main-title-image'
               altTxt='article image'
            />

            <div className="hash-date-wrap">
               <Hashtag>{ category }</Hashtag>
               <PostDate>{ published.str }</PostDate>
            </div>

            <TagsContainer 
               tags={ tags }
            />

            <ArticleTitle 
               title={ title }
            />

            <TextContent imgSrcs={ txtImages }>{ text }</TextContent>
            
         </article>
      </div>
   )
}

export default ArticleMainContent