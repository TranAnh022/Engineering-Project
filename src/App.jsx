import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import NavLogo from "./components/NavLogo";
import Search from "./components/Search";
import axios from "axios";
import { initializedMetarial } from "./reducers/materialReducer";
import Detail from "./components/Detail";
import LineChart from "./components/LineChart";
import ListMaterials from "./components/ListMaterials";

function App() {
  const dispatch = useDispatch();
  const sortedArr = useSelector(({ sortedArrMaterial }) =>
    sortedArrMaterial.slice(0, 3)
  );
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/materials/")
      .then((response) => dispatch(initializedMetarial(response.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <Container>
      <NavLogo />
      <Search />
      <Detail />
      <LineChart sortedArr={sortedArr} />
      <ListMaterials />
    </Container>
  );
}

export default App;
