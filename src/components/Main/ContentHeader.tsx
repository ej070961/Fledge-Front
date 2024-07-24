import styled from "styled-components";
import tw from "twin.macro";

interface ContentHeaderProps {
    title: string;
    desc: string;
}

const ContentHeader = ({ title, desc }: ContentHeaderProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </Container>
    );
};

const Container = styled.div`
    ${tw`
        flex
        flex-col
        gap-[3px]
    `}
`;

const Title = styled.span`
    ${tw`
        text-bold-36
        text-fontColor1
    `}
`;
const Desc = styled.span`
    ${tw`
        text-medium-20
        text-fontColor3
    `}
`;

export default ContentHeader;
