import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterMaterial } from "../reducers/filterReducer";
const Search = () => {
  const [material, setMaterial] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    dispatch(filterMaterial(material));
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
