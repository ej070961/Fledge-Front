import styled from "styled-components";
import tw from "twin.macro";
import DropDown from "../Common/DropDown";
import Input from "../Common/Input";
import Button from "../Common/Button";
import XIcon from "../../assets/icons/x-icon";
import PostalCode from "./PostalCode";

const PersonalInfo = () => {
    return (
        <>
            {/* 회원 개인 정보 헤더 */}
            <Header>
                <span className="title-text">회원 개인 정보</span>
            </Header>

            {/* 회원 개인 정보 입력 */}
            <Container>
                {/* 회원 개인 정보 1열*/}
                <div className="first">
                    <Input hint="휴대폰 번호" placeholder="010-1234-5678" />
                    <div className="birth">
                        <DropDown
                            hint="생년월일"
                            items={["1990년", "1991년", "1992년"]}
                        />
                        <DropDown items={["01월", "02월", "03월"]} />
                        <DropDown items={["01일", "02일", "03일"]} />
                    </div>
                    <DropDown hint="성별" items={["남성", "여성"]} />
                </div>

                {/* 회원 개인 정보 2열*/}
                <div className="second">
                    <div className="sub-text">소개글</div>
                    <textarea className="text" />
                </div>

                {/* 주소 검색 */}
                <PostalCode />

                {/* 회원 개인 정보 4열*/}
                <div className="fourth">
                    <div className="header">
                        <span className="sub-text">관심 지역</span>
                        <span className="desc-text">
                            쵀대 10개의 지역을 고를 수 있어요.
                        </span>
                    </div>
                    <div className="selection">
                        <div className="selection-item">
                            <DropDown items={["시/도", "경기", "인천"]} />
                            <DropDown items={["시/군/구", "강동구"]} />
                            <DropDown items={["행정구/시", "청담동"]} />
                            <Button title="저장" mainColor />
                        </div>
                        <div className="selected-list">
                            <div className="selected-item">
                                <span>서울특별시 전체</span>
                                <button>
                                    <XIcon />
                                </button>
                            </div>
                            <div className="selected-item">
                                <span>서울특별시 전체</span>
                                <button>
                                    <XIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PersonalInfo;

const Header = styled.div`
    ${tw`
            w-[1280px] flex flex-col items-start gap-[3px]
        `}
`;

const Container = styled.div`
    ${tw`
        w-[1280px] flex flex-col items-start gap-[36px] mt-[49px]
    `}
    .first {
        ${tw`
            flex gap-[23px] items-baseline
        `}
    }
    .birth {
        ${tw`
        flex gap-[10px] items-baseline
    `}
    }
    .sub-text {
        ${tw`
                text-medium-20 font-medium text-fontColor3 mb-[24px] 
            `}
    }
    .text {
        ${tw`
            w-[1280px] h-[225px] rounded-[25px] resize-none truncate outline-none px-[19px] py-[15px]
            text-medium-20 font-medium text-fontColor1
        `}
    }
    .title-text {
        ${tw`
                text-bold-36 font-bold text-fontColor1
            `}
    }
    .desc-text {
        ${tw`
                text-medium-15 font-medium text-fontColor2
            `}
    }
    .fourth {
        .header {
            ${tw`
                flex gap-[13px] items-baseline  mb-[24px]
            `}
            .sub-text {
                ${tw`
                text-medium-20 font-medium text-fontColor3 mb-[0px]
            `}
            }
        }
        .selection {
            ${tw` 
                flex flex-col items-start gap-[17px] mt-[-50px] mb-[273px]
            `}
            .selection-item {
                ${tw`
                    flex gap-[6.5px] items-baseline
                `}
                button {
                    ${tw`
                   ml-[17px] mb-[5px] h-[46px]
                `}
                }
            }
            .selected-list {
                ${tw`
                    flex gap-[12px]
                `}
            }
            .selected-item {
                ${tw`
                    h-[46px] flex gap-[10px] px-[21px]
                    border-[3px] border-mainColor rounded-full
                    justify-center items-center 
                `}
                span {
                    ${tw`
                    text-medium-20 font-medium text-mainColor mt-[-2px]
                `}
                }
            }
        }
    }
`;
