import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import { ChallengeItem } from "./ChallengeItem";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { getChallenges } from "../../apis/challenge";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type ChallengeGridProps = {
    type: string;
    categories?: string[];
};

const ChallengeGrid = ({ type, categories }: ChallengeGridProps) => {
    const [page, setPage] = useState<number>(0);
    const {
        data: challengeData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["getChallengeData", page],
        queryFn: () => getChallenges(page, 8, type, categories),
        enabled: true,
        placeholderData: keepPreviousData,
    });

    if (isLoading) return <div></div>;

    return (
        <ChallengerContainer>
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                <LeftArrowIcon width={24} height={51} />
            </button>
            <ChallengeSlider>
                {challengeData.data.content.map(
                    (challenge: any, index: number) => (
                        <ChallengeItem
                            key={index}
                            title={challenge.title}
                            bubbleType={type.toString()}
                            heartCount={challenge.likeCount}
                            challengeTypes={challenge.categories}
                            description={challenge.description}
                            successRate={challenge.successRate}
                            participants={challenge.participantCount}
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
    );
};
export default ChallengeGrid;

const ChallengerContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-between
        gap-[40px]
        mt-[-80px]
    `}
`;

const ChallengeSlider = styled.div`
    ${tw`
    grid grid-cols-4 grid-rows-2 gap-[23px]
`}
`;
