import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
    type?: number;
    title: string;
    onClick?: () => void;
}

const Button = ({ title, onClick, type = 1 }: ButtonProps) => {
    return type === 1 ? (
        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
    ) : (
        <ButtonContainer2 onClick={onClick}>{title}</ButtonContainer2>
    );
};

export const ButtonSmall = ({ title, onClick, type = 1 }: ButtonProps) => {
    return type === 1 ? (
        <ButtonContainerSmall onClick={onClick}>{title}</ButtonContainerSmall>
    ) : (
        <ButtonContainerSmall2 onClick={onClick}>{title}</ButtonContainerSmall2>
    );
};

const ButtonContainer = styled.button`
    ${tw`
        p-[6.3px 16.2px]
        bg-subColor
        rounded-[37px]
        text-bold-24
        font-bold
        text-[white]
    `}
`;

const ButtonContainer2 = styled.button`
    ${tw`
        p-[6.3px 16.2px]
        bg-mainColor
        rounded-[37px]
        text-bold-24
        font-bold
        text-[white]
    `}
`;

const ButtonContainerSmall = styled.button`
    ${tw`
        p-[0px 19px]
        bg-subColor
        rounded-full
        text-bold-20
        font-bold
        text-white
        text-nowrap
        h-[46px]
    `}
`;

const ButtonContainerSmall2 = styled.button`
    ${tw`
        p-[0px 19px]
        bg-mainColor
        rounded-full
        text-bold-20
        font-bold
        text-white
        text-nowrap
        h-[46px]
    `}
`;

export default Button;
