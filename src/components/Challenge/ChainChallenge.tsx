import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ChallengeItemLarge } from "./ChallengeItem";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import chain from "../../assets/images/challenge_chain.png";
const ChainChallenge = () => {
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
                title="연계 챌린지"
                desc="정부나 전담기관 지원 챌린지, 기업 파트너십 챌린지에 도전해보세요!"
                imgSrc={chain}
            />
            <ChallengerContainer>
                <button ref={prevRef}>
                    <LeftArrowIcon width={24} height={51} />
                </button>
                <StyledSwiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={2}
                    spaceBetween={23}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    <SwiperSlide>
                        <ChallengeItemLarge
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                            date="2021.09.01 ~ 2021.09.30"
                            benefits={[
                                {
                                    title: "맞춤형 주거지원",
                                    price: "최대 300만원",
                                },
                                {
                                    title: "자격증 취득 지원",
                                    price: "최대 100만원",
                                },
                                {
                                    title: "자격증 취득 격려금",
                                    price: "인당 30만원",
                                },
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItemLarge
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                            date="2021.09.01 ~ 2021.09.30"
                            benefits={[
                                {
                                    title: "맞춤형 주거지원",
                                    price: "최대 300만원",
                                },
                                {
                                    title: "자격증 취득 지원",
                                    price: "최대 100만원",
                                },
                                {
                                    title: "자격증 취득 격려금",
                                    price: "인당 30만원",
                                },
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ChallengeItemLarge
                            title="1주 1권 독서하기"
                            heartCount={3}
                            challengeTypes={["명상", "자기계발"]}
                            description="매일 1분, 나를 위한 명상으로 하루를 시작해보세요!"
                            successRate={75}
                            participants={123}
                            date="2021.09.01 ~ 2021.09.30"
                            benefits={[
                                {
                                    title: "맞춤형 주거지원",
                                    price: "최대 300만원",
                                },
                                {
                                    title: "자격증 취득 지원",
                                    price: "최대 100만원",
                                },
                                {
                                    title: "자격증 취득 격려금",
                                    price: "인당 30만원",
                                },
                            ]}
                        />
                    </SwiperSlide>
                </StyledSwiper>
                <button ref={nextRef}>
                    <RightArrowIcon width={24} height={51} />
                </button>
            </ChallengerContainer>
        </Container>
    );
};

export default ChainChallenge;

const ChallengerContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-between
        gap-[40px]
        mt-[-170px]
    `}
`;

const Container = styled.div`
    ${tw`
        mt-[50px] flex flex-col items-center relative w-full
    `}
`;

const StyledSwiper = styled(Swiper)`
    ${tw`
        w-[1280px]
    `}
`;
