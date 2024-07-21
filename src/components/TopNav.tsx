import styled, { CSSProperties } from "styled-components";

import cloudImg from "../assets/TofuCloud.svg";
import logoImg from "../assets/TofuLogo.svg";
import pinImg from "../assets/TofuPin.svg";

const TopNav = () => {
  return (
    <TopNavFrame>
      <TopNavLogoFrame>
        <img src={logoImg} />
      </TopNavLogoFrame>
      <TopNavButtonsFrame>
        <CloudImg src={cloudImg} />
        <img src={pinImg} />
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
  @media (max-width: 400px) {
    width: calc(100vw - 32px);
  }
`;

const TopNavLogoFrame = styled.div`
  width: 86px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloudImg = styled.img`
  margin-right: 20px;
`;

export default TopNav;
