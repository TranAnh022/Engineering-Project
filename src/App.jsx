import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import NavLogo from "./components/NavLogo";
import Search from "./components/Search";
import axios from "axios";
import { initializedMetarial } from "./reducers/materialReducer";
import Detail from "./components/Detail";
import LineChart from "./components/LineChart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/material`)
      .then((response) => dispatch(initializedMetarial(response.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <Container>
      <NavLogo />
      <Search />
      <Detail />
      <LineChart />
    </Container>
  );
}

export default App;
