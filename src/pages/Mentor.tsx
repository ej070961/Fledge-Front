import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Common/Footer";
import PageHeader from "../components/Common/PageHeader";
import Mentoring from "../assets/images/mentoring.png";
import MentorApply from "../components/Mentor/MentorApply";
import QuestionMarquee from "../components/Mentor/QuestionMarquee";
function Mentor() {
  return (
    <MentorContainer>
      <NavBar />
      <PageHeader
        title="멘토링"
        desc="누구나 멘토가 되어 청년들의 궁금증을 해결해줄 수 있어요! 멘토와의 익명 채팅을 통해 편하게 궁금증을 해결해요."
        imgSrc={Mentoring}
      />
      <QuestionMarquee />
      <MentorApply />
      <Footer />
    </MentorContainer>
  );
}

export default Mentor;

const MentorContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        font-sans
        bg-background
    `}
`;
