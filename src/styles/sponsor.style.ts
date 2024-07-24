import tw from "twin.macro";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${tw`max-w-[1412px] flex flex-col m-auto items-center`}
`;

export const Header = styled.div`
  ${tw`flex flex-row mt-20 h-[528px] w-[1280px] m-auto justify-between`}

  .text-wrapper {
    ${tw`flex flex-col w-1/2 mt-36`}
    .title-text {
      ${tw`text-bold-48 font-sans text-fontColor1 font-bold mb-5`}
    }
    .description-text {
      ${tw`text-medium-20 text-fontColor3 font-sans w-[498px] font-medium `}
    }
  }
  .image-background {
    width: 50%;
    height: 528px;
    background: radial-gradient(50% 50% at 50% 50%, #ffd7c0 0%, #faf8f5 100%);
  }
`;

export const ContentWrapper = styled.div`
  ${tw`flex flex-col mt-20 w-[1280px] m-auto`}
  .main-text {
    ${tw`text-bold-36 font-sans font-bold text-fontColor1`}
  }
  .sub-text {
    ${tw`text-medium-20 font-sans font-medium text-fontColor3 mt-0.5`}
  }
`;
