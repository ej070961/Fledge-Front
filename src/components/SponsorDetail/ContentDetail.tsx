import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NoImg from "../../assets/images/no_img.png";
function ContentDetail() {
  return (
    <Container>
      <RowBox className="justify-between items-center">
        <span className="d-day">D-99</span>
        <ColBox className="justify-end">
          <label className="medium-20">후원기간</label>
          <span className="medium-20">2024년 01월 01일까지</span>
        </ColBox>
      </RowBox>
      <RowBox>
        <span className="title">제목</span>
      </RowBox>
      <ImageContainer>
        <img src={NoImg} alt="이미지 없음" />
        <img src={NoImg} alt="이미지 없음" />
      </ImageContainer>
      <RowBox>
        <ColBox className="w-1/2">
          <RowBox className="my-2">
            <label className="medium-20">필요 물품</label>
            <span className="content">필요 물품 내용</span>
          </RowBox>
          <RowBox className="my-2">
            <label className="medium-20">구매 링크</label>
            <span className="content">구매 링크 내용</span>
          </RowBox>
          <RowBox className="my-2">
            <label className="medium-20">물품 금액</label>
            <span className="content">물품 금액 내용</span>
          </RowBox>
        </ColBox>
        <RowBox>
          <label className="medium-20">세부 내용</label>
          <span className="content">세부내용</span>
        </RowBox>
      </RowBox>
    </Container>
  );
}

export default ContentDetail;

const Container = styled.div`
  ${tw`w-full font-sans mt-24`}

  .d-day {
    ${tw`font-bold text-bold-64 text-subColor`}
  }
  .medium-20 {
    ${tw`font-medium text-fontColor3 text-medium-20`}
  }
  .title {
    ${tw`font-bold text-bold-48 text-fontColor1`}
  }
  .content {
    ${tw`ml-7 font-bold text-bold-20 text-fontColor1`}
  }
`;

const RowBox = styled.div`
  ${tw`flex flex-row`}
`;

const ColBox = styled.div`
  ${tw`flex flex-col justify-between`}
`;

const ImageContainer = styled.div`
  ${tw`flex flex-row items-center w-full h-[415px] my-10`}

  img {
    ${tw`w-[301px] h-[415px] [border-radius: 16px] mr-5`}
  }
`;
