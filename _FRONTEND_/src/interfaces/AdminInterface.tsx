import React from "react"
import DropDown from "../functions/DropdownClass"
import ArticleType from "./ArticleType"

type InputTypes = 'text' | 'file'

export interface EnterPassType {
   stateResult: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AsideListType {
   children: string,
   icon?: JSX.Element,
   cname?: string,
   clickFunc?: (e: React.MouseEvent, str: string) => void
}

export interface AsideMenuType {
   sectionFunc: (e: React.MouseEvent, str: string) => void
}

export interface AddArticleFormTypes {
   submitFunc: React.FormEventHandler
}

export interface OneInputType {
   labelTxt: string,
   type: InputTypes,
   cname?: string,
   changeFunc?: React.ChangeEventHandler
}

export interface TwoInputsType {
   type1: InputTypes,
   type2: InputTypes,
   title1: string,
   title2: string
}

export interface AddArticleCurrentCategory {
   header: React.RefObject<HTMLHeadingElement>,
   dropDown: DropDown
}

export interface EntryHeaderType {
   children: string,
   margin?: string
}

export interface ArticleInfoType {
   header: string,
   content: string | string[] | number
}

export interface InformationsTotal {
   numberTotal: number,
   inputSearchFunc: React.ChangeEventHandler
}

export interface UserCommentType {
   title: string,
   text: string
}

interface DocInterface<T> {
   finished: boolean,
   docs: T[],
   message: string
}

export type HookType<T> = DocInterface<T> | null

export interface UserInformationType {
   label: string,
   content: string,
   margin?: string
}

export interface DocsComponentType<T> {
   content: T,
   setHook: React.Dispatch<React.SetStateAction<HookType<T>>>
}

export interface DocsComponentOptionsType<T> {
   id: string,
   setHook: React.Dispatch<React.SetStateAction<HookType<T>>>
}

type UserRole = 'user' | 'admin'

export interface UserComponentInfoType {
   name: string,
   mail: string,
   created: string,
   role: UserRole,
   lastSeen: string
}