export default class Pagination {
   private max: number
   private total: number
   private currentPage: number

   public constructor(max?: number, total?: number, currentPage?: number) {
      this.max = max ?? 0
      this.total = total ?? 0
      this.currentPage = currentPage ?? 1
   }

   private changeColors(e: React.MouseEvent): void {
      const t = e.target as HTMLDivElement

      for(let x of Array.from(t.parentElement!.children as HTMLCollectionOf<HTMLDivElement>)) {
         x.className = ''
      }

      t.className = 'active'
   }

   public drawPages(clickFunc: any, cname?: string): JSX.Element {
      const totalPages: number = Math.floor(this.total / this.max)

      if(isNaN(totalPages)) {
         throw new Error('totalPages is not a number. Check your constructor')
      }

      const arrayNum: number = totalPages <= 0 ? 1 : totalPages

      return (
         <section className={ cname ?? '' }>
            {
               [...Array(arrayNum)].map((x, i) => (
                  <div 
                  onClick={ (e) => { this.changeColors(e); clickFunc(e) } } 
                  className={ i === this.currentPage - 1 ? 'active' : '' } 
                  key={ i }>
                     { i + 1 }
                  </div>
               )) 
            }
         </section>
      )
   }
}