import React from "react";

type InputType = 'text' | 'password'
type InputActionType = 'onkeydown' | 'onchange'

export interface IconType {
   icon: JSX.Element,
   clickEvent?: (e: React.MouseEvent) => void,
   cname?: string
}

export interface InputTextType {
   type: InputType,
   handlerType: InputActionType,
   placeholder?: string,
   defaultVal?: string,
   blur?: React.FocusEventHandler,
   focus?: React.FocusEventHandler,
   handler?: (e: any) => void,
}

export interface ArticleLinks {
   shortTitle: string,
   _id: string
}

export interface FigureType {
   altTxt?: string,
   cname?: string,
   source: string
}

export interface ButtonType {
   text: string,
   action: React.MouseEventHandler,
   cname?: string,
   additional?: any,
}

export interface ArticlePostdateType {
   children: string,
   preText?: string
}

export type ComponentHookType<T> = T | null