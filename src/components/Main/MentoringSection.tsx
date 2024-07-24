import styled from "styled-components";
import tw from "twin.macro";
import BirdTwo from "../../assets/images/bird-two.png";
import Button from "../../components/Common/Button";
import ContentHeader from "../Common/ContentHeader";

const MentoringSection = () => {
    return (
        <Contents>
            <ContentHeader
                title="멘토링"
                desc="누구나 멘토가 되어 청년들의 궁금증을 해결해줄 수 있어요! 멘토와의 익명 채팅을 통해 편하게 궁금증을 해결해요."
            />
            <MentoringContainer>
                <MentorContainer>
                    <MentorText>
                        <Title>멘토가 되어주세요!</Title>
                        <Desc>
                            많은 자립준비청년들이 <br />
                            당신의 도움을 기다리고 있습니다.
                        </Desc>
                    </MentorText>
                    <Button title="멘토 신청하기" />
                </MentorContainer>
                <BirdTwoImage src={BirdTwo} alt="bird-two" />
            </MentoringContainer>
        </Contents>
    );
};

const Contents = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        relative
    `}
`;

const MentorContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-between
        items-start
        gap-[20px]
        h-[332px]
    `}
`;

const BirdTwoImage = styled.img`
    ${tw`
        ml-[-200px]
        relative
        left-[90px]
        top-[-20px]
    `}
`;

const MentoringContainer = styled.div`
    ${tw`
        flex
        justify-between
        items-center
        w-full
        relative
    `}
`;

const Title = styled.span`
    ${tw`
        text-bold-36
        text-fontColor1
    `}
`;

const Desc = styled.span`
    ${tw`
        text-bold-20
        text-fontColor1
    `}
`;

const MentorText = styled.div`
    ${tw`
    flex
    flex-col
    gap-[17px]
`}
`;

export default MentoringSection;
