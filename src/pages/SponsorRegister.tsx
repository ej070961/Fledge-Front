import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DefaultLayout from "../components/Common/DefaultLayout";
import Header from "../components/SponsorRegister/Header";
import styled from "styled-components";
import tw from "twin.macro";
import ContentSection from "../components/SponsorRegister/ContentSection";
import ImageUploadSection from "../components/SponsorRegister/ImageUploadSection";
import AddressSection from "../components/SponsorRegister/AddressSection";
import SubContentSection from "../components/SponsorRegister/SubContentSection";
import AccountSection from "../components/SponsorRegister/AccountSection";
function SponsorRegister() {
  //mode를 onChange로 설정하여 폼 상태가 변경될때마다 유효성 검사 실행
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      title: "", // 다른 필드에 대해서도 동일하게 초기화
      itemName: "",
      price: "",
      category: "",
      itemUrl: "",
      way: "1회 인증",
      images: [],
      // 추가 필드들
    },
  });
  //폼 상태 변경될 때마다 isValid 상태 업데이트
  //isValid: 폼의 유효성을 나타내는 상태
  const {
    watch,
    formState: { isValid },
  } = methods;

  console.log(isValid);

  //서버 api 요청 코드 추가 예정
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const selectedCategory = watch("category");

  return (
    <DefaultLayout>
      <Header />
      <FormProvider {...methods}>
        <RegisterForm onSubmit={methods.handleSubmit(onSubmit)}>
          <ContentSection />
          <ImageUploadSection />
          <SubContentSection />

          {selectedCategory === "education" ||
          selectedCategory === "medical" ||
          selectedCategory === "legal" ? (
            <AccountSection />
          ) : (
            <AddressSection />
          )}

          <SubmitButton type="submit" disabled={!isValid}>
            등록하기
          </SubmitButton>
        </RegisterForm>
      </FormProvider>
    </DefaultLayout>
  );
}

export default SponsorRegister;

const RegisterForm = styled.form`
  ${tw`flex flex-col mt-32 w-[1280px]`}
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  ${tw`w-52 h-12 font-sans font-bold text-bold-24 rounded-full transition-colors duration-200 my-[105px]`}
  ${({ disabled }) =>
    disabled
      ? tw`bg-[#D9D9D9] text-fontColor1 cursor-default`
      : tw`bg-subColor text-white`}
`;
