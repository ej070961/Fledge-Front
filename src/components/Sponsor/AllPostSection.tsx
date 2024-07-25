import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import styled from "styled-components";
import tw from "twin.macro";
import SortOption from "./SortOption";
import BannerItem from "./BannerItem";

function AllPostSection() {
  const DummyData = [
    { remained: 4, detail: "핸드폰 수리비가 부족해요.", progressNum: 80 },
    { remained: 3, detail: "핸드폰 수리비가 부족해요.", progressNum: 50 },
    { remained: 2, detail: "핸드폰 수리비가 부족해요.", progressNum: 10 },
    { remained: 1, detail: "핸드폰 수리비가 부족해요.", progressNum: 40 },
    { remained: 3, detail: "핸드폰 수리비가 부족해요.", progressNum: 50 },
    { remained: 2, detail: "핸드폰 수리비가 부족해요.", progressNum: 10 },
    { remained: 1, detail: "핸드폰 수리비가 부족해요.", progressNum: 40 },
    { remained: 3, detail: "핸드폰 수리비가 부족해요.", progressNum: 50 },
    { remained: 3, detail: "핸드폰 수리비가 부족해요.", progressNum: 50 },
  ];
  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center w-full mt-7">
        {/* 검색창 */}
        <Search />
        {/* 게시물 등록 버튼 */}
        <AddButton>후원 게시물 등록</AddButton>
      </div>

      <div className="flex flex-row justify-between w-full mt-14">
        {/* 필터링 */}
        <Filter />
        <div className="flex flex-col w-3/4  items-end">
          <SortOption />
          <ItemBox>
            {DummyData.map((data, index) => (
              <BannerItem
                key={index}
                remained={data.remained}
                progressNum={data.progressNum}
                detail={data.detail}
              />
            ))}
          </ItemBox>
        </div>
      </div>
    </Wrapper>
  );
}

export default AllPostSection;

const Wrapper = styled.div`
  ${tw`w-full max-w-[1280px]`}
`;
const AddButton = styled.button`
  ${tw`w-52 h-12 bg-subColor font-sans text-bold-24 text-white [border-radius: 37px]`}
`;
const ItemBox = styled.div`
  ${tw`grid grid-cols-3 gap-4 mt-4`}
`;
