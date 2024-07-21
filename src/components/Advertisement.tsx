import styled, { CSSProperties } from "styled-components";

export interface iAdvertisement {
  smallText: string;
  largeText: string;
  logoColor: string;
  logoSymbol: string;
}

const Advertisement = ({
  smallText,
  largeText,
  logoColor,
  logoSymbol,
}: iAdvertisement) => {
  return (
    <AdFrame>
      <AdLogo style={{ backgroundColor: logoColor }}>{logoSymbol}</AdLogo>
      <AdTexts>
        <AdSmallText>{smallText}</AdSmallText>
        <AdLargeText>{largeText}</AdLargeText>
      </AdTexts>
    </AdFrame>
  );
};

const AdFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AdLogo = styled.div`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  color: white;
  font-family: "pretendard-bold";
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

const AdTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 41px;
`;

const AdSmallText = styled.p`
  font-family: "pretendard-semibold";
  font-size: 13px;
  color: #8790a1;
  margin: 0;
  margin-bottom: 1px;
  height: 16px;
`;

const AdLargeText = styled.p`
  font-family: "pretendard-bold";
  font-size: 20px;
  margin: 0;
`;

export default Advertisement;
