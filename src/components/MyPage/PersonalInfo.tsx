import styled from "styled-components";
import tw from "twin.macro";
import DropDown from "../Common/DropDown";
import Input from "../Common/Input";
import Button from "../Common/Button";

import PostalCode from "./PostalCode";
import { useEffect, useState } from "react";
import { getCanaryProfile } from "../../apis/canary";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../storage/useAuthStore";
import Location from "./Location";

const PersonalInfo = () => {
    const { userData, accessToken } = useAuthStore.getState();
    const [disabled, setDisabled] = useState(true);
    const [birthData, setBirthData] = useState({
        year: "2000",
        month: "1",
        day: "1",
    });
    const [area, setArea] = useState({
        sido: "",
        sigungu: "",
        dong: "",
    });

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["getCanaryProfile", userData.id, accessToken],
    //     queryFn: () => getCanaryProfile(userData.id!, accessToken!),
    // });

    const [viewData, setViewData] = useState({
        id: 0,
        phone: "",
        birth: "",
        gender: true,
        introduction: "",
        address: "",
        detailAddress: "",
        zip: "",
        latitude: 0,
        longitude: 0,
        interestArea: ["서울특별시"],
    });

    // useEffect(() => {
    //     if (data) {
    //         setDisabled(false);
    //         setViewData(data);
    //         setBirthData({
    //             year: data.birth.split("-")[0],
    //             month: data.birth.split("-")[1],
    //             day: data.birth.split("-")[2],
    //         });
    //     }
    // }, [data]);

    const handleInterestArea = (area: string) => {
        if (viewData.interestArea.length < 10) {
            setViewData({
                ...viewData,
                interestArea: [...viewData.interestArea, area],
            });
        }
    };

    const handleDeleteInterestArea = (area: string) => {
        setViewData({
            ...viewData,
            interestArea: viewData.interestArea.filter((item) => item !== area),
        });
    };

    const handleArea = (key: string, value: string) => {
        setArea({
            ...area,
            [key]: value,
        });
    };

    const handleSave = () => {
        if (
            area.sido.length > 0 &&
            area.sigungu.length > 0 &&
            area.dong.length > 0
        ) {
            handleInterestArea(`${area.sido} ${area.sigungu} ${area.dong}`);
        } else {
            alert("지역을 선택해주세요.");
        }
    };

    const handleBirthData = (key: string, value: string) => {
        setBirthData({
            ...birthData,
            [key]: value,
        });
    };

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
                    <Input hint="휴대폰 번호" value={viewData.phone} />
                    <div className="birth">
                        <DropDown
                            hint="생년월일"
                            type="year"
                            value={birthData.year + "년"}
                            onChange={(e) =>
                                handleBirthData("year", e.target.value)
                            }
                        />
                        <DropDown
                            type="month"
                            value={birthData.month + "월"}
                            onChange={(e) =>
                                handleBirthData("month", e.target.value)
                            }
                            width="100px"
                        />
                        <DropDown
                            type="day"
                            value={birthData.day + "일"}
                            onChange={(e) =>
                                handleBirthData("day", e.target.value)
                            }
                            width="100px"
                        />
                    </div>
                    <DropDown hint="성별" items={["남성", "여성"]} />
                </div>

                {/* 회원 개인 정보 2열*/}
                <div className="second">
                    <div className="sub-text">소개글</div>
                    <textarea className="text" value={viewData.introduction} />
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
                            <DropDown
                                items={["시/도", "경기", "인천"]}
                                value={area.sido}
                                onChange={(e) =>
                                    handleArea("sido", e.target.value)
                                }
                            />
                            <DropDown
                                items={["시/군/구", "강동구"]}
                                value={area.sigungu}
                                onChange={(e) =>
                                    handleArea("sigungu", e.target.value)
                                }
                            />
                            <DropDown
                                items={["행정구/시", "청담동"]}
                                value={area.dong}
                                onChange={(e) =>
                                    handleArea("dong", e.target.value)
                                }
                            />
                            <Button
                                title="저장"
                                mainColor
                                onClick={() => {
                                    handleSave();
                                }}
                            />
                        </div>
                        <div className="selected-list">
                            {viewData.interestArea.map(
                                (area, index) =>
                                    area.length > 0 && (
                                        <Location
                                            key={index}
                                            text={area}
                                            onClick={() => {
                                                handleDeleteInterestArea(area);
                                            }}
                                        />
                                    )
                            )}
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
