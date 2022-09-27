import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import Detail from './components/Detail';
import ListMaterials from './components/ListMaterials';
import NavLogo from './components/NavLogo';
import Search from './components/Search';
import ThumpNail from './components/ThumpNail';
import { materials } from './data';
import { initializedMetarial } from './reducers/materialReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializedMetarial(materials))
  },[dispatch])

  return (
    <Container>
      <NavLogo />
      <ThumpNail/>
      <Search />
      <ListMaterials />
    </Container>
  );
}

export default App;
