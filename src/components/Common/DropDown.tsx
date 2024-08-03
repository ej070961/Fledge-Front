import styled from "styled-components";
import tw from "twin.macro";
import arrow from "../../assets/images/under-arrow-small.png";

interface InputProps {
    hint?: string;
    items: string[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
}

const DropDown = ({ hint, value, items, width, onChange }: InputProps) => {
    return (
        <Container>
            <div style={{ visibility: hint ? "visible" : "hidden" }}>
                {hint || "Placeholder"}
            </div>
            <DropdownButton style={{ width: width }}>
                <span>{value ? value : items[0]}</span>
                <img src={arrow} alt="dropdown-arrow" />
            </DropdownButton>
        </Container>
    );
};

export default DropDown;

interface ContainerProps {
    width?: string;
}

const Container = styled.div<ContainerProps>`
    ${(props) => props.width && `width: ${props.width};`}
    ${tw`
        flex flex-col gap-[16px]
        text-medium-20 font-medium text-fontColor3
        justify-center items-start
    `}
    min-height: 100px; // Adjust the minimum height to align with your design needs
`;
const DropdownButton = styled.div`
    ${tw`
        flex items-center gap-[4px] h-[46px] bg-white px-[19px] rounded-full text-medium-20 font-medium text-fontColor1 cursor-pointer
    `}
`;
