import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Material } from '../types'

const ListMaterials = () => {
    const materialDetail = useSelector(({ material }: { material: Material[] }) => material)

  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
            <th>Obj_Id</th>
            <th>Obj_name</th>
            <th>materials</th>
            <th>remarks</th>
            <th>mass</th>
            <th>density</th>
            <th>kg</th>
        </tr>
      </thead>
        <tbody>
                  {materialDetail.slice(0,5).map(m => {
                      return (
                <tr>
                    <td>{m.Obj_Id}</td>
                    <td>{m.Obj_name}</td>
                    <td>{m.materials}</td>
                    <td>{m.remarks}</td>
                    <td>{m.mass}</td>
                    <td>{m.density}</td>
                    <td>{m.kg}</td>
                </tr>
            )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default ListMaterials