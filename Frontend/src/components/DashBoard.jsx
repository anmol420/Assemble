import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameDetails, setGameDetails] = useState({});
  const [showGameOptions, setShowGameOptions] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
//  console.log();
 
  // Handle game selection
  const handleGameClick = (game) => {
    setSelectedGame(game);
    setShowGameOptions(false);
    setGameDetails((prevDetails) => ({
      ...prevDetails,
      [game]: prevDetails[game] || "", // Ensure it has a default value
    }));
  };
  console.log(gameDetails[selectedGame] );
  // const gameid = gameDetails[selectedGame];

  // Handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setGameDetails((prevDetails) => ({
      ...prevDetails,
      [selectedGame]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedGame || !gameDetails[selectedGame]) {
      setErrorMessage("Please select a game and enter your ID.");
      return;
    }
  
    const userGameID = gameDetails[selectedGame]; // User-entered game ID
  
    try {
      const response = await axios.post(
        `/api/v1/users/games/${selectedGame}`,
        { [`${selectedGame}Id`]: userGameID },
        { withCredentials: true }
      );
  
      if (response.status === 200 && response.data.success) {
        console.log("API Response:", response.data);
        navigate("/browse");
      } else {
        setErrorMessage(response.data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };
  

  return (
    <div className="main relative">
      {/* Navbar */}
      <div className="navbar absolute top-0 left-0 p-4">
        <div className="assemble text-white text-2xl font-bold">ASSEMBLE</div>
        <div className="GUI text-white text-lg">GAMEZONE UNITED INDIA</div>
      </div>

      <div
        className="back absolute w-full text-2xl text-white mt-2 text-end cursor-pointer"
        onClick={() => console.log("Back button clicked")}
      >
        Back &lt;
      </div>

      {/* Main Content */}
      <div className="black h-screen w-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="black h-[90%] w-[50%] flex-col mt-9 border-slate-400 border-2 flex justify-center items-center rounded-2xl bg-[#ffffff] bg-opacity-15 backdrop-blur-md">
          
          {/* Profile Section */}
          <div className="up flex flex-col items-center justify-center space-y-6">
            <div className="t1 text-3xl tracking-widest">GAMING PROFILE</div>
            <div className="t2 text-3xl text-white">GHOSTRIDER69</div>
          </div>

          {/* Game Selection */}
          <div className="down h-[50%] mt-5 w-[90%] flex border-2 rounded-xl border-black">
            <div className="left w-[40%] flex flex-col rounded-r-xl h-full border-r-2 border-black relative">
              <div className="selector1 px-16 bg-[#ffffff] h-12 tracking-wide font-[arial] flex text-xs items-center border-b-2 border-black">
                SELECTED GAMES
              </div>

              {/* Game Options (Dropdown) */}
              {showGameOptions && (
                <div className="game-options absolute top-12 left-0 flex-col gap-28 ml-80 bg-white border border-black rounded-lg shadow-lg w-full z-10">
                  {["Battleground Mobile India", "Call of Duty Mobile", "Valorant PC", "FreeFire Mobile", "Asphalt 9"].map(
                    (game, index) => (
                      <div
                        key={index}
                        className="game-item h-10 hover:bg-gray-300 rounded-lg flex justify-center items-center border-b border-gray-200 cursor-pointer"
                        onClick={() => handleGameClick(game)}
                      >
                        {game.toUpperCase()}
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Selected Games List */}
              {["Battleground Mobile India", "Call of Duty Mobile", "Valorant PC", "FreeFire Mobile", "Asphalt 9"].map(
                (game, index) => (
                  <div
                    key={index}
                    className="game-item h-12 hover:bg-black hover:text-white flex justify-center items-center border-b-2 border-black text-xs cursor-pointer"
                    onClick={() => handleGameClick(game)}
                  >
                    {game.toUpperCase()}
                  </div>
                )
              )}
            </div>

            {/* Game Details */}
            {selectedGame && (
              <div className="game-details flex flex-col justify-center items-center w-[60%]">
                <img
                  src={
                    selectedGame === "Battleground Mobile India"
                      ? "/pubg.svg"
                      : selectedGame === "Call of Duty Mobile"
                      ? "/codm.svg"
                      : selectedGame === "Valorant PC"
                      ? "/card.png"
                      : selectedGame === "FreeFire Mobile"
                      ? "/freefire.svg"
                      : "/card.svg"
                  }
                  alt={`Image for ${selectedGame}`}
                  className="rounded-xl mt-5 h-48 w-auto"
                />

                <input
                  type="text"
                  value={gameDetails[selectedGame] || ""}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${selectedGame} ID`}
                  className="mt-5 h-10 w-72 text-center border border-black rounded-md"
                />
              </div>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && <div className="text-red-500 mt-3">{errorMessage}</div>}

          {/* Submit Button */}
          <div className="submit text-white h-10 py-1 rounded-lg bg-[#000000] w-[90%] text-center mt-7">
            <button type="button" onClick={handleSubmit}>
              CONTINUE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
