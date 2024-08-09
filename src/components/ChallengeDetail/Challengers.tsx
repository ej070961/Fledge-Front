import styled from "styled-components";
import Challenger from "../Challenge/Challenger";
import Button from "../Common/Button";
import ContentHeader from "../Common/ContentHeader";
import tw from "twin.macro";
import { scroll } from "../Challenge/BestChallenger";

const challenger = [
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 2,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "반지하의제왕",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 1,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "반지하의제왕",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 1,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "반지하의제왕",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 1,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "명란젓코난",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 2,
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "반지하의제왕",
        desc: "3/5개 챌린지 성공!",
        categoryList: ["운동", "독서"],
        rank: 1,
    },
];

const Challengers = () => {
    return (
        <Container>
            <div className="challengers">
                <ContentHeader
                    title="함께 참여하는 챌린저들"
                    desc="이 챌린지에 함께 참여하고 있는 챌린저들이에요. 같이 힘내봐요!"
                />
                <Button title="챌린지 참여하기" small margin={false} />
            </div>
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

export default Challengers;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[42px] w-[full] 
    `}
    .challengers {
        ${tw`
            flex justify-between items-center w-[1280px] overflow-y-hidden
        `}
    }
    .challenger-list {
        ${tw`
            w-full flex justify-between gap-[40px]
        `}
        animation: ${scroll} 30s linear infinite;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
    }
`;
