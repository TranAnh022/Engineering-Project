import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Material } from '../types'
import Chart from "react-apexcharts";
import { priceComposition } from '../data/price';

const CompositionDetail = ({ compositions}:any) => {
  if (!compositions) return null
  const keys:Array<string> = Object.keys(compositions)
  const values: Array<number> = Object.values(compositions)
  values.unshift(100 - values.reduce((prev, curr) => prev + Number(curr), 0));
  keys.unshift("Fe")
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Done</th>
          {keys.map(key => <th>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>100%</th>
          {values.map(value => <th>{value}%</th>)}
         </tr>
      </tbody>
    </Table>
      <PieChart keys={keys} values={values} compositions={compositions} />
    </div>
  )
}

const PieChart = ({ keys, values,compositions }: any) => {
  if (!(keys && values)) return null
  const sortPrices = () => {
    let result = []
    for (let i = 0; i <= Object.keys(priceComposition).length; i++) {
      for (let j = 0; j <= keys.length; j++){
        if ((Object.keys(priceComposition[j])[0]) === keys[i]) {
          const price = ((Object.values(priceComposition[j])[0] *values[i])/100)
          result.push(price)

        }
      }
    }
    return result
  }
  return (
    <div className='container d-flex justify-content-between'>
      <div>
        <h2> Chemical Position by %</h2>
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
      <div>
        <h2 className='d-flex justify-content-center'>Prices by %</h2>
      <Chart
        series= {sortPrices()}
        type="pie"
        width="380"
        options={{
          colors:["#F3B415",
          "#F27036",
          "#663F59",
          "#6A6E94",
          "#4E88B4",
          "#00A7C6",
          "#18D8D8",
          "#A9D794",
          "#46AF78",
          "#A93F55",
          "#8C5E58",
          "#2176FF",
          "#33A1FD",
          "#7A918D",
          "#BAFF29"],
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


