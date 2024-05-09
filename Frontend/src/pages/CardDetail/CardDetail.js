import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {

    const {id} = useParams()

    console.log(id)

    useEffect(() => {

         

    },[])

  return (
    <div>CardDetail</div>
  )
}

export default CardDetail