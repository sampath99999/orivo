import { FollowingProject } from "@/types/FollowingProject";
import { Project } from "@/types/Project";
import { useState } from "react";

function FollowList() {
    const [followList, setFollowList] = useState<FollowingProject[]>([
        {
            id: 1,
            title: "React 19",
            slug: "react_19",
            image:
                "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
            has_notification: true,
        },
    ]);
    return (
        <>
            <div className="">
                <h3 className="font-medium text-sm text-slate-600 mt-5">
                    Following
                </h3>
                {followList.length === 0 && (
                    <div className="flex flex-col items-center mt-5">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-yellow-400"
                        >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <p className="text-gray-500 text-sm">Nothing here</p>
                    </div>
                )}
                {followList.length > 0 && (
                    <div>
                        <ul className="mt-5">
                            {followList.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-2 "
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[30px] rounded-full"
                                    />
                                    <div className="flex items-center justify-between flex-1">
                                        <div className="">
                                            <p className="text-md font-medium">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {item.slug}
                                            </p>
                                        </div>
                                        <p className="bg-red-500 w-[10px] h-[10px] rounded-full"></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default FollowList;
