import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Material } from '../types'
import Chart from "react-apexcharts";


const CompositionDetail = ({ compositions}:any) => {
  if (!compositions) return null
  const keys:Array<string> = Object.keys(compositions)
  const values: Array<number> = Object.values(compositions)
  const newValues = values.unshift(100 - values.reduce((prev, curr) => prev + Number(curr), 0));
  const newKeys = keys.unshift("Fe")
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Done</th>
          {keys.map(key => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>100%</th>
          {values.map(value => <th key={value}>{value}%</th>)}
         </tr>
      </tbody>
    </Table>
      <PieChart keys={ keys} values={values} />
    </div>
  )
}

const PieChart = ({ keys, values }: any) => {
  if (!(keys && values)) return null
  console.log(values)
  return (
    <div>
      <Chart
        series= {values}
        type="pie"
        width="380"
        options={{
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: keys,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }}
      />
    </div>
  )
}



const Detail = () => {
  const filterMaterial = useSelector(({ filterMaterial }: { filterMaterial: Material[] }) => filterMaterial)
  return (
    <div className='container mt-3'>
        {filterMaterial.map(m => {
          return (
            <><Table striped bordered hover>
              <thead >
                <tr>
                  <th>Obj_Id</th>
                  <th>Obj_name</th>
                  <th>materials</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{m.Obj_Id}</td>
                  <td>{m.Obj_name}</td>
                  <td>{m.elements}</td>
                </tr>
              </tbody>
            </Table>
            <header>Chemical Compositions(%) of {m.remarks}</header>
              <CompositionDetail compositions={m?.compositions} remarks={m?.remarks}  />
            </>
       )
        })}


    </div>
  )
}

export default Detail