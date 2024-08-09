import styled from "styled-components";
import tw from "twin.macro";
import Button from "../Common/Button";
import AddIcon from "../../assets/icons/add-icon";

type ProofModalProps = {
    onCancle: () => void;
    onSuccess: () => void;
};

const ProofModal = ({ onSuccess, onCancle }: ProofModalProps) => {
    return (
        <Modal onClick={onCancle}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="input-container">
                    <div className="image-container">
                        <AddIcon width={73} height={65} />
                        <p className="sub-text">이미지 업로드</p>
                    </div>
                </div>
                <Button title="챌린지 인증하기" onClick={onSuccess} />
            </div>
        </Modal>
    );
};

export default ProofModal;

const Modal = styled.div`
    ${tw`
        flex items-center justify-center
        fixed top-0 left-0 w-full h-full z-[1000] bg-[rgba(0,0,0,0.4)]
    `}
    .modal {
        ${tw`
        flex flex-col items-center justify-center bg-[black]
        p-[59px 67px] rounded-[16px] bg-background gap-[30px]
    `}
    }
    .input-container {
        ${tw`
            w-[801px]
        `}
        input {
        }
    }
    .image-container {
        ${tw`
            w-[800px] h-[400px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-[23px]
        `}
    }
    .title-text {
        ${tw`
            text-bold-36 font-bold text-fontColor1 mb-[16px]
        `}
    }
    .sub-text {
        ${tw`
            text-medium-20 font-medium text-fontColor3 mb-[30px]
        `}
    }
    .button-container {
        ${tw`
            flex gap-[23px]
        `}
    }
`;
