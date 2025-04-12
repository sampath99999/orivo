import { link } from "fs";
import { Link } from "react-router";

function SidebarMenu1() {
    const menuItems = [
        {
            id: 1,
            title: "Trending",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            ),
            link: "/",
        },
        {
            id: 2,
            title: "Explore",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
            ),
            link: "/",
        },
        {
            id: 3,
            title: "Following",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            ),
            link: "/",
        },
        {
            id: 4,
            title: "Notifications",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            ),
            link: "/",
        },
    ];
    return (
        <>
            <div className="">
                <ul className="list-none mt-5 border-b border-slate-50">
                    {menuItems.map((item) => (
                        <li key={item.id} className="transition-all my-5">
                            <Link
                                to={item.link}
                                className="flex items-center gap-2"
                            >
                                {item.icon}
                                <p className="text-sm font-medium">
                                    {item.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SidebarMenu1;
