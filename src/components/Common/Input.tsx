import styled from "styled-components";
import tw from "twin.macro";

interface InputProps {
    hint: string;
    placeholder?: string;
    value?: string | number;
    width?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ hint, placeholder, value, width, onChange }: InputProps) => {
    return (
        <Container width={width}>
            {" "}
            {/* 직접 width 속성을 전달 */}
            <span>{hint}</span>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
};

export default Input;

interface ContainerProps {
    width?: string;
}

const Container = styled.div<ContainerProps>`
    ${tw`
        flex flex-col items-start gap-[15px]
    `}
    span {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }
    input {
        ${tw`
            h-[46px] px-[21px] outline-none rounded-full text-medium-20 font-medium text-fontColor1 truncate
        `}
        width: 100%; /* 컨테이너 내에서 input의 너비를 100%로 설정 */
    }
    ${(props) =>
        props.width &&
        `width: ${props.width};`}/* Container의 너비를 props에서 받아 적용 */
`;
