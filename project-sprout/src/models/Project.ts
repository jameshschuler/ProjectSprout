import { ComponentTree } from "./ComponentTree";

export class Project {
  private _name: string;
  private _id: string;
  private _componentTree: ComponentTree;

  constructor(name: string) {
    this._name = name;

    this._id = ""; // TODO: randomly generate id (use uuid library)
    this._componentTree = new ComponentTree();
  }
}
