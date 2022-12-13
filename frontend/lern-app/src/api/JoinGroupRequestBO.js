import BusinessObject from "./BusinessObject";

export default class JoinGroupRequestBO extends BusinessObject {
  constructor(aOwnerId) {
    super();
    this.owner_id = aOwnerId;
    this.owner = null;
  }

  setPersonId(aOwnerId) {
    this.owner_id = aOwnerId;
  }

  getPersonId() {
    return this.owner_id;
  }

  setPerson(aOwner) {
    this.owner = aOwner;
  }

  getPerson() {
    return this.owner;
  }

  static fromJSON(joingrouprequests) {
    let result = [];

    if (Array.isArray(joingrouprequests)) {
      /* Multiple entries */
      joingrouprequests.forEach((f) => {
        Object.setPrototypeOf(f, JoinGroupRequestBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = joingrouprequests;
      Object.setPrototypeOf(f, JoinGroupRequestBO.prototype);
      result.push(f);
    }

    return result;
  }
}
