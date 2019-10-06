import { ComponentTree } from "./ComponentTree";
const uuidv1 = require("uuid/v1");

/**
 * A class representing a react project / app
 */
export class Project {
  private _name: string;
  private _description?: string;
  private _id: string;
  private _componentTree: ComponentTree;

  /**
   *
   * @param name Name of the project
   * @param description Description of the project
   */
  constructor(name: string, description?: string) {
    this._name = name;
    this._description = description;
    this._id = uuidv1();
    this._componentTree = new ComponentTree();
  }

  public get name(): string {
    return this._name;
  }

  public convert(): any {
    return {
      id: this._id,
      name: this._name,
      description: this._description
    };
  }
}
