import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";

const InformationSection = () => {
    return (
        <Contents>
            <ContentHeader
                title="정보공유"
                desc="똑똑하게 자립 준비하기! 도움되는 정보를 한 눈에 확인해보세요."
            />
            <Spacer />
        </Contents>
    );
};

export default InformationSection;

const Contents = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        relative
        mt-[-130px]
    `}
`;

const Spacer = styled.div`
    ${tw`
        bg-[#f5f5f5]
        h-[473px]
        mt-[49px]
    `}
`;
