import { Outlet } from "react-router";
import Sidebar from "./sidebar";
import "./index.css";
import SidebarRight from "./rightSidebar/sidebarRight";

function HomePage() {
    return (
        <>
           <div className="flex min-h-screen container mx-auto">
                <Sidebar />
                <div className="flex-1 content p-2">
                    <Outlet />
                </div>
                <SidebarRight />
            </div>
        </>
    );
}

export default HomePage; 