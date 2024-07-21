import styled, { CSSProperties } from "styled-components";

import lineImg from "../assets/line.svg";
import arrowImg from "../assets/TofuBankArrow.svg";
import Account, { iAccount } from "./Account";
import Advertisement, { iAdvertisement } from "./Advertisement";

const accountData1: iAccount = {
  name: "두부머니",
  balance: 2000000,
  logoColor: "#ff6161",
  currency: "₩",
};

const accountData2: iAccount = {
  name: "두부머니",
  balance: 800,
  logoColor: "#3965d7",
  currency: "$",
};

const adData1: iAdvertisement = {
  smallText: "공인중개사 합격은",
  largeText: "에듀윌",
  logoColor: "#f8c440",
  logoSymbol: "?",
};

const TofuBank = () => {
  return (
    <TofuBankFrame>
      <TofuBankTitleBox>
        <TofuBankTitle>두부뱅크</TofuBankTitle>
        <img src={arrowImg} />
      </TofuBankTitleBox>
      <Account
        name={accountData1.name}
        balance={accountData1.balance}
        logoColor={accountData1.logoColor}
        currency={accountData1.currency}
      />
      <Account
        name={accountData2.name}
        balance={accountData2.balance}
        logoColor={accountData2.logoColor}
        currency={accountData2.currency}
      />
      <LineFrame>
        <img src={lineImg} />
      </LineFrame>
      <Advertisement
        smallText={adData1.smallText}
        largeText={adData1.largeText}
        logoColor={adData1.logoColor}
        logoSymbol={adData1.logoSymbol}
      />
    </TofuBankFrame>
  );
};

const TofuBankFrame = styled.div`
  width: 324px;
  height: 256px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  background-color: white;
`;

const TofuBankTitleBox = styled.div`
  height: 29px;
  width: 321px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TofuBankTitle = styled.div`
  font-family: "pretendard-bold";
  font-size: 24px;
`;

const LineFrame = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default TofuBank;
