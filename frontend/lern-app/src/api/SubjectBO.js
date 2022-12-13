import BusinessObject from "./BusinessObject";

export default class SubjectBO extends BusinessObject {
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

  static fromJSON(subjects) {
    let result = [];

    if (Array.isArray(subjects)) {
      /* Multiple entries */
      subjects.forEach((f) => {
        Object.setPrototypeOf(f, SubjectBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = subjects;
      Object.setPrototypeOf(f, SubjectBO.prototype);
      result.push(f);
    }

    return result;
  }
}
