import styled from "styled-components";
import tw from "twin.macro";
import { ButtonSmall as Button } from "../../components/Common/Button";

const CanaryModal = () => {
    return (
        <CanaryWrapper>
            <Canary>
                <span className="title-text">자립준비청년 인증하기</span>
                <div className="input-section main-text">
                    <div className="sub-section">
                        <div className="w-[662.79px]">
                            <span className="sub-text">
                                보호종료확인서 업로드
                            </span>
                            <div className="background">보호종료확인서.hwp</div>
                        </div>
                        <Button title="저장" type={2} />
                    </div>
                    <div className="sub-section">
                        <div className="w-[303.19px]">
                            <span className="sub-text">휴대폰 번호</span>
                            <div className="background">010-1234-5678</div>
                        </div>
                        <div className="w-[300px]">
                            <span className="sub-text">생년월일</span>
                            <div className="background  justify-center">
                                <div>2005년</div>
                                <div>01월</div>
                                <div>01일</div>
                            </div>
                        </div>
                        <div>
                            <span className="sub-text">성별</span>
                            <div className="background">여성</div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <div className="w-[581.2px]">
                            <span className="sub-text">거주 주소지</span>
                            <div className="background">
                                서울특별시 은평구 용암동 00-00
                            </div>
                        </div>
                        <div className="w-[200.45px]">
                            <span className="sub-text">상세주소</span>
                            <div className="background">단독</div>
                        </div>
                        <div className="w-[102.74px]">
                            <span className="sub-text">우편번호</span>
                            <div className="background">00000</div>
                        </div>
                        <Button title="우편번호 검색" type={2} />
                    </div>
                </div>
                <Button title="제출하기" />
            </Canary>
        </CanaryWrapper>
    );
};

export default CanaryModal;

const CanaryWrapper = styled.div`
    ${tw`
        w-full h-full bg-[black] bg-opacity-50 
        fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        flex justify-center items-center
    `}
`;

const Canary = styled.div`
    ${tw`
        w-[1222px] h-[660px] bg-background rounded-[16px]  flex flex-col 
        justify-center items-start p-[59px 57px] gap-[40px]
    `}

    button {
        ${tw`
        h-[46px]
    `}
    }

    .input-section {
        ${tw`
            flex flex-col gap-[36px]
        `}
    }

    .sub-section {
        ${tw`
            flex gap-[20px] items-end
        `}
    }

    .title-text {
        ${tw`
            text-bold-36 font-bold text-fontColor1
        `}
    }

    .sub-text {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }

    .main-text {
        ${tw`
            text-medium-20 font-medium text-fontColor1
        `}
    }

    .background {
        ${tw`
            bg-white p-[0px 21px] rounded-full h-[46px]
            flex gap-[12px] items-center
        `}
    }
`;
