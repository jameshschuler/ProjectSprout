import { Project } from "./Project";

export interface Account {
  projects: Project[];
  isLocalOnly: boolean;
}
