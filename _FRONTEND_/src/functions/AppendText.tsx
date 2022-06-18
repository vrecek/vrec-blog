type ElementsType = 'h3' | 'h2' | 'h1'

class AppendResult {
   private message: string

   private element: ElementsType
   private elementClass: string

   private isAppended: boolean

   public constructor(element: ElementsType) {
      this.message = 'No message set'
      this.isAppended = false
      this.element = element
      this.elementClass = ''
   }

   public appendTo(appendTo: HTMLElement, removeAfterSeconds: number, cname?: string): void {
      if(this.isAppended) return

      const elem = document.createElement( this.element )

      elem.className = cname ?? this.elementClass
      elem.textContent = this.message

      appendTo.appendChild( elem )

      this.isAppended = true

      setTimeout( () => {
         elem.remove()
         this.isAppended = false

      }, removeAfterSeconds * 1000 )
   }

   public areStringsSet(...strings: string[]): boolean {
      if( strings.some(x => !x) ) {
         this.elementClass = 'false'
         return false
      }

      this.elementClass = 'true'
      return true
   }

   public set setMessage(msg: string) {
      this.message = msg
   }
}

export default AppendResult