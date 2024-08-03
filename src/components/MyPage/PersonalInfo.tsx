import styled from "styled-components";
import tw from "twin.macro";
import DropDown from "../Common/DropDown";
import Input from "../Common/Input";
import Button from "../Common/Button";

const PersonalInfo = () => {
    return (
        <>
            <Header>
                <span className="title-text">회원 개인 정보</span>
            </Header>
            <Container>
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
                <div className="second">
                    <div className="sub-text">소개글</div>
                    <textarea className="text" />
                </div>
                <div className="first">
                    <Input
                        hint="거주 주소지"
                        placeholder="서울특별시 강남구"
                        width="577px"
                    />
                    <Input
                        hint="상세 주소"
                        placeholder="역삼동 123-4"
                        width="199px"
                    />
                    <Input hint="우편번호" placeholder="12345" width="102px" />
                    <Button title="우편번호 검색" mainColor />
                </div>
                <div className="fourth"></div>
            </Container>
        </>
    );
};

export default PersonalInfo;

const Header = styled.div`
    ${tw`
            w-[1280px] flex flex-col items-start gap-[3px]
        `}
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
`;
