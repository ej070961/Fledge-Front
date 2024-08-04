import DaumPostcodeEmbed from "react-daum-postcode";
import styled from "styled-components";
import tw from "twin.macro";

const DaumPost = (props: any) => {
    const complete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        props.setAddress({
            ...props,
            address: fullAddress,
            zonecode: data.zonecode,
        });

        props.handlePopup();
    };

    return (
        <Background>
            <Container>
                <DaumPostcodeEmbed onComplete={complete} {...props} />
            </Container>
        </Background>
    );
};

export default DaumPost;

const Background = styled.div`
    ${tw`
        absolute  z-50 top-[100px]
    `}
`;

const Container = styled.div`
    ${tw`
        bg-white z-50
        w-[1280px]
    `}
`;
