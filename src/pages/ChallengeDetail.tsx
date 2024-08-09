import Button from "../components/Common/Button";
import DefaultLayout from "../components/Common/DefaultLayout";

const ChallengeDetail = () => {
    return (
        <DefaultLayout>
            <div className="header">
                <div className="category">자기계발</div>
                <p className="title">1주 1권 독서하기</p>
                <p className="desc">
                    한 달 동안 매주 한 권씩 독서 후 독후감을 작성합니다.
                </p>
            </div>
        </DefaultLayout>
    );
};

export default ChallengeDetail;
