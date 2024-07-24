import NavBar from "../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Main/Banner";
import TagLine from "../components/Main/TagLine";
import ContentHeader from "../components/Common/ContentHeader";
import Medal from "../assets/images/medal.png";
import MentoringSection from "../components/Main/MentoringSection";
import DonationSection from "../components/Main/DonationSection";
import Footer from "../components/Common/Footer";

function Main() {
    return (
        <MainContainer>
            <NavBar />
            <TagLine />
            <Banner />
            <ContentsContainer>
                <DonationSection />
                <Contents>
                    <ContentHeader
                        title="챌린지"
                        desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
                    />
                    <MedalImage src={Medal} alt="medal" />
                </Contents>
                <MentoringSection />
                <Contents>
                    <ContentHeader
                        title="정보공유"
                        desc="똑똑하게 자립 준비하기! 도움되는 정보를 한 눈에 확인해보세요."
                    />
                </Contents>
            </ContentsContainer>
            <Footer />
        </MainContainer>
    );
}

const MedalImage = styled.img`
    ${tw`
        w-[336px]
        h-[427px]
        absolute
        z-[-1]
        top-[-200px]
        right-[40px]
    `}
`;

const MainContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        font-sans
    `}
`;

const ContentsContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-[1280px]
        mt-[142px]
        gap-[288px]
    `}
`;

const Contents = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        relative
    `}
`;

export default Main;
