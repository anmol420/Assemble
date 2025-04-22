import React, { useState } from "react";
import { HomeIcon } from "./ui/svg/HomeIcon";
import { GradientText } from "./ui/GradientElements/GradientText";
import UpperNav from "./ui/nav/UpperNav";
import { Sidebar } from "./ui/Sidebar/Sidebar";
import NavConsole from "./ui/nav/NavConsole";
import { use } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AccountCenter = () => {
  const [isPersonalInfoClicked, setIsPersonalInfoClicked] = useState(true);
  const [isEsportsInsight, setisEsportsInsight] = useState(false);
  const [selectedItem, setselectedItem] = useState("Name");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [prevpass, setPrevpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const navigate = useNavigate();
  // Handle click to toggle the Personal Information section
  const handlePersonalInfoClick = () => {
    setIsPersonalInfoClicked(true); // Show Personal Info
    setisEsportsInsight(false); // Hide Esports Insight
    setselectedItem("Name");
  };
   
  const handleEsportsInsightClick = () => {
    setisEsportsInsight(true); // Show Esports Insight
    setIsPersonalInfoClicked(false); // Hide Personal Info
    setselectedItem("Badge");
  };
  const handleItemClick = (item) => {
    setselectedItem(item);
  };

  const images = [
    "https://res.cloudinary.com/dzyezryhf/image/upload/v1740225044/lolehxp76rxvfiszogkc.svg",
    "https://res.cloudinary.com/dzyezryhf/image/upload/v1740224292/vrdeawxrn1dqcm8a8khh.svg",
    "https://res.cloudinary.com/dzyezryhf/image/upload/v1740227482/wwyfuhpd92jgcmx0bgy5.svg",
    "https://res.cloudinary.com/dzyezryhf/image/upload/v1740227631/hq64xu2nudgs8eej9x7i.svg",
    "https://res.cloudinary.com/dzyezryhf/image/upload/v1740224855/zxzrofqdgyemxmbdwo6s.svg",
  ];

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleNamechange = async () => {
    const newName = name;

    try {
      const response = await axios.post("/api/v1/users/addDetails", {
        name: newName,
      });
      console.log(response);
    } catch (error) {}
  };
  const handleUsernameChange = async () => {
    try {
      const response = await axios.patch("/api/v1/users/changeUsername", {
        newUsername: username,
      });
      console.log("username changed");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDobchange = async () => {
    const newDOb = dob;
    try {
      const response = await axios.post("/api/v1/users/addDetails", {
        dob: newDOb,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailchange = async () => {
    try {
      const response = await axios.patch("/api/v1/users/changeEmail", {
        newEmail: email,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailverify = async () => {
    console.log(otp);

    const otpValue = otp.join("");
    console.log(otpValue);

    try {
      const response = await axios.post("/api/v1/users/verifyNewEmail", {
        newEmail: email,
        code: otpValue,
      });
      console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };
  const handlePasswordChange = async () => {
    try {
      const response = await axios.patch("/api/v1/users/changePassword", {
        oldPassword: prevpass,
        newPassword: newpass,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/v1/users/logout");
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div className="ACMAIN relative h-screen">
        {/* Black Background Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>

        {/* Upper Navigation */}
        <UpperNav name="Account Center" />

        {/* Sidebar */}
        <Sidebar />

        {/* Frosted Glass Divs Container */}
        <div className="absolute inset-0 flex flex-wrap justify-center items-center mt-[100px] gap-5 ">
          {/* First Frosted Glass Div */}
          <div className="frosted-glass -mt-14 h-[98%] w-[22%] rounded-lg p-3 ml-12">
            <div className="AC-head-text text-white">Account Center</div>
            <div className="AC-text text-white">
              Take a look at your Esports career and personal info , and enjoy
              the awesome vibe of tournaments with{" "}
              <span className="AC-span">assemble!</span>
            </div>
            <div
              className={`personal-info pl-2 pt-2 pb-2 w-full  cursor-pointer mt-8 ${
                isPersonalInfoClicked
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
              onClick={handlePersonalInfoClick}
            >
              Personal Information
            </div>
            <div
              className={`personal-info  pl-2 pt-2 pb-2 w-full  cursor-pointer mt-2 ${
                isEsportsInsight ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={handleEsportsInsightClick}
            >
              Esports Insight
            </div>
            <div
              className="text-ASSred mt-96 ml-2 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>

          {/* Second Frosted Glass Div */}
          <div className="frosted-glass -mt-14 h-[98%] w-[22%] rounded-lg p-3">
            {/* Conditionally Render the Title and Description when Personal Info is clicked */}
            {isPersonalInfoClicked && (
              <>
                <div className="AC-head-text text-white">
                  Personal Information
                </div>
                <div className="AC-text text-white ">
                  Your personal information remains private to you and persons
                  you are allowing to show credentials to. Read our
                  <span className="AC-span"> privacy policy</span>
                </div>
                <div className="space-y-2 -mt-10">
                  {[
                    "",
                    "Name",
                    "Username",
                    "Date Of Birth",
                    "Email Id",
                    "Profile Picture",
                    "Password And Security",
                  ].map((option, index) => (
                    <div
                      key={index}
                      className={`per-info-options pl-2 pt-2 pb-2 w-full cursor-pointer ${
                        index === 0
                          ? "bg-[rgba(0, 0, 0, 0.6]  text-white" // First item always black background
                          : selectedItem === option
                          ? "bg-white text-black" // Selected item gets white background and black text
                          : "bg-black text-white" // Default black background and white text
                      }`}
                      onClick={() => handleItemClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </>
            )}

            {isEsportsInsight && (
              <>
                <div className="AC-head-text text-white">Esports Insight</div>
                <div className="AC-text text-white">
                  Your personal information remains private to you and persons
                  you are allowing to show credentials, read{" "}
                  <span className="AC-span">privacy policy</span>
                </div>
                <div className="space-y-2 -mt-10">
                  {[
                    "",
                    "Badge",
                    "BGMI",
                    "CODM",
                    "VALORANT",
                    "FREEFIRE",
                    "ASPHALT 9",
                  ].map((option, index) => (
                    <div
                      key={index}
                      className={`per-info-options pl-2 pt-2 pb-2 w-full cursor-pointer ${
                        index === 0
                          ? "bg-[rgba(0, 0, 0, 0.6] text-white" // First item always black background
                          : selectedItem === option
                          ? "bg-white text-black" // Selected item gets white background and black text
                          : "bg-black text-white" // Default black background and white text
                      }`}
                      onClick={() => handleItemClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Third and Fourth Frosted Glass Divs Container */}
          <div className="flex flex-col -mt-14 h-[98%] w-[44%] gap-4">
            {/* Third Frosted Glass Div */}
            <div
              className={`frosted-glass h-full flex-grow rounded-lg p-3 pl-24 pr-24 ${
                isPersonalInfoClicked ? "h-[49%]" : "h-full"
              }`}
            >
              {selectedItem && (
                <div className="text-white">
                  {/* Render Different Elements for Personal Information */}
                  {isPersonalInfoClicked && selectedItem === "Name" && (
                    <div className="flex flex-col gap-8">
                      <div>
                        <div className="AC-head-text"> Name</div>
                        <div className="AC-text ">
                          Could you please provide your full name exactly as it
                          is listed on your official documents?
                        </div>
                      </div>
                      <div>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button
                            className="AC-buttons-save w-52 text-black bg-ASSgreen"
                            onClick={handleNamechange}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                      <div className="AC-text">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isPersonalInfoClicked && selectedItem === "Username" && (
                    <div className="flex flex-col gap-8">
                      <div>
                        <div className="AC-head-text"> Username</div>
                        <div className="AC-text ">
                          Creating a unique username which differentiate you
                          from another , build your own identity
                        </div>
                      </div>
                      <div>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                          onChange={(e) => setuserName(e.target.value)}
                          value={username}
                        />
                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button
                            className="AC-buttons-save w-52 text-black bg-ASSgreen"
                            onClick={handleUsernameChange}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                      <div className="AC-text">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isPersonalInfoClicked &&
                    selectedItem === "Date Of Birth" && (
                      <div className="flex flex-col gap-8">
                        <div>
                          <div className="AC-head-text"> Date</div>
                          <div className="AC-text ">
                            You can show off your gaming skills and no one will
                            judge you for your age!
                          </div>
                        </div>
                        <div>
                          <input
                            type="date"
                            className=" AC-input w-full p-2 text-black"
                            placeholder=""
                            onChange={(e) => setDob(e.target.value)}
                            value={dob}
                          />
                          <div className="flex mt-5 justify-between">
                            <button className="AC-buttons-cancel w-52 text-white">
                              Cancel
                            </button>
                            <button
                              className="AC-buttons-save w-52 text-black bg-ASSgreen"
                              onClick={handleDobchange}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="AC-text">ASSEMBLE UID : 123456</div>
                      </div>
                    )}
                  {isPersonalInfoClicked && selectedItem === "Email Id" && (
                    <div className="  flex-col ">
                      <div>
                        <div className="AC-head-text"> Email</div>
                        <div className="AC-text ">
                          You can catch all kinds of notifications about esports
                          tournaments and series!
                        </div>
                      </div>
                      <div>
                        <input
                          type="email"
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <div className="flex justify-center">
                          <button
                            className="AC-buttons-cancel w-52 text-white mt-2 align-middle"
                            onClick={handleEmailchange}
                          >
                            Save
                          </button>
                        </div>

                        <div className="flex justify-between text-black">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-${index}`}
                              className="input-otp mt-2 rounded-md"
                              placeholder="_"
                              maxLength="1"
                              value={digit}
                              onChange={(e) => handleOtpChange(e, index)}
                            />
                          ))}
                        </div>
                        <div className="flex mt-2 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button
                            className="AC-buttons-save w-52 text-black bg-ASSgreen"
                            onClick={handleEmailverify}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                      <div className="AC-text">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isPersonalInfoClicked &&
                    selectedItem === "Profile Picture" && (
                      <div className="flex flex-col gap-5">
                        <div>
                          <div className="AC-head-text"> Profile Picture</div>
                          <div className="AC-text ">
                            This will totally give you a unique vibe in esports!
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center  ">
                            <div className="AC-pp h-20 w-20 bg-white"></div>
                          </div>

                          <div className="flex mt-5 justify-between">
                            <button className="AC-buttons-cancel w-52 text-white">
                              Cancel
                            </button>
                            <button className="AC-buttons-save w-52 text-black bg-ASSgreen">
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="AC-text">ASSEMBLE UID : 123456</div>
                      </div>
                    )}
                  {isPersonalInfoClicked &&
                    selectedItem === "Password And Security" && (
                      <div className="flex flex-col gap-1">
                        <div>
                          <div className="AC-head-text">
                            Password And Security
                          </div>
                          <div className="AC-text ">
                            Keep your account safe by creating a strong
                            password!
                          </div>
                        </div>
                        <div className="flex-col">
                          <input
                            type="text"
                            className=" AC-input w-full p-1 text-black mt-1 mb-1"
                            placeholder="Previous Password"
                            onChange={(e) => setPrevpass(e.target.value)}
                            value={prevpass}
                          />
                          <input
                            type="text"
                            className=" AC-input w-full p-1 text-black mt-1 mb-1"
                            placeholder="New Password"
                            onChange={(e) => setNewpass(e.target.value)}
                            value={newpass}
                          />
                          <input
                            type="text"
                            className=" AC-input w-full p-1 text-black mt-1 mb-1"
                            placeholder="Confirm New Password"
                            onChange={(e) => setConfirmpass(e.target.value)}
                            value={confirmpass}
                          />
                        </div>
                        <div className="flex mt-3 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button
                            className="AC-buttons-save w-52 text-black bg-ASSgreen"
                            onClick={handlePasswordChange}
                          >
                            Save
                          </button>
                        </div>

                        <div className="AC-text mt-0">
                          ASSEMBLE UID : 123456
                        </div>
                      </div>
                    )}
                  {/* Render Different Elements for Esports Insight */}
                  {isEsportsInsight && selectedItem === "Badge" && (
                    <div>
                      <div className="flex flex-col gap-5">
                        <div>
                          <div className="AC-head-text">Choose A Badge</div>
                          <div className="AC-text ">
                            Pick a badge that shows off your gaming skills!
                          </div>
                        </div>
                        <div>
                          <select
                            className="AC-input w-full p-2 text-black"
                            defaultValue="Choose your Badge"
                          >
                            <option className="AC-input w-full p-2 text-black">
                              Team Leader
                            </option>
                            <option className="AC-input w-full p-2 text-black">
                              In game Leader
                            </option>
                            <option className="AC-input w-full p-2 text-black">
                              Sniper Master
                            </option>
                            <option className="AC-input w-full p-2 text-black">
                              Blind Rusher
                            </option>
                          </select>

                          <div className="flex mt-5 justify-between">
                            <button className="AC-buttons-cancel w-52 text-white">
                              Cancel
                            </button>
                            <button className="AC-buttons-save w-52 text-black bg-ASSgreen ">
                              Save
                            </button>
                          </div>
                          <div className="AC-text-two text-3xl">Overview</div>
                        </div>
                        <div className="AC-text pt-80">
                          ASSEMBLE UID : 123456
                        </div>
                      </div>
                    </div>
                  )}
                  {isEsportsInsight && selectedItem === "BGMI" && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="AC-head-text">
                          Battleground Mobile India
                        </div>
                        <div className="AC-text ">
                          Check out all the info about your BGMI account, plus
                          our series and tournaments right here!
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-center text-ASSgreen">
                          BGMI ID
                        </p>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                        />

                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button className="AC-buttons-save w-52 text-black bg-ASSgreen ">
                            Save
                          </button>
                        </div>
                        <div className="AC-text-two text-3xl">Overview</div>
                      </div>
                      <div className="AC-text pt-80">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isEsportsInsight && selectedItem === "CODM" && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="AC-head-text">Call Of Duty Mobile</div>
                        <div className="AC-text ">
                          Check out everything about your CODM account, series,
                          and tournaments in one spot!
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-center text-ASSblue">
                          CODM ID
                        </p>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                        />

                        <div className="flex mt-5  justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button className="AC-buttons-save w-52 text-black bg-ASSblue">
                            Save
                          </button>
                        </div>
                        <div className="AC-text-two text-3xl">Overview</div>
                      </div>
                      <div className="AC-text pt-80">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isEsportsInsight && selectedItem === "VALORANT" && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="AC-head-text">Valorant</div>
                        <div className="AC-text ">
                          Check out all the info about your Valorant account,
                          plus our series and tournaments right here!
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-center text-white">
                          PLAYER ID
                        </p>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                        />

                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button className="AC-buttons-save w-52 text-black bg-white">
                            Save
                          </button>
                        </div>
                        <div className="AC-text-two text-3xl">Overview</div>
                      </div>
                      <div className="AC-text pt-80">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isEsportsInsight && selectedItem === "FREEFIRE" && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="AC-head-text">Freefire</div>
                        <div className="AC-text ">
                          Check out all the info about your Valorant account,
                          plus our series and tournaments right here!
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-center text-ASSred">
                          PLAYER ID
                        </p>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                        />

                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button className="AC-buttons-save w-52 text-black bg-ASSred">
                            Save
                          </button>
                        </div>
                        <div className="AC-text-two text-3xl">Overview</div>
                      </div>
                      <div className="AC-text pt-80">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {isEsportsInsight && selectedItem === "ASPHALT 9" && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <div className="AC-head-text">ASPHALT 9</div>
                        <div className="AC-text ">
                          Check out all the info about your Valorant account,
                          plus our series and tournaments right here!
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-center text-ASSyellow">
                          PLAYER ID
                        </p>
                        <input
                          className=" AC-input w-full p-2 text-black"
                          placeholder="Username"
                        />

                        <div className="flex mt-5 justify-between">
                          <button className="AC-buttons-cancel w-52 text-white">
                            Cancel
                          </button>
                          <button className="AC-buttons-save w-52 text-black bg-ASSyellow">
                            Save
                          </button>
                        </div>
                        <div className="AC-text-two text-3xl">Overview</div>
                      </div>
                      <div className="AC-text pt-80">ASSEMBLE UID : 123456</div>
                    </div>
                  )}
                  {/* Add more for other selected items */}
                </div>
              )}
            </div>

            {/* Fourth Frosted Glass Div */}
            {!isEsportsInsight && (
              <div className="frosted-glass flex-col h-full text-white text-xs flex-grow rounded-lg p-3 pl-24 pr-24">
                <div>
                  <div className="AC-head-text">Esports Card Front </div>
                  <div className="AC-text ">
                    Make your personalized card for esports career
                  </div>
                </div>

                <div>
                  {/* AC-cards div with dynamic background */}
                  <div
                    className="AC-cards w-[75%] h-40 rounded-lg bg-cover bg-center text-xs ml-14"
                    style={{
                      backgroundImage: `url(${selectedImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="text-white   flex-col pt-[23%] pl-20 ">
                      <div className="flex-col gap-16 p-1 pl-3 text-xs">
                        <div className="">
                          NAME : <span className="text-black">{name}</span>
                        </div>
                        <div className="">
                          DOB : <span className="text-black">{dob}</span>{" "}
                        </div>
                        <div className="">
                          EMAIL ID : <span className="text-black">{email}</span>{" "}
                        </div>
                      </div>
                    </div>
                    {/* Optionally, you can add content inside AC-cards */}
                  </div>

                  {/* Choose-bg section with Tailwind CSS */}
                  <div className="choose-bg flex gap-4 w-full mt-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="Choose-bg-items h-14 w-20  rounded- cursor-pointer hover:opacity-75"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        onClick={() => handleImageSelect(image)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCenter;
