import UserType from "./UserType"

export interface RoundedTextType {
   children: string,
   cname?: string,
   click?: React.MouseEventHandler
}

export interface HeaderType {
   children: string,
   icon: JSX.Element
}

export interface User {
   user: UserType
}

export interface DivWrapType {
   cname?: string,
   title: string,
   content: string | number,
   additional?: JSX.Element,
   clickAction?: React.MouseEventHandler
}