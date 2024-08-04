import SearchBar from "../components/Challenge/SearchBar";
import DefaultLayout from "../components/Common/DefaultLayout";
import PageHeader from "../components/Common/PageHeader";
import challenge from "../assets/images/challenge_banner.png";
import HotChallenge from "../components/Challenge/HotChallenge";
import BestChallenger from "../components/Challenge/BestChallenger";
import ChainChallenge from "../components/Challenge/ChainChallenge";

const Challenge = () => {
    return (
        <DefaultLayout>
            {/* 검색 */}
            <SearchBar />

            {/* 챌린지 페이지 헤더 */}
            <PageHeader
                title="챌린지"
                desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
                imgSrc={challenge}
            />

            {/* 베스트 챌린저 */}
            <BestChallenger />

            {/* HOT한 챌린지 */}
            <HotChallenge />

            {/* 연계 챌린지 */}
            <ChainChallenge />

            {/* 신규 챌린지 */}
            {/* <NewChallenge /> */}

            {/* 카테고리별 모아보기 */}
            {/* <CategoryChallenge /> */}
        </DefaultLayout>
    );
};

export default Challenge;
