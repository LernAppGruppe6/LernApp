import BusinessObject from "./BusinessObject";

class StudentBO extends BusinessObject {
  constructor(aFirstName, aLastName, aEmail, aUserName) {
    super();
    this.first_name = aFirstName;
    this.last_name = aLastName;
    this.email = aEmail;
    this.user_name = aUserName;
  }

  setFirstName(aFirstName) {
    this.first_name = aFirstName;
  }

  getFirstName() {
    return this.first_name;
  }

  setLastName(aLastName) {
    this.last_name = aLastName;
  }

  getLastName() {
    return this.last_name;
  }

  setEmail(aEmail) {
    this.email = aEmail;
  }

  getEmail() {
    return this.email;
  }

  setUserName(aUserName) {
    this.user_name = aUserName;
  }

  getUserName() {
    return this.user_name;
  }


  static fromJSON(students) {
    let result = [];

    if (Array.isArray(students)) {
      /* Multiple entries */
      students.forEach((f) => {
        Object.setPrototypeOf(f, StudentBO.prototype);
        result.push(f);
      });
    } else {
      /* Single entry */
      let f = students;
      Object.setPrototypeOf(f, StudentBO.prototype);
      result.push(f);
    }

    return result;
  }
}

export default StudentBO;