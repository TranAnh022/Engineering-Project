import React,{useState} from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import PieChart from "./PieChart";

const CompositionDetail = ({ compositions, material, setMaterialPrice,materialPrice }) => {
  if (!compositions) return null;

   const nameCompositions = compositions.map(composition=> composition.name);
   const percentageCompositions = compositions.map(composition=> composition.percentage);
   percentageCompositions.unshift(
     100 - percentageCompositions.reduce((prev, curr) => prev + Number(curr), 0)
   );
   nameCompositions.unshift("Fe");
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Done</th>
            {nameCompositions.map((key, i) => (
              <th key={i}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>100%</th>
            {percentageCompositions.map((value, i) => (
              <th key={i}>{value}%</th>
            ))}
          </tr>
        </tbody>
      </Table>
      <div className="border ">
        <h4 className="m-5 text-center ">
          Price of the material{" "}
          <i className="text-danger">{material?.slice(0, 7)}</i> ={" "}
          {materialPrice?.toFixed(2)}€/kg
        </h4>
      </div>

      <PieChart
        keys={nameCompositions}
        values={percentageCompositions}
        otherValues={compositions.map((composition) =>
          Number(composition.percentage)
        )}
        other={compositions.map((composition) => composition.name)}
        setMaterialPrice={setMaterialPrice}
      />
    </div>
  );
};

const Detail = () => {
  const filterMaterial = useSelector(({ filterMaterial }) => filterMaterial);
  const [materialPrice, setMaterialPrice] = useState();
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
              compositions={m?.modules}
              material={m?.elements}
              materialPrice={materialPrice}
              setMaterialPrice={setMaterialPrice}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
