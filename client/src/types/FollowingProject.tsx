import { Project } from "./Project";

export interface FollowingProject extends Project{
    has_notification: boolean;
}