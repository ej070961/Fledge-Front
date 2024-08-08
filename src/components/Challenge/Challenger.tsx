import styled from "styled-components";
import tw from "twin.macro";
import CrownIcon from "../../assets/icons/crown-icon";

type ChallengerProps = {
    imgSrc: string;
    name: string;
    desc: string;
    categoryList: string[];
    rank: number;
};

// 챌린지 카테고리 매핑
type CategoryMap = {
    [key: string]: string;
    LIFE: "생활";
    MIND_CONTROL: "마인드컨트롤";
    SELF_DEVELOPMENT: "자기계발";
    FINANCIAL_MANAGEMENT: "재정관리";
    CERTIFICATION: "자격증";
    EXERCISE: "운동";
};

const categoryMap: CategoryMap = {
    LIFE: "생활",
    MIND_CONTROL: "마인드컨트롤",
    SELF_DEVELOPMENT: "자기계발",
    FINANCIAL_MANAGEMENT: "재정관리",
    CERTIFICATION: "자격증",
    EXERCISE: "운동",
};

const Challenger = ({
    imgSrc = "https://via.placeholder.com/150",
    name,
    desc,
    categoryList,
    rank,
}: ChallengerProps) => {
    return (
        <Container>
            <CrownIcon type={rank} />
            <div className="profile">
                <img src={imgSrc} alt="challenger" width={137} height={137} />
                <div className="information">
                    <p className="name">{name}</p>
                    <p className="desc">{desc}</p>
                </div>
                <div className="category-list">
                    {categoryList.map((item, index) => (
                        <div key={index} className="category">
                            {categoryMap[item]}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Challenger;

const Container = styled.div`
    ${tw`
            flex
            items-center
            justify-center
            flex-col
            gap-[12px]
        `}
    img {
        ${tw`
                rounded-full
            `}
    }
    .category-list {
        ${tw`
                gap-[6px] flex
            `}
        .category {
            ${tw`
                    px-[7px] bg-mainColor rounded-[28px]
                    text-white text-medium-12 font-medium
                `}
        }
    }
    .information {
        ${tw`
                flex flex-col gap-[1px] items-center gap-[5px]
            `}
        .name {
            ${tw`
                    text-bold-24 font-bold text-fontColor1
                `}
        }
        .desc {
            ${tw`
                    text-medium-15 font-medium text-fontColor3
                `}
        }
    }
`;
