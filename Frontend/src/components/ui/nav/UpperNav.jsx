import { NavIcons } from "../icons/NavIcons";
import { ProfileIcon } from "../icons/ProfileIcon";
import Logo from "../svg/Logo";
import {NavBell} from "../svg/NavBell";
import { NavPayment } from "../svg/NavPayment";
import NavConsole from "./NavConsole";

const UpperNav = (props) => {
  return (
    <div className="relative h-[10vh] w-[100vw] ">
      <div className="top-4 px-4 w-full fixed flex justify-between z-10 ">
        <div className="w-[12vw]">
            <Logo/>
        </div>
        <div className="relative w-[30vw] z-10">
            <NavConsole name={props.name}/>
        </div>
        <div className=" w-[11vw]  flex justify-between items-center z-10">
            <NavIcons icons={<NavPayment/>} />
            <NavIcons icons={<NavBell/>}/>
            <ProfileIcon/>
        </div>
    </div>
    </div>
  );
};
export default UpperNav;
