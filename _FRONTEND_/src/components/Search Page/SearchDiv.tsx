import React from 'react'
import InputText from '../REUSABLE/InputText'
import { FaSearch } from 'react-icons/fa'
import NavigateClass from '../../functions/NavigateClass'
import { useNavigate } from 'react-router-dom'

const SearchDiv = ({ searchQuery }: { searchQuery: string }) => {
   const nc = new NavigateClass()
   const n = useNavigate()

   const searchFunc = (e: React.KeyboardEvent) => {
      const t = e.target as HTMLInputElement

      nc.searchNavigateEnter(e, n, `/search/b/${ t.value.replaceAll(' ', '-') }`)
   }

   return (
      <div className='search-div'>
         <div>
            <span> <FaSearch /> </span>
            <InputText 
               defaultVal={ searchQuery }
               placeholder='SEARCH ARTICLES...' 
               handler={ searchFunc } 
               type='text' 
               handlerType='onkeydown' 
            />
         </div>
      </div>
   )
}

export default SearchDiv