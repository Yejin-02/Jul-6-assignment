import styled, { CSSProperties } from "styled-components";

const Scroll = () => {
  return (
    <ScrollFrame>
      <ScrollItem></ScrollItem>
      <ScrollItem></ScrollItem>
      <ScrollItem></ScrollItem>
    </ScrollFrame>
  );
};

const ScrollFrame = styled.div`
  height: 168px;
  width: 368px;
  display: flex;
`;

const ScrollItem = styled.div`
  width: 135px;
  margin-right: 10px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 20px;
`;

export default Scroll;
