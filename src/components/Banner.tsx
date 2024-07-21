import styled, { CSSProperties } from "styled-components";

import bannerImg from "../assets/bannerBackground.png";

const Banner = () => {
  return <BannerImg>새로운 두부를 만나보세요.</BannerImg>;
};

const BannerImg = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  height: 150px;
  width: 368px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  @media (max-width: 400px) {
    width: calc(100vw - 32px);
  }
`;

export default Banner;
