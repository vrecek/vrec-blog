import React from 'react'

const Hashtag = (props: any) => {
   return (
      <h5 className='hashtag-component'># { props.children }</h5>
   )
}

export default Hashtag