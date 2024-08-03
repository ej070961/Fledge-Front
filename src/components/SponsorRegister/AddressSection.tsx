import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../Common/Button";
import { useFormContext } from "react-hook-form";

function AddressSection() {
    const { register } = useFormContext();
    return (
        <>
            <Title>배송지 입력</Title>
            <div className="w-[212px] my-9">
                <Button title="마이페이지 정보 가져오기" mainColor small />
            </div>
            <AddressFormContainer className="w-[1100px]">
                <InputBox className="w-[577px]">
                    <label>거주 주소지</label>
                    <div className="background">
                        서울특별시 은평구 용암동 00-00
                    </div>
                </InputBox>
                <InputBox className="w-[200.45px]">
                    <label>상세주소</label>
                    <input
                        className="background"
                        {...register("detailAddress", { required: true })}
                    />
                </InputBox>
                <InputBox className="w-[102px]">
                    <label>우편번호</label>
                    <div className="background">00000</div>
                </InputBox>
                <div className="my-1.5">
                    <Button title="우편번호 검색" mainColor small />
                </div>
            </AddressFormContainer>
            <AddressFormContainer className="w-[650px]">
                <InputBox className="w-[300px]">
                    <label>*수령자</label>
                    <input
                        type="text"
                        className="background"
                        {...register("recipentName", { required: true })}
                    />
                </InputBox>
                <InputBox>
                    <label>*연락처</label>
                    <input
                        type="text"
                        className="background"
                        {...register("phone", { required: true })}
                    />
                </InputBox>
            </AddressFormContainer>
        </>
    );
}

export default AddressSection;

const Title = styled.span`
    ${tw`font-bold text-bold-36 text-fontColor1 my-8`}
`;

const AddressFormContainer = styled.div`
    ${tw`flex flex-row items-end justify-between `}
`;

const InputBox = styled.div`
    ${tw`flex flex-col mr-5 my-1.5`}
    label {
        ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
    }
    .background {
        ${tw`
            bg-white p-[0px 21px] rounded-full h-[46px]
            flex gap-[12px] items-center
        `}
    }
    input {
        ${tw`bg-white h-11 rounded-full font-medium text-medium-20 text-fontColor1 p-3 w-full`}
        &:focus {
            ${tw`outline-mainColor`};
        }
    }
`;
