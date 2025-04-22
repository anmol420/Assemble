import React from "react";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Peepee from "./components/Peepee";
import CreateAnewAccount from "./components/CreateAnewAccount";
import EmailVerification from "./components/EmailVerification";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PassRecovery from "./components/PassRecovery";
import IdentityVerify from "./components/IdentityVerify";
import ChangePass from "./components/ChangePass";
import UsernameRecovery from "./components/UsernameRecovery";
import UsernameSent from "./components/UsernameSent";
import DashBoard from "./components/DashBoard";
import AccountCenter from "./components/AccountCenter";
import Homepage from "./components/homepage/Homepage";
import NavConsole from "./components/ui/nav/NavConsole";
// import Header from "./components/Header";
// import HeaderPR from "./components/HeaderPR";
// import UsernameRecover from "./components/UsernameRecover";
import GamerTag from "./components/GamerTag";
import Password from "./components/Password";
import { NoticeCard } from "./components/homepage/NoticeCard";
import UsernameOTP from "./components/UsernameOTP";
import HeaderPR from "./components/HeaderPR";
import Sample from "./components/Sample";
// import Header from "./components/Header";
import BgmiPage from "./pages/BgmiPage";
import { Hero } from "./components/bgmipage/Hero";
// import { Hero } from "./components/homepage/Hero";
import NightHunter from "./pages/NightHunter";
import ProfileMenu from "../../Frontend/src/components/overlays/ProfileMenu"
import GamingProfile from "./components/GamingProfile"
const App = () => {
  return (
    <div className="overflow-hidden no-scrollbar">
      <Body/>
      {/* <Body/> */}
      {/* <Login/> */}
      {/* <DashBoard/> */}
      {/* <Homepage/> */}
      {/* <BgmiPage /> */}
       {/* <Hero/> */}
      {/* <AccountCenter /> */}
      {/* <AccountCenter /> */}
      {/* <NavConsole/> */}
      {/* <UsernameRecovery/> */}
      {/* <UsernameSent/> */}
      {/* <GamerTag/> */}
      {/* <NightHunter/> */}
      {/* <ProfileMenu/> */}
      {/* <GamingProfile/> */}
    </div>
    
  );
};

export default App;
