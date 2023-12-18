import React from 'react'

interface Props{
    params:{id:number}
}

const UserDetails = ({params:{id}}:Props) => {
  return (
    <div>UserDetails {id} </div>
  )
}

export default UserDetails