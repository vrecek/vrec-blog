import React from "react"
import UserType from "./UserType"

export interface NavigationMenuLiType {
   string: string,
   route?: string,
   icon: JSX.Element,
   logoutFunc?: (e: React.MouseEvent) => void
}

export interface NavigationListLiType {
   icon: JSX.Element,
   text: string,
   url: string,
   cname?: string,
}

type NavUser = UserType | null

export interface NavUserType {
   user: NavUser
}

export interface HiddenMenuType {
   user: NavUser,
   setReference: React.RefObject<HTMLDivElement>
}