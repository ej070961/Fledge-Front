import React from "react";
import DefaultLayout from "../components/Common/DefaultLayout";
import Header from "../components/SponsorDetail/Header";
import ContentDetail from "../components/SponsorDetail/ContentDetail";
import Progress from "../components/SponsorDetail/Progress";
import SponsorList from "../components/SponsorDetail/SponsorList";
import OtherPosts from "../components/SponsorDetail/OtherPosts";
import Button from "../components/Common/Button";
import { useNavigate } from "react-router-dom";
function SponsorDetail() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="w-[1280px] ">
        <Header />
        <ContentDetail />
        <Progress />
        <SponsorList />
      </div>
      <OtherPosts />
      <div className="my-[100px]">
        <Button
          title="후원하기 페이지로 돌아가기"
          mainColor
          small
          onClick={() => navigate("/sponsor")}
        />
      </div>
    </DefaultLayout>
  );
}

export default SponsorDetail;
