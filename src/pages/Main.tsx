import NavBar from "../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as TagLineImg } from "../assets/images/tag_line.svg";
import Banner from "../components/Banner";

function Main() {
    return (
        <MainContainer>
            <NavBar />
            <TagLine>
                <TagLineImg />
            </TagLine>
            <Banner />
        </MainContainer>
    );
}

const MainContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
    `}
`;

const TagLine = styled.div`
    ${tw`
        w-[1280px]
        h-[219px]
        mt-[134px]
        flex
        items-center
    `}
`;

export default Main;
