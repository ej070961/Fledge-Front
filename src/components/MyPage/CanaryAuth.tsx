import styled from "styled-components";
import tw from "twin.macro";
import Button from "../Common/Button";

const CanaryAuth = () => {
    return (
        <Container>
            <div className="canary-header">
                <span className="sub-title">자립준비청년 인증</span>
                <span className="canary-desc">
                    자립준비청년 인증을 진행해야 후원 게시물을 작성하고,
                    멘토링을 신청할 수 있어요.
                </span>
            </div>
            <Button title="자립준비청년 인증하기" small mainColor />
        </Container>
    );
};

export default CanaryAuth;

const Container = styled.div`
    ${tw`
            mt-[36px] mb-[100px] flex flex-col gap-[22px] items-start w-[1280px]
        `}
    .canary-header {
        ${tw`
            flex  gap-[11px] items-baseline
        `}
        .canary-desc {
            ${tw`
                text-medium-15 font-medium text-fontColor2
            `}
        }
    }
    .sub-title {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }
`;
