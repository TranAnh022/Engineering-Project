import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Material } from "../types";


import PieChart from "./PieChart";

const CompositionDetail = ({ compositions }: any) => {
  if (!compositions) return null;
  const keys: Array<string> = Object.keys(compositions);
  const values: Array<number> = Object.values(compositions);
  values.unshift(100 - values.reduce((prev, curr) => prev + Number(curr), 0));
  keys.unshift("Fe");
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Done</th>
            {keys.map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>100%</th>
            {values.map((value, i) => (
              <th key={i}>{value}%</th>
            ))}
          </tr>
        </tbody>
      </Table>
      <PieChart keys={keys} values={values} />
    </div>
  );
};

const Detail = () => {
  const filterMaterial = useSelector(({ filterMaterial }: { filterMaterial: Material[] }) => filterMaterial);
  return (
    <div className="container mt-3">
      {filterMaterial.map((m) => {
        return (
          <div key={m.Obj_Id}>
            <Table striped bordered hover>
              <thead>
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
            <CompositionDetail
              compositions={m?.compositions}
              remarks={m?.remarks}
            />
          </div>
        );
      })}

    </div>
  );
};

export default Detail;
