import styled, { CSSProperties } from "styled-components";

export interface iAccount {
  name: string;
  balance: number;
  logoColor: string;
  currency: string;
}

const Account = ({ name, balance, logoColor, currency }: iAccount) => {
  return (
    <AccountFrame>
      <LogoAndDetails>
        <AccountLogo style={{ backgroundColor: logoColor }}>
          {currency}
        </AccountLogo>
        <AccountDetails>
          <AccountName>{name}</AccountName>
          <AccountBalance>{balance.toLocaleString()}원</AccountBalance>
        </AccountDetails>
      </LogoAndDetails>
      <SendMoneyButton>송금</SendMoneyButton>
    </AccountFrame>
  );
};

const AccountFrame = styled.div`
  width: 321px;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (max-width: 400px) {
    width: 99%;
  }
`;

const LogoAndDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AccountLogo = styled.div`
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

const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 41px;
`;

const AccountName = styled.p`
  font-family: "pretendard-semibold";
  font-size: 13px;
  color: #8790a1;
  margin: 0;
  margin-bottom: 1px;
  height: 16px;
`;

const AccountBalance = styled.p`
  font-family: "pretendard-bold";
  font-size: 20px;
  margin: 0;
  text-align: start;
`;

const SendMoneyButton = styled.button`
  width: 53px;
  height: 30px;
  border-radius: 5px;
  color: #8790a1;
  font-family: "pretendard-semibold";
  font-size: 13px;
  background-color: #f2f4f6;
  padding: 0px;
  margin: 0px;
`;

export default Account;
