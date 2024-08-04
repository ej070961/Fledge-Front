import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Main/Banner";
import TagLine from "../components/Main/TagLine";
import MentoringSection from "../components/Main/MentoringSection";
import DonationSection from "../components/Main/DonationSection";
import ChallengeSection from "../components/Main/ChallengeSection";
import InformationSection from "../components/Main/InformationSection";
import Button from "../components/Common/Button";
import Bird from "../assets/images/bird.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DefaultLayout from "../components/Common/DefaultLayout";
import useAuthStore from "../storage/useAuthStore";
import axios from "axios";
import { get } from "http";

function Main() {
    // redirection 주소로 부터 accessToken을 받아와서 localStorage에 저장
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const getUserInfo = async (accessToken: string) => {
            await axios
                .get("https://fledge.site/api/v1/members/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                .then((res) => {
                    useAuthStore.setState({
                        isLoggedIn: true,
                        userData: res.data.data,
                        accessToken: accessToken,
                    });
                })
                .finally(() => {
                    navigate("/");
                });
        };
        const query = new URLSearchParams(location.search);
        let accessToken = useAuthStore.getState().accessToken;
        if (!accessToken) {
            const token = query.get("accessToken");
            if (token) {
                accessToken = token;
            }
        }
        if (accessToken && useAuthStore.getState().userData.id === undefined) {
            getUserInfo(accessToken);
        }

        console.log(accessToken);
    }, [location.search, navigate]);

    return (
        <DefaultLayout>
            <TagLine />
            <Banner />
            <ContentsContainer>
                <DonationSection />
                <ChallengeSection />
                <MentoringSection />
                <InformationSection />
                <FledgeContainer>
                    <Title>fledge 플리지에게 흥미가 생기셨나요?</Title>
                    <Button title="fledge가 뭐에요?" />
                    <img src={Bird} alt="bird" />
                </FledgeContainer>
            </ContentsContainer>
        </DefaultLayout>
    );
}

const FledgeContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        gap-[41px]
        mb-[184px]
    `}
`;

const Title = styled.span`
    ${tw`
        text-bold-64
        font-bold
        text-fontColor1
    `}
`;

const ContentsContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center

        mt-[142px]
        gap-[288px]
    `}
`;

export default Main;
