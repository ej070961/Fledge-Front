import styled from "styled-components";
import tw from "twin.macro";
import LikeIcon from "../../assets/icons/like-icon";

type HeaderProps = {
    category: string;
    title: string;
    desc: string;
    likeCount: number;
    isClicked?: boolean;
    onClick?: () => void;
};

const Header = ({
    category,
    title,
    desc,
    likeCount,
    isClicked,
    onClick,
}: HeaderProps) => {
    return (
        <Container>
            <ChallengeInfo>
                <div className="category">{category}</div>
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
            </ChallengeInfo>
            <div className="like" onClick={onClick}>
                <LikeIcon small={false} fill={isClicked} />
                <p
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {likeCount}
                </p>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    ${tw`
        flex justify-between items-center w-[1280px]
    `}
    .like {
        ${tw`
            flex flex-col items-center gap-[8.84px]
        `}
        svg {
            ${tw`
                cursor-pointer
            `}
        }
    }
    p {
        ${tw`
            text-bold-20 font-bold text-fontColor3
        `}
    }
`;

const ChallengeInfo = styled.div`
    ${tw`
        w-[1280px] flex flex-col items-start
    `}
    .category {
        ${tw`
            text-medium-20 font-medium text-white
            bg-mainColor rounded-[37px] p-[1px 13px]
        `}
    }
    .title {
        ${tw`
           text-bold-64 font-bold mt-[6.5px] text-fontColor1
        `}
    }
    .desc {
        ${tw`
            text-medium-20 font-medium text-fontColor3 mt-[14px]
        `}
    }
`;
