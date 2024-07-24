import styled from "styled-components";
import tw from "twin.macro";
import Medal from "../../assets/images/medal.png";
import ContentHeader from "../Common/ContentHeader";

const ChallengeSection = () => {
    return (
        <Contents>
            <ContentHeader
                title="챌린지"
                desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
            />
            <ChallengeSpace />
            <MedalImage src={Medal} alt="medal" />
        </Contents>
    );
};

export default ChallengeSection;

const Contents = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        relative
    `}
`;

const ChallengeSpace = styled.div`
    ${tw`
        h-[610px]
        w-[1280px]
        bg-[#f5f5f5]
        mt-[56px]
    `}
`;

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
