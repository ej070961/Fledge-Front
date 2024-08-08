import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    mainColor?: boolean;
    small?: boolean;
    background?: string;
}

const Button = ({
    title,
    onClick,
    mainColor,
    small,
    background = "color",
}: ButtonProps) => {
    return (
        <ButtonContainer
            type="button"
            onClick={onClick}
            mainColor={mainColor}
            small={small}
            background={background}
        >
            {title}
        </ButtonContainer>
    );
};

interface ButtonContainerProps {
    mainColor?: boolean;
    small?: boolean;
    background?: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
    ${tw`
        p-[6.23px 16.2px]
        bg-subColor
        rounded-[37px]
        text-bold-24
        font-bold
        text-[white]
        font-sans
        text-nowrap
    `}
    ${({ mainColor }) => mainColor && tw`bg-mainColor`}
    ${({ small }) =>
        small &&
        tw`
        p-[0 19px]
        text-bold-20
        font-bold
        rounded-[30px]
        h-[46px]
    `}
    ${({ background }) => background === "white" && tw`bg-white text-subColor`}

    margin-top: auto;
`;

export default Button;
