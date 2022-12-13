
export default class BusinessObject {

    constructor() {
      this.id = 0;
    }
  
    setId(aId) {
      this.id = aId;
    }
  
    getId() {
      return this.id;
    }
  
    toString() {
      let result = "";
      for (var prop in this) {
        result += prop + ": " + this[prop] + " ";
      }
  
      return result;
    }
  }
