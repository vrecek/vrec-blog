import React from 'react'
import FigureImage from '../REUSABLE/FigureImage'
import blank from '../../images/user_blank.png'
import { User } from '../../interfaces/ProfileInterface'
import Button from '../REUSABLE/Button'
import HeaderSection from './HeaderSection'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'

const RightSection = ({ user }: User) => {
   const changeAvatar = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const [img, btn] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)

      const formdata: FormData = new FormData()
      formdata.append('avatar', img.files?.length ? img.files[0] : '')

      const h5 = document.createElement('h5')

      const l: LoadingCss = new LoadingCss('loading')
      l.append(btn)
      btn.style.pointerEvents = 'none'

      try {
         await Fetches.multer(`${ process.env.REACT_APP_API_USER_CHANGE_AVATAR }/${ user._id }`, 'PATCH', formdata)

         h5.textContent = 'Successfully changed'
         h5.className = 'success'

         window.location.reload()

      }catch(err: any) {
         h5.textContent = err.json.msg 
         btn.style.pointerEvents = 'all'
         l.remove()

         setTimeout(() => h5.remove(), 2500)

      }finally {
         btn.appendChild(h5) 
      }
   }

   const displayImage = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement
      const image = t.parentElement!.children[1].children[0] as HTMLImageElement
      
      if(!t.files?.length) {
         image.src = blank
         return
      }

      const url: string = URL.createObjectURL(t.files[0])
      image.src = url
   }

   return (
      <section className='second'>

         <form onSubmit={ changeAvatar } className="avatar-change">
            <HeaderSection>Change avatar</HeaderSection>

            <FigureImage source={ blank } altTxt='avatar' />
            <input onChange={ displayImage } type='file' />
            <Button text='Upload' action={ () => {} } />
         </form>

      </section>
   )
}

export default RightSection