import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/fledge.svg";
import { ReactComponent as KakaoSignUp } from "../assets/images/kakao_sign_up.svg";
import { ReactComponent as KaKaoSignIn } from "../assets/images/kakao_sign_in.svg";
import tw from "twin.macro";
import { useState } from "react";
const NavBar = () => {
    const [isSignUpHovered, setIsSignUpHovered] = useState(false);
    const [isSignInHovered, setIsSignInHovered] = useState(false);
    return (
        <Container>
            <MenuContainer>
                <Logo />
                <MenuItem>후원하기</MenuItem>
                <MenuItem>챌린지</MenuItem>
                <MenuItem>멘토링</MenuItem>
                <MenuItem>정보공유</MenuItem>
                <MenuItem>소개</MenuItem>
            </MenuContainer>
            <MenuContainer>
                <SocialContainer
                    onMouseEnter={() => setIsSignUpHovered(true)}
                    onMouseLeave={() => setIsSignUpHovered(false)}
                >
                    <AuthItem>회원가입</AuthItem>
                    {isSignUpHovered && (
                        <SocialButton>
                            <KakaoSignUp />
                        </SocialButton>
                    )}
                </SocialContainer>
                <SocialContainer
                    onMouseEnter={() => setIsSignInHovered(true)}
                    onMouseLeave={() => setIsSignInHovered(false)}
                >
                    <AuthItem>로그인</AuthItem>
                    {isSignInHovered && (
                        <SocialButton>
                            <KaKaoSignIn />
                        </SocialButton>
                    )}
                </SocialContainer>
            </MenuContainer>
        </Container>
    );
};

export default NavBar;

const SocialContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-[85px]
        cursor-pointer
        relative
    `}
`;

const SocialButton = styled.div`
    ${tw`
        absolute
        top-[30px]
    `}
`;

const Container = styled.div`
    ${tw`
        flex
        justify-between
        w-[1280px]
        h-[85px]
    `}
`;

const MenuContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        gap-[15px]
    `}
`;

const MenuItem = styled.div`
    ${tw`
        text-bold-20
        font-bold
        text-center
        text-fontColor1
        w-[85px]
        cursor-pointer
    `}
`;

const AuthItem = styled.div`
    ${tw`
        text-medium-20
        font-medium
        text-center
        text-fontColor2
    `}
`;
