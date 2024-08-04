import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import CrownIcon from "../../assets/icons/crown-icon";
import ContentHeader from "../Common/ContentHeader";
import Challenger from "./Challenger";

const challenger = [
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 1,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 2,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 1,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 2,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 3,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "40/41개 챌린지 성공!",
        categoryList: ["주거", "금융"],
        rank: 1,
    },
];

const scroll = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
`;

const BestChallenger = () => {
    return (
        <Container>
            <ContentHeader
                title="베스트 챌린저"
                desc="금주의 베스트 챌린저! 베스트 챌린저는 어떤 챌린지에 참여했을까요?"
            />
            <div className="challenger-list">
                {challenger.map((challenger, index) => (
                    <Challenger
                        key={index}
                        imgSrc={challenger.imgSrc}
                        name={challenger.name}
                        desc={challenger.desc}
                        categoryList={challenger.categoryList}
                        rank={challenger.rank}
                    />
                ))}
            </div>
        </Container>
    );
};

export default BestChallenger;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[45px] w-full items-center overflow-hidden
    `}
    .challenger-list {
        ${tw`
            w-full flex justify-between gap-[40px]
        `}
        animation: ${scroll} 20s linear infinite;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
    }

    .profile {
        ${tw`
            flex
            flex-col
            items-center
            gap-[7px]
        `}
    }
`;
