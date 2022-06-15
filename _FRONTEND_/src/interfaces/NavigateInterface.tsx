export interface NavigationMenuLiType {
   string: string,
   route: string,
   icon: JSX.Element
}

export interface NavigationListLiType {
   icon: JSX.Element,
   text: string,
   url: string,
   cname?: string
}