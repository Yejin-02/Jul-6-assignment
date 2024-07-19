import styled, { CSSProperties } from "styled-components";

const TopNav = () => {
  return (
    <TopNavFrame>
      <TopNavLogoFrame>Logo</TopNavLogoFrame>
      <TopNavButtonsFrame>
        <button>button1</button>
        <button>button2</button>
      </TopNavButtonsFrame>
    </TopNavFrame>
  );
};

const TopNavFrame = styled.div`
  width: 368px;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

const TopNavLogoFrame = styled.div`
  width: 86px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const TopNavButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

export default TopNav;
