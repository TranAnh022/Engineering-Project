import React from 'react'
import { useSelector } from 'react-redux'
import { Material } from '../types'

const Detail = () => {
    const materialDetail = useSelector(({ material}:{material:Material[]})=> material)
  return (
      <div>{materialDetail.map(m => <li key={m.Obj_Id}>{m.Obj_Id}</li>)}
      </div>
  )
}

export default Detail