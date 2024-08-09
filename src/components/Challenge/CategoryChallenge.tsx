import styled from "styled-components";
import tw from "twin.macro";
import ChallengeGrid from "./ChallengeGrid";
import ContentHeader from "../Common/ContentHeader";
import category from "../../assets/images/challenge_category.png";

const CategoryChallenge = () => {
    return (
        <Container>
            <ContentHeader
                title="카테고리별 모아보기"
                desc="관심있는 카테고리에 해당되는 챌린지를 찾아보세요!"
                imgSrc={category}
                mb="-26px"
            />
            <Keywords>
                <div>생활</div>
                <div>주거</div>
                <div>재정관리</div>
                <div>취업</div>
                <div>학습</div>
                <div>자기계발</div>
                <div>웰빙</div>
                <div>자격증</div>
            </Keywords>
            <CategoryContainer>
                <ChallengeGrid
                    type="category"
                    categories={[
                        "생활",
                        "주거",
                        "재정관리",
                        "취업",
                        "학습",
                        "자기계발",
                        "웰빙",
                        "자격증",
                    ]}
                />
            </CategoryContainer>
        </Container>
    );
};

export default CategoryChallenge;

const Container = styled.div`
    ${tw`
        flex flex-col items-start relative mt-[150px] mb-[220px]
    `}
`;

const Keywords = styled.div`
    ${tw`
        flex gap-[15px] w-[1280px] relative top-[-150px] left-16
    `}
    div {
        ${tw`
            h-[33px] border border-mainColor border-[2px] rounded-[37px] px-[12px]
            text-medium-20 font-medium text-mainColor flex items-center justify-center
            bg-[250, 248, 245, 0.3]
        `}
    }
`;

const CategoryContainer = styled.div`
    ${tw`
        mt-[-20px]
    `}
`;
