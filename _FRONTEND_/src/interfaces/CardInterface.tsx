export interface CardType {
   icon: JSX.Element,
   smallText: string,
   bigText: string,
   paraText: string,
   total: number,
   lastUpload: string
}

export interface OneCardTextType {
   smallText: string,
   bigText: string
}

export interface OneCardInfoType {
   cname: string,
   icon: JSX.Element,
   text: number | string
}

export interface LastUpdated {
   category: string,
   when: string
}