import { Project } from "./Project";

export type Account = {
  projects: Project[];
  isLocalOnly: boolean;
};
