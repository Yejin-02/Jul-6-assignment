import styled, { CSSProperties } from "styled-components";

export interface iScrollItemBox {
  smallText: string;
  largeText: string;
  emoji: string;
}

const ScrollItem = ({ smallText, largeText, emoji }: iScrollItemBox) => {
  return (
    <ScrollItemBox>
      <TextsFrame>
        <SmallText>{smallText}</SmallText>
        <LargeText>{largeText}</LargeText>
      </TextsFrame>
      <EmojiFrame>{emoji}</EmojiFrame>
    </ScrollItemBox>
  );
};

const ScrollItemBox = styled.div`
  width: 95px;
  padding: 20px;
  margin-right: 10px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 20px;
`;

const TextsFrame = styled.div`
  text-align: start;
`;

const SmallText = styled.div`
  font-family: "pretendard-semibold";
  color: #8790a1;
  font-size: 13px;
  margin: 0;
`;

const LargeText = styled.div`
  font-family: "pretendard-bold";
  font-size: 20px;
`;

const EmojiFrame = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: "pretendard-bold";
  font-size: 50px;
`;

export default ScrollItem;
