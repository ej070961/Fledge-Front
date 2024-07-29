import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Arrow from "../../assets/images/under-arrow-small.png";
import { ButtonSmall as Button } from "../../components/Common/Button";

const UserBasicInfo = () => {
    const [name, setName] = useState("홍길동");
    const [email, setEmail] = useState("fledge@gmail.com");
    const [type, setType] = useState("개인");

    const USERTYPE = [
        { value: "개인", name: "개인" },
        { value: "기업", name: "기업" },
        { value: "자립준비청년", name: "자립준비청년" },
    ];

    return (
        <Container>
            <div className="user-info-header">
                <div className="user-info-title">회원 기본 정보</div>
                <Button title="정보 수정" />
            </div>
            <InfoInput>
                <div className="input">
                    <span className="sub-title">성명</span>
                    <input
                        className="input-text"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <span className="sub-title">연동된 카카오 계정</span>
                    <input
                        className="input-text"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <span className="sub-title">회원 구분</span>
                    <div className="select">
                        <span>{type}</span>
                        <img src={Arrow} alt="화살표" />
                    </div>
                </div>
            </InfoInput>
            {/* 자립준비청년 인증 */}
            <div className="canary">
                <div className="canary-header">
                    <span className="sub-title">자립준비청년 인증</span>
                    <span className="canary-desc">
                        자립준비청년 인증을 진행해야 후원 게시물을 작성하고,
                        멘토링을 신청할 수 있어요.
                    </span>
                </div>
                <div className="canary-validation">자립준비청년 인증하기</div>
            </div>
        </Container>
    );
};

export default UserBasicInfo;

const Container = styled.div`
    ${tw`
        mt-[71px] w-[1280px] mb-[108px]
    `}

    .user-info-header {
        ${tw`
            flex justify-between items-center mb-[49px]
        `}
    }

    .user-info-title {
        ${tw`
            text-bold-36 font-bold text-center
        `}
    }

    .sub-title {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }

    .canary {
        ${tw`
            mt-[36px] flex flex-col gap-[22px]
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
        .canary-validation {
            ${tw`
            p-[16px 19px] bg-mainColor  w-[227px] text-center rounded-full
            text-bold-20 font-bold text-[white] cursor-pointer
        `}
        }
    }
`;

const InfoInput = styled.div`
    ${tw`
        flex  gap-[23px]
    `}

    .editable {
        ${tw`
            cursor-pointer
        `}
    }

    .input {
        ${tw`
            flex flex-col gap-[15px]
        `}
    }

    .input-text {
        ${tw`
            h-[46px] rounded-full p-[15.5px 21px] text-medium-20 font-medium outline-none
        `}
    }

    .select {
        ${tw`
            w-[161px] h-[46px] rounded-full text-medium-20 font-medium bg-white
            flex items-center justify-center gap-[8px]
        `}
    }
`;
