type UserRole = 'user' | 'admin'

export default interface UserType {
   _id: string,
   mail: string,
   hash: string,
   salt: string,
   username: string,

   created: {
      num: number,
      str: string
   },

   role: UserRole
}