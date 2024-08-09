import styled from "styled-components";
import tw from "twin.macro";
import AddIcon from "../../assets/icons/add-icon";
import ContentHeader from "../Common/ContentHeader";
import { useState } from "react";
import ThumbsUpModal from "./ThumbsUpModal";
import ProofModal from "./ProofModal";

type CertificationProps = {
    title: string;
};

const Certification = ({ title }: CertificationProps) => {
    const [proofModalOpen, setProofModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleProofSuccess = () => {
        setProofModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <>
            <Container>
                <ContentHeader
                    title="인증 내역"
                    desc={`'${title}’ 챌린지를 달성하기 위해 총 4번의 인증이 필요해요.`}
                />
                <div className="certification-list">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                        alt="certification"
                    />
                    <img
                        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                        alt="certification"
                    />
                    <div
                        className="need-certification"
                        onClick={() => {
                            setProofModalOpen(true);
                        }}
                    >
                        <AddIcon width={65} height={65} color="#EF7F18" />
                        <span>인증 내역 추가 업로드</span>
                    </div>
                    <div
                        className="need-certification"
                        onClick={() => {
                            setIsSuccessModalOpen(true);
                        }}
                    >
                        <AddIcon width={65} height={65} color="#EF7F18" />
                        <span>인증 내역 추가 업로드</span>
                    </div>
                </div>
            </Container>
            {proofModalOpen && (
                <ProofModal
                    onSuccess={handleProofSuccess}
                    onCancle={() => setProofModalOpen(false)}
                />
            )}

            {isSuccessModalOpen && (
                <ThumbsUpModal
                    onClose={() => {
                        setIsSuccessModalOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default Certification;

const Container = styled.div`
    ${tw`
        mt-[243px]
    `}
    .certification-list {
        ${tw`
            flex gap-[23px] mt-[50px]
        `}
        img {
            ${tw`
                w-[301px] h-[415px] rounded-[16px]
            `}
        }
        .need-certification {
            ${tw`
                cursor-pointer w-[301px] h-[415px] rounded-[16px] bg-white flex flex-col items-center justify-center gap-[23px]
            `}
            span {
                ${tw`
                    text-medium-20 font-medium text-fontColor3
                `}
            }
        }
    }
`;
