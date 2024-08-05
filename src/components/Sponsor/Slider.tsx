import React, { useCallback, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { PagingData, SponsorBannerData } from "../../@types/sponsor";
import { getDeadlinePost } from "../../apis/sponsor";
import { useQuery } from "@tanstack/react-query";
type SliderProps = {
  menu: string;
};
function Slider({ menu }: SliderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: PostData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getDeadlinePosts", currentPage],
    queryFn: () => getDeadlinePost(currentPage),
    enabled: menu === "sponsor", // menu가 "sponsor"일 때만 실행
  });

  const itemsToShow = 4; // 한 번에 보여줄 배너 수
  if (!isLoading && PostData) {
    return (
      <Wrapper>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <LeftArrowIcon width={25} height={51} />
        </Button>
        <SliderContainer>
          <ItemBox>
            {PostData.supportPosts.length > 0 ? (
              PostData.supportPosts.map(
                (data: SponsorBannerData, index: number) => (
                  <BannerItem
                    key={index}
                    supportId={data.supportId}
                    title={data.title}
                    leftDays={data.leftDays}
                    supportPostImageUrl={data.supportPostImageUrl}
                    supportRecord={data.supportRecord}
                  />
                )
              )
            ) : (
              <div></div>
            )}
          </ItemBox>
        </SliderContainer>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === PostData.totalPages}
        >
          <RightArrowIcon width={25} height={51} />
        </Button>
      </Wrapper>
    );
  } else {
    return <div></div>;
  }
}

export default Slider;

const Wrapper = styled.div`
  ${tw`w-[1412px] flex flex-row items-center justify-between mt-12`}
`;

const SliderContainer = styled.div`
  ${tw`w-[1280px] overflow-hidden`}
`;

const ItemBox = styled.div`
  ${tw`flex items-center transition-transform duration-300`}
  gap: 20px;
`;

const Button = styled.button`
  &:disabled {
    ${tw`opacity-50 cursor-default`}
  }
`;
