import BusinessObject from "./BusinessObject";

export default class GroupBO extends BusinessObject {
  constructor(aGroupName) {
    super();
    this.group_name = aGroupName;
  }

  setGroupName(aGroupName) {
    this.group_name = aGroupName;
  }

  getGroupName() {
    return this.group_name;
  }

 

  static getEmptyGroup() {
    let group = new GroupBO("", 0.0, "");
    return group;
  }

  static fromJSON(groups) {
    let result = [];

    if (Array.isArray(groups)) {
      /* Multiple entries */
      groups.forEach((f) => {
        Object.setPrototypeOf(f, GroupBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = groups;
      Object.setPrototypeOf(f, GroupBO.prototype);
      result.push(f);
    }

    return result;
  }
}