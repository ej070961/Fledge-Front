import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ChallengeItem } from "./ChallengeItem";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { useEffect, useRef, useState } from "react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import hot from "../../assets/images/challenge_hot.png";

const HotChallenge = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.navigation?.init();
            swiperInstance.navigation?.update();
        }
    }, [swiperInstance]);
    return (
        <Container>
            <ContentHeader
                title="인기 있는 챌린지"
                desc="지금 가장 HOT한 챌린지들을 만나보세요!"
                imgSrc={hot}
            />
            <BestChallengerContainer>
                <button ref={prevRef}>
                    <LeftArrowIcon width={24} height={51} />
                </button>
                <StyledSwiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={4}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={23}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItem
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                        />
                    </SwiperSlide>
                </StyledSwiper>
                <button ref={nextRef}>
                    <RightArrowIcon width={24} height={51} />
                </button>
            </BestChallengerContainer>
        </Container>
    );
};

export default HotChallenge;

const BestChallengerContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-between
        gap-[40px]
        mt-[-90px]
    `}
`;

const Container = styled.div`
    ${tw`
        mt-[130px] flex flex-col items-center relative w-full
    `}
`;

const StyledSwiper = styled(Swiper)`
    ${tw`
        w-[1280px]
    `}
`;
