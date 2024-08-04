import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sponsor from "./pages/Sponsor";
import Mentor from "./pages/Mentor";
import MyPage from "./pages/MyPage";
import SponsorRegister from "./pages/SponsorRegister";
import Challenge from "./pages/Challenge";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/challenge" element={<Challenge />} />
                <Route path="/mentor-intro" element={<Mentor />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/sponsor-register" element={<SponsorRegister />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
