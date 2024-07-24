import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";

function Main() {
    return (
        <Container>
            <NavBar />
            <div>Main</div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Main;
