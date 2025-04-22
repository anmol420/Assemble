import React from "react";
import Logo from "../ui/svg/Logo";
import UpperNav from "../ui/nav/UpperNav";
import { HomeChar } from "../ui/svg/HomeChar";
import { Sidebar } from "../ui/Sidebar/Sidebar";
import Hero from "./Hero";
import { useEffect } from "react";
const Homepage = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/v1/tournament/getTournaments");
        console.log(response.data);
        
        if (response.status == 200 && response.data.success) {
          setEvents(response.data.data);
        }
        // console.log(events);//poe
        
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative no-scrollbar ">
      <div className="bg w-[100vw] h-[100vh] -z-10 bg-[#010101eb] no-scrollbar  fixed top-0 l-0">
        <img
          className="w-[1 00vw] h-[100vh] opacity-65 object-cover object-top "
          src="../../public/image.png"
          alt="img"
        />
      </div>
      <div className="z-20">
        <UpperNav name ="Homepage" />
      </div>
      <div className="z-0 ">
        <HomeChar />
      </div>
      <div className="relative flex mt-2 h-[90%] w-[100%] justify-start no-scrollbar">
        <div className="relative h-[75%] w-[8%]">
          <Sidebar />
        </div>
        <div className="mt-2 h-[90%] w-[90%] no-scrollbar ">
          
          <Hero name={'Ghostrider69'} />
        
        </div>
      </div>
    </div>
  );
};

export default Homepage;
