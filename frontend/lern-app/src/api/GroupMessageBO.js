import MessageBO from "./MessageBO";

class GroupMessageBO extends MessageBO {
    constructor(aOccurence) {
        super(aOccurence);
    }

  static fromJSON(intervals) {
    return super.fromJSON(intervals, GroupMessageBO);
  }
}

export default GroupMessageBO;