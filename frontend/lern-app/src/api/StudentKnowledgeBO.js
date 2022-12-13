import BusinessObject from "./BusinessObject";

export default class StudentKnowledgeBO extends BusinessObject {
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

  static fromJSON(studentknowledges) {
    let result = [];

    if (Array.isArray(studentknowledges)) {
      /* Multiple entries */
      studentknowledges.forEach((f) => {
        Object.setPrototypeOf(f, StudentKnowledgeBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = studentknowledges;
      Object.setPrototypeOf(f, StudentKnowledgeBO.prototype);
      result.push(f);
    }

    return result;
  }
}
