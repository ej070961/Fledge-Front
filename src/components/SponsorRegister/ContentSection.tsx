import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import tw from "twin.macro";
import Dropdown from "./Dropdown";
import { categories } from "../../types/sponsor-category";

const ContentSection = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <>
      <Title>후원 게시물 본문</Title>
      <InputBox className="w-3/4">
        <label>*후원 게시물 제목</label>
        <input type="text" {...register("title", { required: true })} />
      </InputBox>

      <div className="flex flex-row items-center w-full">
        <InputBox className="w-1/3">
          <label>*후원 물품 이름</label>
          <input type="text" {...register("itemName", { required: true })} />
        </InputBox>
        <InputBox className="w-1/3">
          <label>*후원 물품 금액</label>
          <input type="text" {...register("price", { required: true })} />
        </InputBox>
        <InputBox className="w-[166px]">
          <label>*카테고리</label>
          <Dropdown
            options={categories}
            value={getValues("category")}
            onChange={(e) =>
              setValue("category", e.target.value, { shouldValidate: true })
            }
          />
        </InputBox>
      </div>
      <InputBox className="w-1/3">
        <label>*후원 물품 판매사이트</label>
        <input type="url" {...register("itemUrl", { required: true })} />
      </InputBox>
    </>
  );
};

export default ContentSection;

const Title = styled.span`
  ${tw`font-bold text-bold-36 text-fontColor1 my-8`}
`;

const InputBox = styled.div`
  ${tw`flex flex-col mr-5 my-1.5`}

  label {
    ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
  }

  textarea {
    ${tw`
            bg-white p-[10px 21px] [border-radius: 25px]  h-[225px]
            flex gap-[12px] items-center font-medium text-medium-20
        `}
    &:focus {
      ${tw`outline-mainColor`};
    }
  }
  input {
    ${tw`bg-white h-11 rounded-full font-medium text-medium-20 text-fontColor1 p-3 w-full`}
    &:focus {
      ${tw`outline-mainColor`};
    }
  }
`;
