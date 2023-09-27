import React from "react";
import NavbarMain from "../components/Navbar";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import ProgressAndDropDown from "../components/ProgressAndDropDown";
import Images from "../components/Images";
import Inputs from "../components/Inputs";
import PopupModal from "../components/PopupModal";
import ProgressBar from "../components/ProgressBar";
import Switches from "../components/Switches";
import TableData from "../components/TableData";
import Profile from "../components/Profile";

const Layout = () => {
  return (
    <div className="m-5 flex flex-col gap-5">
      <NavbarMain />

      <div className="flex items-start w-[100%] justify-around flex-wrap">
        <div className="flex flex-col gap-3">
          <Buttons />
          <Cards />
          <ProgressAndDropDown />
          <Images />
        </div>

        <div className="flex flex-col gap-5">
          <Inputs />
          <PopupModal />
          <ProgressBar />
          <Switches />
          <TableData />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Layout;
