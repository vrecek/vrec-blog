import React from 'react'
import PostDate from '../../REUSABLE/PostDate'

const UserInformation = ({ username }: { username: string }) => {
   return (
      <div>
         <h4 className="username">{ username }</h4>
      </div>
   )
}

export default UserInformation