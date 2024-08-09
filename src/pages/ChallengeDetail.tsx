import styled from "styled-components";
import DefaultLayout from "../components/Common/DefaultLayout";
import tw from "twin.macro";
import { useState } from "react";
import Header from "../components/ChallengeDetail/Header";
import Progress from "../components/ChallengeDetail/Progress";
import ContentHeader from "../components/Common/ContentHeader";
import Challengers from "../components/ChallengeDetail/Challengers";
import RecommendedChallenges from "../components/ChallengeDetail/RecommendedChallenges";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Common/Button";
import { useQuery } from "@tanstack/react-query";
import { getChallengeDetail } from "../apis/challenge";

const ChallengeDetail = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const { challengeId } = useParams();

    const { data: ChallengeDetailData, isLoading } = useQuery({
        queryKey: ["getChallengeDetail", challengeId],
        queryFn: () => getChallengeDetail(challengeId!),
    });

    if (isLoading) return <div></div>;

    console.log(ChallengeDetailData);

    return (
        <DefaultLayout>
            <Container>
                <Header
                    categories={ChallengeDetailData.data.categories}
                    title={ChallengeDetailData.data.title}
                    desc={ChallengeDetailData.data.description}
                    likeCount={ChallengeDetailData.data.likeCount}
                />
                <Progress
                    totalParticipants={
                        ChallengeDetailData.data.participationCount
                    }
                    successParticipants={ChallengeDetailData.data.successCount}
                    successRate={ChallengeDetailData.data.successRate * 100}
                />
                <Challengers challengeId={challengeId} />
                <OtherChallenge>
                    <ContentHeader
                        title="다른 챌린지 둘러보기"
                        desc="이런 챌린지들은 어떠세요? 다양한 챌린지를 확인해보세요!"
                    />
                    <RecommendedChallenges challengeId={challengeId} />
                    <Button
                        title="챌린지 페이지로 돌아가기"
                        mainColor
                        onClick={() => {
                            navigate("/challenge");
                            window.scrollTo({ top: 0 });
                        }}
                    />
                </OtherChallenge>
            </Container>
        </DefaultLayout>
    );
};

export default ChallengeDetail;

const OtherChallenge = styled.div`
    ${tw`
        flex flex-col mt-[175px] gap-[129px] w-[1280px] items-center mb-[300px]
    `}
`;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[113px] mt-[45px]
    `}
`;
