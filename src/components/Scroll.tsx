import styled from "styled-components";

import ScrollItem, { iScrollItemBox } from "./ScrollItem";

const scrollItem1: iScrollItemBox = {
  smallText: "내 자산",
  largeText: "두부자산\n취합해 보기",
  emoji: "💰",
};

const scrollItem2: iScrollItemBox = {
  smallText: "내 자산 아님",
  largeText: "두부자산\n취합해 보기",
  emoji: "💵",
};

const scrollItem3: iScrollItemBox = {
  smallText: "사실 네 자산임",
  largeText: "두부자산\n취합해 보기",
  emoji: "💸",
};

const Scroll = () => {
  return (
    <ScrollFrame>
      <ScrollItem
        smallText={scrollItem1.smallText}
        largeText={scrollItem1.largeText}
        emoji={scrollItem1.emoji}
      />
      <ScrollItem
        smallText={scrollItem2.smallText}
        largeText={scrollItem2.largeText}
        emoji={scrollItem2.emoji}
      />
      <ScrollItem
        smallText={scrollItem3.smallText}
        largeText={scrollItem3.largeText}
        emoji={scrollItem3.emoji}
      />
    </ScrollFrame>
  );
};

const ScrollFrame = styled.div`
  height: 175px;
  width: 100%;
  display: flex;
  overflow: auto;
`;

export default Scroll;
