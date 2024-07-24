import NavBar from "../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Main/Banner";
import TagLine from "../components/Main/TagLine";

function Main() {
    return (
        <MainContainer>
            <NavBar />
            <TagLine />
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

export default Main;
