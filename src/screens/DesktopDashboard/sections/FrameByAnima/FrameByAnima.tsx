import {
  BarChart2Icon,
  HeadphonesIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
  TrendingUpIcon,
  WalletIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Switch } from "../../../../components/ui/switch";

interface FrameByAnimaProps {
  onClose?: () => void;
}

const navigationItems = [
  { icon: <LayoutDashboardIcon size={18} />, label: "Overview", active: true },
  { icon: <WalletIcon size={18} />, label: "Wallets", active: false },
  { icon: <TrendingUpIcon size={18} />, label: "Trade", active: false },
  { icon: <BarChart2Icon size={18} />, label: "Analytics", active: false },
  { icon: <SearchIcon size={18} />, label: "Explorer", active: false },
  { icon: <MailIcon size={18} />, label: "Messages", active: false },
  { icon: <HeadphonesIcon size={18} />, label: "Support", active: false },
  { icon: <SettingsIcon size={18} />, label: "Settings", active: false },
];

export const FrameByAnima = ({ onClose }: FrameByAnimaProps): JSX.Element => {
  return (
    <aside className="flex h-screen w-[267px] py-8 bg-white shadow-[4px_4px_4px_#0000000d]">
      <nav className="flex flex-col w-full items-center gap-[33px] px-[35px] relative">
        {/* Mobile close button */}
        <button
          className="md:hidden absolute top-2 right-2 p-2"
          onClick={onClose}
        >
          <XIcon size={24} />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-start justify-center gap-2.5 px-6 py-0 w-full">
          <div className="flex w-[101px] items-center justify-center gap-[3px]">
            <img
              className="relative w-[46.56px] h-[38.13px] ml-[-6.21px]"
              alt="Union"
              src="/union.svg"
            />
            <div className="relative w-fit mr-[-14.84px] font-['Prompt',Helvetica] font-semibold text-[#182122] text-2xl">
              Xport
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={`flex h-[54px] items-center gap-2 p-6 w-full justify-start rounded-[20px] ${
              item.active ? "bg-[#182122]" : ""
            }`}
          >
            {item.icon}
            <span className="font-['Prompt',Helvetica] font-medium text-lg">
              {item.label}
            </span>
          </Button>
        ))}

        {/* Theme Toggle */}
        <div className="flex flex-col items-start justify-center gap-2.5 px-6 py-0 w-full">
          <div className="inline-flex items-center gap-[9px] relative">
            <img
              className="relative w-[24.95px] h-[24.12px]"
              alt="Subtract"
              src="/subtract.svg"
            />
            <div className="relative w-[81px] h-11 flex items-center">
              <Switch />
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <Button
          variant="ghost"
          className="flex h-[54px] items-center gap-2 p-6 w-full justify-start rounded-[20px]"
        >
          <LogOutIcon size={18} />
          <span className="font-['Prompt',Helvetica] font-medium text-[#182122] text-lg">
            Log Out
          </span>
        </Button>
      </nav>
    </aside>
  );
};