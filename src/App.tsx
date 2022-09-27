import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Material } from './types';
import ListMaterials from './components/ListMaterials';
import NavLogo from './components/NavLogo';
import Search from './components/Search';
import ThumpNail from './components/ThumpNail';
import { materials } from './data';
import { initializedMetarial } from './reducers/materialReducer';
import Detail from './components/Detail';

function App() {
  const dispatch = useDispatch();
  const filterMaterial = useSelector(({ filterMaterial }: { filterMaterial: Material[] }) => filterMaterial)
  console.log(filterMaterial)
  useEffect(() => {
    dispatch(initializedMetarial(materials))
  },[dispatch])

  return (
    <Container>
      <NavLogo />
      <ThumpNail/>
      <Search />
      {filterMaterial.length ? <Detail/> : <ListMaterials />}
    </Container>
  );
}

export default App;
