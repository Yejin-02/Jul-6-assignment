import styled, { CSSProperties } from "styled-components";

const TofuBank = () => {
  return <TofuBankFrame></TofuBankFrame>;
};

const TofuBankFrame = styled.div`
  width: 368px;
  height: 302px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: white;
`;

export default TofuBank;
