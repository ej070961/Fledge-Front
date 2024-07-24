import React from "react";
import * as S from "../styles/sponsor.style";
import Sponsorship from "../assets/images/sponsership.png";
import Slider from "../components/Sponsor/Slider";
import NavBar from "../components/NavBar";
function Sponsor() {
  return (
    <S.Wrapper>
      <NavBar />
      <S.Header>
        <div className="text-wrapper">
          <span className="title-text">후원하기</span>
          <span className="description-text">
            자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해
            청년들의 지속 가능한 자립을 응원해주세요.
          </span>
        </div>
        <div className="image-background">
          <img src={Sponsorship} alt="후원이미지" />
        </div>
      </S.Header>
      <S.ContentWrapper>
        <span className="main-text">기한 임박 후원글</span>
        <span className="sub-text">
          곧 후원 기간이 끝나는 후원글이에요! 청년들에게 도움의 손길을
          건네주세요.
        </span>
      </S.ContentWrapper>
      <Slider />
      <S.ContentWrapper>
        <span className="main-text">후원글 목록</span>
        <span className="sub-text">
          당신의 작은 도움이 자립준비청년들의 큰 가능성을 열어갑니다.
        </span>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default Sponsor;
