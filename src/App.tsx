import "./App.css";

import styled, { CSSProperties } from "styled-components";

import Banner from "./components/Banner";
import Scroll from "./components/Scroll";
import TofuBank from "./components/TofuBank";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Background>
      <Wrapper>
        <TopNav />
        <Banner />
        <TofuBank />
        <Scroll />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: #f2f4f6;

  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: auto;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 368px;
  @media (max-width: 400px) {
    width: 100vw;
    padding-left: 32px;
    padding-right: 32px;
    box-sizing: border-box;
  }
`;

export default App;
