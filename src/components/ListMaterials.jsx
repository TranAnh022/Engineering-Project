import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Material } from "../types";

const ListMaterials = () => {
  const materialDetail = useSelector(
    ({ material }) => material
  );
  const id = JSON.parse(localStorage.getItem("material"))[0].id;

console.log(id);
  return (
    <div className="container mt-3">
      {/* <Table striped bordered hover>
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
          {materialDetail.slice(0, 5).map((m) => {
            return (
              <tr key={m.Obj_Id}>
                <td>{m.Obj_Id}</td>
                <td>{m.Obj_name}</td>
                <td>{m.elements}</td>
                <td>{m.remarks}</td>
                <td>{m.mass}</td>
                <td>{m.density}</td>
                <td>{m.kg}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </div>
  );
};

export default ListMaterials;
