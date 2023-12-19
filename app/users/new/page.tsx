'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
    const router = useRouter()
  return (
    <button className='btn btn-accent uppercase' onClick={router.back}>
        Create
    </button>
  )
}

export default NewUser