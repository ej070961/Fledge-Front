import styled from "styled-components";
import Button from "../Common/Button";
import tw from "twin.macro";
import Input from "../Common/Input";
import { useState } from "react";
import DaumPost from "../Common/DaumPost";

const PostalCode = () => {
    const [popup, setPopup] = useState(false);

    interface postCode {
        address: string;
        zonecode: number | string;
    }

    const [form, setForm] = useState<postCode>({
        address: "",
        zonecode: "",
    });

    const handlePopup = () => {
        setPopup(!popup);
    };

    return (
        <>
            <Container>
                <Input
                    hint="거주 주소지"
                    placeholder="거주 주소지"
                    width="577px"
                    value={form.address}
                />
                <Input hint="상세 주소" placeholder="상세 주소" width="199px" />
                <Input
                    hint="우편번호"
                    placeholder="12345"
                    width="102px"
                    value={form.zonecode}
                />
                <Button title="우편번호 검색" mainColor onClick={handlePopup} />
                {popup && (
                    <DaumPost handlePopup={handlePopup} setAddress={setForm} />
                )}
            </Container>
        </>
    );
};

export default PostalCode;

const Container = styled.div`
    ${tw`
            flex gap-[23px] items-baseline relative
        `}
`;
