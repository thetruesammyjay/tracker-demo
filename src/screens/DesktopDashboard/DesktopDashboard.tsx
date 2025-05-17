import React from "react";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";

export const DesktopDashboard = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] relative flex flex-col md:flex-row">
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative z-50 h-full`}>
          <FrameByAnima onClose={() => setSidebarOpen(false)} />
        </div>
        <div className="flex-1 w-full">
          <button 
            className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <FrameWrapperByAnima />
        </div>
      </div>
    </div>
  );
};