import BusinessObject from "./BusinessObject";

export default class LearningPreferenceBO extends BusinessObject {
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

  static fromJSON(learningpreferences) {
    let result = [];

    if (Array.isArray(learningpreferences)) {
      /* Multiple entries */
      learningpreferences.forEach((f) => {
        Object.setPrototypeOf(f, LearningPreferenceBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = learningpreferences;
      Object.setPrototypeOf(f, LearningPreferenceBO.prototype);
      result.push(f);
    }

    return result;
  }
}
