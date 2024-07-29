import styled from "styled-components";
import NavBar from "../components/NavBar";
import tw from "twin.macro";

import Footer from "../components/Common/Footer";
import ProfileHeader from "../components/MyPage/Header";
import UserBasicInfo from "../components/MyPage/UserBasicInfo";
import { useState } from "react";
import CanaryModal from "../components/MyPage/CanaryModal";

function MyPage() {
    const [isCanary, setIsCanary] = useState(true);

    return (
        <Wrapper>
            <NavBar />
            {/* 프로필 상단 */}
            <ProfileHeader />
            {/* 챌린지 달성 뱃지 */}
            {/* 후원 인증 히스토리 */}
            {/* 회원 기본 정보 */}
            <UserBasicInfo />
            {/* 회원 개인 정보*/}
            <Footer />
            {/* 자청년 인증 모달 */}
            {/* {isCanary && <CanaryModal />} */}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${tw`
            w-full flex flex-col justify-center items-center font-sans text-fontColor1
        `}
`;

export default MyPage;
