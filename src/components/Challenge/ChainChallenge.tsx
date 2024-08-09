import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import { ChallengeItemLarge } from "./ChallengeItem";
import RightArrowIcon from "../../assets/icons/right-arrow";
import chain from "../../assets/images/challenge_chain.png";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPartnershipChallenges } from "../../apis/challenge";

const ChainChallenge = () => {
    const [page, setPage] = useState<number>(0);

    const { data: challengeData, isLoading } = useQuery({
        queryKey: ["getPartnershipChallenges", page],
        queryFn: () => getPartnershipChallenges(page, 2),
        enabled: true,
        placeholderData: keepPreviousData,
    });

    if (isLoading) return <div></div>;

    console.log(challengeData);

    return (
        <Container>
            <ContentHeader
                title="연계 챌린지"
                desc="정부나 전담기관 지원 챌린지, 기업 파트너십 챌린지에 도전해보세요!"
                imgSrc={chain}
            />
            <ChallengerContainer>
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    <LeftArrowIcon width={24} height={51} />
                </button>
                <ChallengeSlider>
                    {challengeData.data.content.map(
                        (challenge: any, index: number) => (
                            <ChallengeItemLarge
                                key={index}
                                title={challenge.title}
                                bubbleType={challenge.type}
                                heartCount={challenge.likeCount}
                                challengeTypes={challenge.categories}
                                description={challenge.description}
                                successRate={challenge.successRate}
                                participants={challenge.participantCount}
                                startDate={challenge.startDate}
                                endDate={challenge.endDate}
                                supportContent={challenge.supportContent}
                            />
                        )
                    )}
                </ChallengeSlider>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={challengeData.data.last}
                >
                    <RightArrowIcon width={24} height={51} />
                </button>
            </ChallengerContainer>
        </Container>
    );
};

export default ChainChallenge;

const ChallengerContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-between
        gap-[40px]
        mt-[-170px]
    `}
`;

const Container = styled.div`
    ${tw`
        mt-[50px] flex flex-col items-center relative w-full
    `}
`;

const ChallengeSlider = styled.div`
    ${tw`
    grid grid-cols-2  gap-[23px]
`}
`;
