import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ChallengeGrid from "./ChallengeGrid";

type ChallengeListProps = {
    title: string;
    desc: string;
    imgSrc: string;
};

const ChallengeList = ({ title, desc, imgSrc }: ChallengeListProps) => {
    return (
        <Container>
            <ContentHeader title={title} desc={desc} imgSrc={imgSrc} />
            <ChallengeGrid />
        </Container>
    );
};

export default ChallengeList;

const Container = styled.div`
    ${tw`
        mt-[130px] flex flex-col items-center relative w-full
    `}
`;
