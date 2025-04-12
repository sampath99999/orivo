import { Project } from "@/types/Project";
import { useState } from "react";

function MyProjectsForRightSidebar() {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            title: "orivo",
            image: "/v1.svg",
            slug: "orivo.com",
        },
        {
            id: 2,
            title: "zentro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVM7cBdLjOd3EyD-NPEu43jIDk3FfbMsp97g&s",
            slug: "zentro_cms",
        }
    ]);
    return (
        <>
            <div className="mt-5 flex flex-col">
                <h3 className="font-medium text-sm text-slate-600 mt-5">
                    My Projects
                </h3>
                <ul className="mt-5 gap-3 flex flex-col">
                    {projects.map((project) => (
                        <li key={project.id} className="flex items-center gap-2">
                            <img src={project.image} className="w-[30px]" alt="" />
                            <div className="flex items-center justify-between flex-1">
                                <div className="">
                                    <p className="text-md font-medium">{project.title}</p>
                                    <p className="text-xs text-slate-400">
                                        {project.slug}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-xs text-gray-500 underline cursor-pointer hover:text-blue-500">
                                        View
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MyProjectsForRightSidebar;
