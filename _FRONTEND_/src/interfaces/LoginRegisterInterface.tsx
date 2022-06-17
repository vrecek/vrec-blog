type InputType = 'text' | 'password' | 'checkbox'
type ElementType = 'section' | 'div'

export interface FormType {
   submitAction: React.FormEventHandler,
   leftRef: React.RefObject<HTMLDivElement> 
}

export interface MoveElementsType {
   children: any,
   moveRef: React.RefObject<HTMLDivElement>,
   cname: string,
   elementType: ElementType
}

export interface InputDivType {
   type: InputType,
   cname: string,
   labelText: string,
   idFor?: string,
   keyDown?: (e: React.ChangeEvent) => void
}

export interface PasswordDivType {
   labelTxt: string,
   cname: string,
   keyDown?: (e: React.ChangeEvent, pass?: boolean) => void,
   confPassRef?: React.RefObject<HTMLInputElement>
}