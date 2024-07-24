import NavBar from "../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Main/Banner";
import TagLine from "../components/Main/TagLine";
import ContentHeader from "../components/Main/ContentHeader";

function Main() {
    return (
        <MainContainer>
            <NavBar />
            <TagLine />
            <Banner />
            <ContentsContainer>
                <Contents>
                    <ContentHeader
                        title="후원하기"
                        desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
                    />
                </Contents>
                <Contents>
                    <ContentHeader
                        title="챌린지"
                        desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
                    />
                </Contents>
                <Contents>
                    <ContentHeader
                        title="멘토링"
                        desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
                    />
                </Contents>
                <Contents>
                    <ContentHeader
                        title="정보공유"
                        desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
                    />
                </Contents>
            </ContentsContainer>
        </MainContainer>
    );
}

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
    `}
`;

export default Main;
