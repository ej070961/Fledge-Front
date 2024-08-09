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

const ChallengeDetail = () => {
    const [likeCount, setLikeCount] = useState(10);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleLike = () => {
        setIsClicked(!isClicked);
        isClicked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    };

    const { challengeId } = useParams();
    return (
        <DefaultLayout>
            <Container>
                <Header
                    category="자기계발"
                    title="1주 1권 독서하기"
                    desc="한 달 동안 매주 한 권씩 독서 후, 독후감을 작성합니다."
                    likeCount={likeCount}
                    isClicked={isClicked}
                    onClick={handleLike}
                />
                <Progress
                    totalParticipants={20}
                    successParticipants={10}
                    successRate={50}
                />
                <Challengers />
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
