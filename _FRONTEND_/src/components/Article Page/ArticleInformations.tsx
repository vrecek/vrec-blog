import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import ArticleInformationsIcon from './ArticleInformationsIcon'
import { scroller } from 'react-scroll'
import { ActiveRates, ArticlePageRating, RatingType } from '../../interfaces/ArticlePageInterface'
import { UserContext } from '../../App'
import Fetches from '../../functions/Fetches'

const ArticleInformations = ({ likes, dislikes, id, commNum }: ArticlePageRating) => {
   const user = React.useContext(UserContext)
   const isRateActive: ActiveRates = {
      like: likes.who.includes(user?._id ?? ''),
      dislike: dislikes.who.includes(user?._id ?? '')
   }

   const scrollToComments = (): void => scroller.scrollTo('comment-section', { offset: -(60 * 1.5) })

   const updateIcons = (t: HTMLElement): void => {
      const rateIcons = Array.from( t.parentElement!.children as HTMLCollectionOf<HTMLSpanElement> )
      rateIcons.pop()

      const o: HTMLElement = rateIcons.filter(x => x !== t)[0] as HTMLElement

      const targetNum: HTMLElement = t.children[1] as HTMLElement
      const otherNum: HTMLElement = o.children[1] as HTMLElement

      const isTargetActive: boolean = t.classList.contains('active')
      const isOtherActive: boolean = otherNum.parentElement!.classList.contains('active')

      if(isOtherActive) {
         o.classList.remove('active')
         otherNum.textContent = `${ parseInt(otherNum.textContent ?? '1') - 1 }`
      }
      
      if(isTargetActive) {
         t.classList.remove('active')
         targetNum.textContent = `${ parseInt(targetNum.textContent ?? '1') - 1 }`

         return
      }

      t.classList.add('active')
      targetNum.textContent = `${ parseInt(targetNum.textContent ?? '0') + 1 }`
   }

   const appendResult = (target: HTMLElement, msg: string) => {
      const h3 = document.createElement('h3')
      h3.textContent = msg

      target.appendChild(h3)

      setTimeout(() => h3.remove(), 2500)
   }

   const rateArticle = async (e: React.MouseEvent, type: RatingType) => {
      const t = e.target as HTMLElement

      if(!user) {
         appendResult(t, 'Log in to rate')
         return
      }

      try {
         updateIcons(t)
         await Fetches.mix(`${ process.env.REACT_APP_API_ARTICLE_ARTICLE_RATE }/${ type }/${ user._id }/${ id }`, 'PATCH')

      }catch(err: any) {
         appendResult(t, err.json?.msg ?? 'Could not rate')
      }
   }

   return (
      <section className='article-informations'>

         <ArticleInformationsIcon 
            addActive={ isRateActive.like } 
            action={ (e) => rateArticle(e, 'like') } 
            icon={ <AiOutlineLike /> } 
            num={ likes.num } 
         />

         <ArticleInformationsIcon 
            addActive={ isRateActive.dislike } 
            action={ (e) => rateArticle(e, 'dislike') } 
            icon={ <AiOutlineDislike /> } 
            num={ dislikes.num } 
         />

         <ArticleInformationsIcon action={ scrollToComments } icon={ <GoComment /> } num={ commNum } />

      </section>
   )
}

export default ArticleInformations