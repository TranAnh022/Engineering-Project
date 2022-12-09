import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterMaterial } from "../reducers/filterReducer";
import { useSelector } from "react-redux";
import { Material } from "../types";

const Search = () => {
  const [material, setMaterial] = useState<string>("");
  const dispatch = useDispatch();
  const materialDetail = useSelector(
    ({ material }: { material: Material[] }) => material
  );

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    dispatch(filterMaterial([material,materialDetail]));
    setMaterial("");
  };
  return (
    <div className="container">
      <Form className="d-flex gap-3 w-50" onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Type the material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <Button variant="outline-secondary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
