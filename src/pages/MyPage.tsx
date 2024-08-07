import styled from "styled-components";
import NavBar from "../components/NavBar";
import tw from "twin.macro";

import Footer from "../components/Common/Footer";
import ProfileHeader from "../components/MyPage/Header";
import UserBasicInfo from "../components/MyPage/UserBasicInfo";
import { useState } from "react";
import BadgeBoard from "../components/MyPage/BadgeBoard";
import Slider from "../components/Sponsor/Slider";
import CanaryAuth from "../components/MyPage/CanaryAuth";
import Input from "../components/Common/Input";
import DropDown from "../components/Common/DropDown";
import Button from "../components/Common/Button";
import PersonalInfo from "../components/MyPage/PersonalInfo";

function MyPage() {
  const [isCanary, setIsCanary] = useState(true);

  return (
    <Wrapper>
      <NavBar />

      {/* 프로필 상단 */}
      <ProfileHeader />

      {/* 챌린지 달성 뱃지 */}
      <BadgeBoard />

      {/* 후원 인증 히스토리 */}
      <SponsorWrapper>
        <Header>
          <span className="title-text">후원 인증 히스토리</span>
          <span className="sub-text">
            후원을 받고 인증했던 히스토리를 다시 볼 수 있어요.
          </span>
        </Header>
        <Slider menu="my" />
      </SponsorWrapper>

      {/* 회원 기본 정보 */}
      <UserBasicInfo />

      {/* 자립준비청년 인증 */}
      <CanaryAuth />

      {/* 회원 개인 정보*/}
      <PersonalInfo />

      {/* 자청년 인증 모달 */}
      {/* {isCanary && <CanaryModal />} */}
      <Footer />
    </Wrapper>
  );
}

const SponsorWrapper = styled.div`
  ${tw`
        w-[1280px] flex flex-col items-center mb-[280px]
    `}
`;

const Wrapper = styled.div`
  ${tw`
            w-full flex flex-col justify-center items-center font-sans text-fontColor1
        `}
`;

const Header = styled.div`
  ${tw`
            w-[1280px] flex flex-col items-start gap-[3px]
        `}
  .title-text {
    ${tw`
                text-bold-36 font-bold text-fontColor1
            `}
  }
  .sub-text {
    ${tw`
                text-medium-20 font-medium text-fontColor3
            `}
  }
`;

export default MyPage;
