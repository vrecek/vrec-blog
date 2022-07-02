import React from 'react'

const TextContent = ({ children, imgSrcs }: { children: string, imgSrcs: string[] }) => {
   const textRef = React.useRef<HTMLParagraphElement>(null)

   React.useEffect(() => {
      let copyTxt = children.replaceAll('[:b]', '<span class="bold">').replaceAll('[b:]', '</span>')
                        .replaceAll('[:h]', '<span class="header">').replaceAll('[h:]', '</span>')
                        .replaceAll('[:clr]', '<span class="color">').replaceAll('[clr:]', '</span>')
                        .replaceAll('[:box]', '<span class="box">').replaceAll('[box:]', '</span>')
                        .replaceAll('\n', '<br/>')

      let num: number = 0
      copyTxt = copyTxt.replace(/\[:img\]\[img:\]/g, () => {
         if(!(num in imgSrcs)) return '<br/>'

         ++num

         return `<span class='image'><img src='${ imgSrcs[num - 1] }' alt='image'/></span>`
      });

      textRef.current!.innerHTML = `${ copyTxt }`
   }, [])
   
   return (
      <p ref={ textRef } className='text'>
         {/* innerHTML */}
      </p>
   )
}

export default TextContent