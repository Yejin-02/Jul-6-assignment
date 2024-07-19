import "./App.css";

import styled, { CSSProperties } from "styled-components";

import Banner from "./components/Banner";
import Scroll from "./components/Scroll";
import TofuBank from "./components/TofuBank";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Background>
      <TopNav />
      <Banner />
      <TofuBank />
      <Scroll />
    </Background>
  );
}

const Background = styled.div`
  background-color: #f2f4f6;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
