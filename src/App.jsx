import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Material } from "./types";
import NavLogo from "./components/NavLogo";
import Search from "./components/Search";
import { materials } from "./data";
import { initializedMetarial } from "./reducers/materialReducer";
import Detail from "./components/Detail";
import LineChart from "./components/LineChart";

function App() {
  const dispatch = useDispatch();
const sortedArr = useSelector(({ sortedArrMaterial }) =>
  sortedArrMaterial.slice(0, 3)
);
  useEffect(() => {
    dispatch(initializedMetarial(materials));
  }, [dispatch]);
  
  return (
    <Container>
      <NavLogo />
      <Search />
      <Detail />
      <LineChart sortedArr={sortedArr} />
      {sortedArr.map((m) => {
        <div>taat</div>;
      })}
    </Container>
  );
}

export default App;
