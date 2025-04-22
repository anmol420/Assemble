import { SidebarIcon } from "../icons/SidebarIcons";
import { HomeIcon } from "../svg/HomeIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { SettingIcon } from "../svg/SettingsIcon";
import { YoutubeIcon } from "../svg/YoutubeIcon";
import { useNavigate } from "react-router-dom";
export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="relative h-[85%] w-[3.2%] ">
      <div className=" fixed top-20 left-6 h-[85%] w-[3.2%] rounded-xl bg-[#00000086] flex flex-col items-center justify-between p-3">
        <div>
          <SidebarIcon icons={<HomeIcon />} />
        </div>
        <div className="gap-3 flex flex-col">
          <SidebarIcon icons={<YoutubeIcon />} />
          <SidebarIcon icons={<InstaIcon />} />
          <SidebarIcon icons={<YoutubeIcon />} />
          <SidebarIcon icons={<InstaIcon />} />
        </div>
        <div onClick={() => navigate("/AccountCenter")}>
          <SidebarIcon icons={<SettingIcon />} />
        </div>
      </div>
    </div>
  );
}
