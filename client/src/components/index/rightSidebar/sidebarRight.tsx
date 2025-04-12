import { Input } from "../../ui/input";
import MyProjectsForRightSidebar from "./myProjects";
import ProfileDropdown from "./profileDropdown";

function SidebarRight() {
    return (
        <>
            <div className="p-2 border-s-2 border-slate-50 sidebar sidebar2 flex flex-col ">
                {/* search bar */}
                <div className="flex items-center">
                    <Input placeholder="Search..." />
                    {/* Profile Dropdown */}
                    <ProfileDropdown />
                </div>
                {/* Right sidebar my projects list */}
                <MyProjectsForRightSidebar />

                <div className="mt-auto">
                    {/* Links */}
                    <div className="mt-10">
                        <div className="flex flex-wrap gap-2">
                            <a
                                href="#"
                                className="text-xs text-slate-500 underline"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-xs text-slate-500 underline"
                            >
                                Help
                            </a>
                            <a
                                href="#"
                                className="text-xs text-slate-500 underline"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-xs text-slate-500 underline"
                            >
                                Terms and Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarRight;
