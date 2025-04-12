import { Link } from "react-router";
import SidebarMenu1 from "./sidebarbarMenu1";
import FollowList from "./followList";

function Sidebar() {
    return (
        <>
            <div className="p-2 border-r-2 border-slate-50 sidebar flex flex-col ">
                <Link className="flex items-center gap-2" to={'/'}>
                    <img src="/v1.svg" className="w-[30px]" alt="" />
                    <h1 className="text-3xl font-semibold">orivo</h1>
                </Link>

                {/* Trending and other buttons */}
                <SidebarMenu1 />

                {/* Follow List */}
                <FollowList />

                <div className="mt-auto text-center">
                    <p className="text-sm text-gray-400">2025 &copy; Codeveda</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;