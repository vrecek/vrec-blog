import { NavigateFunction, useNavigate } from "react-router-dom";

export default class NavigateClass {

   public searchNavigateEnter(ev: KeyboardEvent | React.KeyboardEvent, navigate: NavigateFunction, url: string, cb?: () => void) {
      const { key } = ev

      const target = ev.target as HTMLInputElement
      const value: string = target?.value ?? ''

      if(key === 'Enter' && value) {
         if(cb) cb()

         navigate(url, { replace: true })
      }   
   }

}