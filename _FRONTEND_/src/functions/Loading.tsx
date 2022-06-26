abstract class Loading {
   protected className: string
   protected currentAppended: HTMLElement | undefined

   public abstract append( element: HTMLElement ): void
   public abstract remove(): void

   public constructor(className: string) {
      this.className = className
   }
}

export class LoadingCss extends Loading {
   public constructor(className: string) {
      super(className)
   } 

   public append(element: HTMLElement) {
      const span = document.createElement('span')
      const div = document.createElement('div')

      div.className = this.className

      div.appendChild(span)

      this.currentAppended = div
      element.appendChild(div)
   }

   public remove() {
      if(!this.currentAppended) return

      this.currentAppended.remove()
   }
}

export class LoadingImage extends Loading {
   private src: string

   public constructor(gifSrc: string, className?: string) {
      super(className ?? '')

      this.src = gifSrc
   } 

   public append(element: HTMLElement) {
      const img = document.createElement('img')
      const div = document.createElement('div')

      div.className = this.className

      img.src = this.src

      div.appendChild(img)

      this.currentAppended = div
      element.appendChild(div)
   }

   public remove() {
      if(!this.currentAppended) return

      this.currentAppended.remove()
   }
}