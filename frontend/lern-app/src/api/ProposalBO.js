import BusinessObject from "./BusinessObject";

export default class ProposalBO extends BusinessObject {
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

  static fromJSON(proposals) {
    let result = [];

    if (Array.isArray(proposals)) {
      /* Multiple entries */
      proposals.forEach((f) => {
        Object.setPrototypeOf(f, ProposalBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = proposals;
      Object.setPrototypeOf(f, ProposalBO.prototype);
      result.push(f);
    }

    return result;
  }
}
