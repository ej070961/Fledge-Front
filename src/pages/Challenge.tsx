import styled from "styled-components";
import SearchBar from "../components/Challenge/SearchBar";
import DefaultLayout from "../components/Common/DefaultLayout";
import PageHeader from "../components/Common/PageHeader";
import challenge from "../assets/images/challenge_banner.png";
import BestChallenger from "../components/Challenge/BestChallenger";

const Challenge = () => {
    return (
        <DefaultLayout>
            <SearchBar />
            <PageHeader
                title="챌린지"
                desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
                imgSrc={challenge}
            />
            <BestChallenger />
        </DefaultLayout>
    );
};

export default Challenge;
