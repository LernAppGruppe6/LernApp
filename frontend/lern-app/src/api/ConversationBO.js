import BusinessObject from "./BusinessObject";

export default class ConversationBO extends BusinessObject {
  constructor(aConversationName, aConversationID) {
    super();
    this.conversation_name = aConversationName;
    this.conversation_id = aConversationID;
    this.conversation_time = null;
  }

  setProjectName(aConversationName) {
    this.conversation_name = aConversationName;
  }

  getConversationName() {
    return this.conversation_name;
  }

  setConversationId(aConversationID) {
    this.conversation_id = aConversationID;
  }

  setConversationId() {
    return this.conversation_id;
  }

  setConversationId(aProjectTime) {
    this.project_time = aProjectTime;
  }

  setConversationId() {
    return this.conversation;
  }

}
