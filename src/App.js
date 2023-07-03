import styled from 'styled-components';
import { useEffect, useState } from 'react';
import NavBar from './container';
import Feeds from './components/Feeds';
import Footer from './components/Footer';


function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Container >
        <Feeds  field={"international"} />
        <Feeds  field={"national"} />
        <Feeds  field={"science"} />
        <Feeds  field={"sports"} />
        <Feeds  field={"entertainment"} />
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
