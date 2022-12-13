import ConversationBO from './ConversationBO';
import GroupBO from './GroupBO';
import GroupMessageBO from './GroupMessageBO';
import JoinGroupRequestBO from './JoinGroupRequestBO';
import LearningPreferenceBO from './LearningPreferenceBO';
import MessageBO from './MessageBO';
import ProposalBO from './ProposalBO';
import StudentBO from './StudentBO';
import StudentBO from './StudentBO';
import StudentKnowledgeBO from './StudentKnowledgeBO';
import SubjectBO from './SubjectBO';


export default class API {

  // Singelton instance
  static #api = null;

  // Local Python backend
  #ServerBaseURL = 'http://127.0.0.1:5000/timetrackingapp/api';

  //Conversation related
  #getConversationsURL = () => `${this.#ServerBaseURL}/conversations`;
  #getConversationURL = (id) => `${this.#ServerBaseURL}/conversations/${id}`;
  #getConversationURL = (id) => `${this.#ServerBaseURL}/conversations/${id}`;
  #updateConversationURL = (id) => `${this.#ServerBaseURL}/conversations/${id}`;
  #deleteConversationURL = (id) => `${this.#ServerBaseURL}/conversations/${id}`;

  // Group related
  #getGroupsURL = () => `${this.#ServerBaseURL}/groups`;
  #getGroupURL = () => `${this.#ServerBaseURL}/groups`;
  #updateGroupURL = (id) => `${this.#ServerBaseURL}/groups/${id}`;
  #addGroupMembersURL = (id) => `${this.#ServerBaseURL}/groups/${id}/members`;
  #deleteGroupMembersURL = (id, memberId) => `${this.#ServerBaseURL}/groups/${id}/members/${memberId}`;

  // GroupMessage related
  #getGroupMessagesURL = () => `${this.#ServerBaseURL}/groupmessages`;
  #getGroupMessageURL = (id) => `${this.#ServerBaseURL}/groupmessages/${id}`;
  #getGroupMessageURL = (id) => `${this.#ServerBaseURL}/groupmessages/${id}`;
  #addGroupMessageURL = () => `${this.#ServerBaseURL}/groupmessages`;
  #updateGroupMessageURL = (id) => `${this.#ServerBaseURL}/groupmessages/${id}`;
  #deleteGroupMessageURL = (id) => `${this.#ServerBaseURL}/groupmessages/${id}`;

  // JoinGroupRequest related
  #getJoinGroupRequestsURL = () => `${this.#ServerBaseURL}/joingrouprequests`;
  #getJoinGroupRequestURL = (id) => `${this.#ServerBaseURL}/joingrouprequests/${id}`;
  #addJoinGroupRequestURL = () => `${this.#ServerBaseURL}/joingrouprequests`;
  #updateJoinGroupRequestURL = (id) => `${this.#ServerBaseURL}/joingrouprequests/${id}`;
  #deleteJoinGroupRequestURL = (id) => `${this.#ServerBaseURL}/joingrouprequests/${id}`;

  // Learningpreference related
  #getLearningPreferencesURL = () => `${this.#ServerBaseURL}/learningpreferences`;
  #getLearningPreferenceURL = (id) => `${this.#ServerBaseURL}/learningpreferences/${id}`;
  #addLearningPreferenceURL = () => `${this.#ServerBaseURL}/learningpreferences`;
  #deleteLearningPreferenceURL = (id) => `${this.#ServerBaseURL}/learningpreferences/${id}`;
  #updateLearningPreferenceURL = (id) => `${this.#ServerBaseURL}/learningpreferences/${id}`;

  // Message related
  #getMessagesURL = () => `${this.#ServerBaseURL}/messages`;
  #getMessageURL = (id) => `${this.#ServerBaseURL}/messages/${id}`;
  #updateMessageURL = (id) => `${this.#ServerBaseURL}/messages/${id}`;
  #addMessageURL = () => `${this.#ServerBaseURL}/messages`;
  #deleteMessageURL = (id) => `${this.#ServerBaseURL}/messages/${id}`;

  // ProposalBO related
  #getProposalsURL = () => `${this.#ServerBaseURL}/proposals`;
  #getProposalURL = (id) => `${this.#ServerBaseURL}/proposals/${id}`;
  #updateProposalURL = (id) => `${this.#ServerBaseURL}/proposals/${id}`;
  #addProposalURL = () => `${this.#ServerBaseURL}/proposals`;
  #deleteProposalURL = (id) => `${this.#ServerBaseURL}/proposals/${id}`;

  // Students related
  #getStudentsURL = () => `${this.#ServerBaseURL}/students`
  #getStudentURL = (id) => `${this.#ServerBaseURL}/students/${id}`;
  #addStudentURL = () => `${this.#ServerBaseURL}/students`;
  #updateStudentURL = () => `${this.#ServerBaseURL}/students`;
  #deleteStudentURL = (id) => `${this.#ServerBaseURL}/students/${id}`;

  // StudentKnowledge related
  #getStudentKnowledgesURL = () => `${this.#ServerBaseURL}/studentknowledges`;
  #getStudentKnowledgeURL = (id) => `${this.#ServerBaseURL}/studentknowledges/${id}`;
  #updateStudentKnowledgeURL = (id) => `${this.#ServerBaseURL}/studentknowledges/${id}`;
  #addStudentKnowledgeURL = () => `${this.#ServerBaseURL}/studentknowledges`;
  #deleteStudentKnowledgeURL = (id) => `${this.#ServerBaseURL}/studentknowledges/${id}`;

  // Subject related
  #getSubjectsURL = () => `${this.#ServerBaseURL}/subjects`;
  #getSubjectURL = (id) => `${this.#ServerBaseURL}/subjects/${id}`;
  #updateSubjectURL = (id) => `${this.#ServerBaseURL}/subjects/${id}`;
  #addSubjectURL = () => `${this.#ServerBaseURL}/subjects`;
  #deleteSubjectURL = (id) => `${this.#ServerBaseURL}/subjects/${id}`;

  /** 
  * Get the Singelton instance 
  * 
  * @public
  */
  static getAPI() {
    if (this.#api == null) {
      this.#api = new API();
    }
    return this.#api;
  }

  /**
   *  Default cookie setting for SameSite attribute was 'None' in the past, which allowed cookies to be sent with
   *  both cross-site and same-site requests. As of now the default for SameSite attribute is 'Lax', which means 
   *  cookies are not sent for cross-site requests. As react runs on port 3000 and flask(backend) on 5000 in this dev environment,
   *  a backend fetch is considered a cross-site request (as different ports are used). So no cookie is sent.
   *  For SameSite attribute to be 'None', also the attribute secure (only use https) has to be set in Chrome 
   *  and all other modern browsers as they reject the sending of cookies with only SameSite attribute set as 'None'.
   * 
   *  As a workaround we add the token of the cookie to the request headers. The backend then extracts it from there.
   * 
   *  Returns a Promise which resolves to a json object. 
   *  The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
   *  fetchAdvanced throws an Error also an server status errors
   */
  #fetchAdvanced(url, init) {
    // If no init parameter is used, create empty init
    if (typeof init === 'undefined') {
      init = { headers: {} };
    }

    // If no headers parameter is used, create empty header
    if (typeof init.headers === 'undefined') {
      init["headers"] = {};
    }

    // Read the Cookie with the security token
    // Note: Node.js seems to add a _xsrf token to the cookie with '; ' as separator
    let token = document.cookie.split('; ').map(cookie => {
      let c = cookie.split('=')
      return {
        name: c[0],
        value: c[1]
      }
    }).find(cookie => cookie.name === 'token');

    // Add the token to every request, so that we can use it in the backend.
    init.headers.Token = token.value;

    return fetch(url, init).then(res => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    })
  }

  /**
   * Returns a Promise, which resolves to an Array of GroupBOs
   *
   * @public
   */
  getConversation() {
    return this.#fetchAdvanced(this.#getConversationsURL()).then((responseJSON) => {
      let conversationBO = ConversationBO.fromJSON(responseJSON)[0];

      return new Promise(function (resolve) {
        resolve(conversationBO);
      });
    });
  }

  /**
 * Returns a Promise, which resolves to an Array of ConversationBO
 *
 * @public
 */
  getConversation(conversationId) {
    return this.#fetchAdvanced(this.#getConversationURL(conversationId)).then((responseJSON) => {
      let conversationBO = ConversationBO.fromJSON(responseJSON)[0];

      return new Promise(function (resolve) {
        resolve(conversationBO);
      });
    });
  }
  /**
   * Updates a group and returns a Promise, which resolves to a ConversationBO.
   * 
   * @param {ConversationBO} conversationBO to be updated
   * @public
   */
   updateConversation(conversationBO) {
    return this.#fetchAdvanced(this.#updateConversationURL(conversationBO.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(conversationBO),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }
    /**
   * Returns a Promise
   *
   * @param {conversationId} Conversation Id of the group
   * @public
   */
     deleteConversation(conversationId) {
      return this.#fetchAdvanced(this.#deleteConversationURL(conversationId), {
        method: 'DELETE',
      }).then(() => {
        return new Promise(function (resolve) {
          resolve();
        });
      });
    }
  
    /**

  /**
   * Returns a Promise, which resolves to an Array of GroupBOs
   *
   * @public
   */
  getGroups() {
    return this.#fetchAdvanced(this.#getGroupsURL()).then((responseJSON) => {
      let groupsBOs = GroupBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(groupsBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to an Array of GroupBOs
   *
   * @public
   */
  getGroups() {
    return this.#fetchAdvanced(this.#getGroupsRL()).then((responseJSON) => {
      let groupsBOs = GroupBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(groupsBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a GroupBO
   *
   * @param {Number} groupID to be retrieved
   * @public
   */
  getGroup(id) {
    return this.#fetchAdvanced(this.#getGroupURL(id)).then((responseJSON) => {
      let responseGroupBO = GroupBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseGroupBO);
      });
    });
  }


  /**
   * Returns a Promise
   *
   * @param {groupId} Group Id of the group
   * @param {member} group member to be added
   * @public
   */
  addGroupMember(groupId, member) {
    return this.#fetchAdvanced(this.#addGroupMembersURL(groupId), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(member),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }

  /**
   * Returns a Promise
   *
   * @param {groupId} Group Id of the group
   * @param {memberId} Id of the group member to be removed
   * @public
   */
  deleteGroupMember(groupId, memberId) {
    return this.#fetchAdvanced(this.#deleteGroupMembersURL(groupId, memberId), {
      method: 'DELETE',
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }

  /**
   * Updates a group and returns a Promise, which resolves to a GroupBO.
   * 
   * @param {GroupBO} groupBO to be updated
   * @public
   */
  updateGroup(groupBO) {
    return this.#fetchAdvanced(this.#updateGroupURL(groupBO.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(groupBO),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }

  /**
   * Deletes a Group.
   * 
   * @param {Number} groupID to be deleted
   * @public
   */
  deleteGroup(id) {
    return this.#fetchAdvanced(this.#deleteGroupURL(id), {
      method: 'DELETE',
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }

  /**
   * Returns a Promise, which resolves to an Array of GroupMessageBOs
   *
   * @public
   */
  getGroupMessages() {
    return this.#fetchAdvanced(this.#getGroupMessagesURL()).then((responseJSON) => {
      let groupmessageBOs = GroupMessageBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(groupmessageBOs);
      });
    });

  }

  /** 
   * Returns a Promise, which resolves to an Array of GroupMessageBOs which are related to the given group.
   *
   * @param {Number} group_id , the groupmessages have to be related to
   * @public
   */
  getGroupMessage(group_id) {
    return this.#fetchAdvanced(this.#getGroupMessagesURL(group_id)).then((responseJSON) => {
      let groupmessageBOs = GroupMessageBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(groupmessageBOs);
      });
    });

  }

  /**
   * Returns a Promise, which resolves to a GroupMessageBO
   *
   * @param {Number} GroupMessageID to be retrieved
   * @public
   */
  getGroupMessage(id) {
    return this.#fetchAdvanced(this.#getGroupMessageURL(id))
      .then((responseJSON) => {
        let responseGroupMesssageBO = GroupMessageBO.fromJSON(responseJSON)[0];
        return new Promise(function (resolve) {
          resolve(responseGroupMesssageBO);
        });
      });
  }

  /**
   * Adds a GroupMessage and returns a Promise, which resolves to a new GroupMessageBO object with the 
   * ... and ... of the parameter GroupMessageBO object.
   * 
   * @param {GroupMessageBO} GroupMessageBO to be added. The ID of the new GroupMessage is set by the backend
   * @public
   */
  addGroupMessage(groupmessageBO) {
    return this.#fetchAdvanced(this.#addGroupMessageURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(groupmessageBO),
    }).then((responseJSON) => {
      let responseGroupMessageBO = GroupMessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseGroupMessageBO);
      });
    });

  }

  /**
   * Updates a GroupMessage and returns a Promise, which resolves to a GroupMessageBO.
   * 
   * @param {GroupMessageBO} GroupMessageBO to be updated
   * @public
   */
  updateGroupMessage(groupmessageBO) {
    return this.#fetchAdvanced(this.#updateGroupMessageURL(groupmessageBO.getId()), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(groupmessageBO),
    }).then((responseJSON) => {
      let responseGroupMessageBO = GroupMessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseGroupMessageBO)
      })
    })
  }

  /**
   * Returns a Promise, which resolves to an Array of GroupMessageBOs
   * 
   * @param {Number} GroupMessageID to be deleted
   * @public
   */
  deleteGroupMessage(id) {
    return this.#fetchAdvanced(this.#deleteGroupMessageURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      let groupmessageBOs = GroupMessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(groupmessageBOs);
      });
    });

  }
  /**
   * Returns a Promise, which resolves to an Array of JoinGroupRequestBOs
   *
   * @public
   */
  getJoinGroupRequests() {
    return this.#fetchAdvanced(this.#getJoinGroupRequestsURL()).then((responseJSON) => {
      let joingrouprequestBOs = JoinGroupRequestBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(joingrouprequestBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a JoinGroupRequestBOs
   *
   * @param {Number} JoinGroupRequestID to be retrieved
   * @public
   */
  getJoinGroupRequest(id) {
    return this.#fetchAdvanced(this.#getJoinGroupRequestURL(id)).then((responseJSON) => {
      let responseJoinGroupRequestBO = JoinGroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseJoinGroupRequestBO);
      })
    })
  }

  /**
   * Returns a Promise, which resolves to a JoinGroupRequestBO
   *
   * @param {Number} UserID to be retrieved
   * @public
   */
  getJoinGroupRequest(id) {
    return this.#fetchAdvanced(this.#getJoinGroupRequestURL(id)).then((responseJSON) => {
      let responseJoinGroupRequestBO = JoinGroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseJoinGroupRequestBO);
      })
    })
  }

  /**
   * Adds a JoinGroupRequest and returns a Promise, which resolves to a new JoinGroupRequestBO object with the 
   * ... and ... of the parameter JoinGroupRequestBO object.
   * 
   * @param {JoinGroupRequestBO} JoinGroupRequestBO to be added. The ID of the new JoinGroupRequest is set by the backend
   * @public
   */


  addJoinGroupRequest(joingrouprequestBO) {
    return this.#fetchAdvanced(this.#addJoinGroupRequestURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(joingrouprequestBO),
    }).then((responseJSON) => {
      let responseJoinGroupRequestBO = JoinGroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseJoinGroupRequestBO)
      });
    });
  }
  
    /**
   * Updates a JoinGroupRequest and returns a Promise, which resolves to a JoinGroupRequestBO.
   * 
   * @param {JoinGroupRequestBO} JoinGroupRequest to be updated
   * @public
   */
     updateJoinGroupRequest(joingrouprequestBO) {
      return this.#fetchAdvanced(this.#updateJoinGroupRequestURL(joingrouprequestBO.getId()), {
        method: 'PUT',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(joingrouprequestBO),
      }).then((responseJSON) => {
        let responseJoinGroupRequestBO = JoinGroupRequestBO.fromJSON(responseJSON)[0];
        return new Promise(function (resolve) {
          resolve(responseJoinGroupRequestBO)
        })
      })
    }
  
  /**
   * Updates a JoinGroupRequest and returns a Promise, which resolves to a JoinGroupRequestBO.
   * 
   * @param {JoinGroupRequestBO} JoinGroupRequestBO to be updated
   * @public
   */
  updateJoinGroupRequest(joingrouprequestBO) {
    return this.#fetchAdvanced(this.#updateJoinGroupRequestURL(joingrouprequestBO.getId()), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(joingrouprequestBO),
    }).then((responseJSON) => {

      let responseJoinGroupRequestBO = JoinGroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseJoinGroupRequestBO)
      })
    })
  }

  /**
   * Returns a Promise, which resolves to an Array of JoinGroupRequestBOs
   *
   * @param {Number} userID to be deleted
   * @public
   */
  deleteJoinGroupRequest(id) {
    return this.#fetchAdvanced(this.#deleteJoinGroupRequestURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      let joingrouprequestBOs = JoinGroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(joingrouprequestBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to an Array of LearningPreferenceBOs
   *
   * @public
   */
  getLearningPreferences() {
    return this.#fetchAdvanced(this.#getLearningPreferencesURL()).then((responseJSON) => {
      let LearningPreferenceBOs = LearningPreferenceBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(LearningPreferenceBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a LearningPreferenceBO
   *
   * @param {Number} ID to be retrieved
   * @public
   */
  getLearningPreference(id) {
    return this.#fetchAdvanced(this.#getLearningPreferenceURL(id)).then((responseJSON) => {
      let responseLearningPreferenceBO = LearningPreferenceBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseLearningPreferenceBO);
      })
    })

  }

  /**
   * Updates a LearningPreference and returns a Promise, which resolves to a LearningPreferenceBO.
   * 
   * @param {LearningPreferenceBO} LearningPreferenceBO to be updated
   * @public
   */
   updateLearningPreference(LearningPreferenceBO) {
    return this.#fetchAdvanced(this.#updateLearningPreferenceURL(learningpreferenceBO.getId()), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(learningpreferenceBO),
    }).then((responseJSON) => {

      let responselearningpreferenceBO = LearningPreferenceBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responselearningpreferenceBO)
      })
    })
  }
  
  /**
   * Deletes a LearningPreference Interval.
   * 
   * @param {id} Id of the object to be deleted
   * @public
   */
  deleteLearningPreference(id) {
    return this.#fetchAdvanced(this.#deleteLearningPreferenceURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      let LearningPreferenceBOs = LearningPreferenceBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(LearningPreferenceBOs);
      });
    });
  }


  /**
  * Returns a Promise, which resolves to a LearningPreference
  *
  * @param {learningpreference} learningpreference to be retrieved
  * @public
  */
   addLearningpreference(learningpreference) {
    let learningpreferenceCopy = new LearningPreferenceBO(learningpreference.getOccurrence());
    learningpreferenceCopy.setId(learningpreference.getId());
    learningpreferenceCopy.formatDatesJSONReady();
    return this.#fetchAdvanced(this.#addLearningPreferenceURL(), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(learningpreferenceCopy),
    }).then((responseJSON) => {
      let responseLearningPreferenceBO = LearningPreferenceBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseLearningPreferenceBO)
      })
    })
  }


  /**
   * Returns a Promise, which resolves to an Array of StudentBOs
   *
   * @public
   */
   getStudent() {
    return this.#fetchAdvanced(this.#getStudentsURL()).then((responseJSON) => {
      let StudentBOs = StudentBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(StudentBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a StudentBOs
   *
   * @param {Number} Id to be retrieved
   * @public
   */
  getStudent(id) {
    return this.#fetchAdvanced(this.#getStudentURL(id)).then((responseJSON) => {
      let responseStudentBO = StudentBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseStudentBO);
      })
    })

  }

    /**
   * Returns a Promise
   *
   * @param {studentId} Group Id of the group
   * @public
   */
     addStudent(studentId) {
      return this.#fetchAdvanced(this.#addStudentURL(groupId), {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(student),
      }).then(() => {
        return new Promise(function (resolve) {
          resolve();
        });
      });
    }

      /**
   * Updates a student and returns a Promise, which resolves to a StudentBO.
   * 
   * @param {StudentBO} studentBO to be updated
   * @public
   */
  updateStudent(studentBO) {
    return this.#fetchAdvanced(this.#updateStudentURL(StudentBO.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(studentBO),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }

  /**
   * Deletes a Student.
   * 
   * @param {id} Id of the object to be deleted
   * @public
   */
  deleteStudent(id) {
    return this.#fetchAdvanced(this.#deleteStudentURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      let StudentBO = StudentBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(StudentBO);
      });
    });
  }


  /**
   * Returns a Promise, which resolves to a MessageBO
   *
   * @param {id} Message ID to be retrieved
   * @public
   */
  getMessage(id) {
    return this.#fetchAdvanced(this.#getMessagesURL(id)).then((responseJSON) => {
      let responseMessageBO = MessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseMessageBO);
      });
    });
  }
  /**
 * Returns a Promise, which resolves to an Array of MessageBOs
 *
 * @public
 */
   getMessage(messageId) {
    return this.#fetchAdvanced(this.#getMessageURL(messageId)).then((responseJSON) => {
      let messageBO = MessageBO.fromJSON(responseJSON)[0];

      return new Promise(function (resolve) {
        resolve(messageBO);
      });
    });
  }

  deleteMessage(id) {
    return this.#fetchAdvanced(this.#deleteMessageURL(id), {
      method: 'DELETE'
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }

  /**
  * Returns a Promise, which resolves to a MessageBO
  *
  * @param {message} message to be retrieved
  * @public
  */
   addMessage(message) {
    let messageCopy = new MessageBO(message.getOccurrence());
    messageCopy.setId(message.getId());
    messageCopy.formatDatesJSONReady();
    console.log(messageCopy);
    return this.#fetchAdvanced(this.#addMessageURL(), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(messageCopy),
    }).then((responseJSON) => {
      let responseMessageBO = MessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseMessageBO)
      })
    })
  }


  /**
   * Returns a Promise, which resolves to a MessageBO
   *
   * @param {message} message to be updated
   * @public
   */
   updatetMessage(message) {
    let messageCopy = new ArrivalBO(message.getOccurrence());
    messageCopy.setId(message.getId());
    messageCopy.formatDatesJSONReady();
    return this.#fetchAdvanced(this.#updateMessageURL(messageCopy.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(messageCopy),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }

    /**
   * Returns a Promise, which resolves to an Array of ProposalBOs
   *
   * @public
   */
     getProposals() {
      return this.#fetchAdvanced(this.#getProposalsURL()).then((responseJSON) => {
        let ProposalBOs = ProposalBO.fromJSON(responseJSON);
  
        return new Promise(function (resolve) {
          resolve(ProposalBOs);
        });
      });
    }

  /**
   * Returns a Promise, which resolves to a ProposalBO
   *
   * @param {id} Proposal ID to be retrieved
   * @public
   */
   getProposal(proposalId) {
    return this.#fetchAdvanced(this.#getProposalURL(proposalId)).then((responseJSON) => {
      let proposalBO = ProposalBO.fromJSON(responseJSON)[0];

      return new Promise(function (resolve) {
        resolve(proposalBO);
      });
    });
  }

/**
  * Returns a Promise, which resolves to a ProposalBO
  *
  * @param {proposal} proposal to be retrieved
  * @public
  */
 addProposal(proposal) {
  let proposalCopy = new ProposalBO(proposal.getOccurrence());
  proposalCopy.setId(proposal.getId());
  proposalCopy.formatDatesJSONReady();
  console.log(proposalCopy);
  return this.#fetchAdvanced(this.#addProposalURL(), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(proposalCopy),
  }).then((responseJSON) => {
    let responseProposalBO = ProposalBO.fromJSON(responseJSON)[0];
    return new Promise(function (resolve) {
      resolve(responseProposalBO)
    })
  })
}


/**
 * Returns a Promise, which resolves to a MessageBO
 *
 * @param {proposal} proposal to be updated
 * @public
 */
 updatetProposal(proposal) {
  let proposalCopy = new ProposalBO(proposal.getOccurrence());
  proposalCopy.setId(proposal.getId());
  proposalCopy.formatDatesJSONReady();
  return this.#fetchAdvanced(this.#updateProposalURL(proposalCopy.getId()), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(proposalCopy),
  }).then(() => {
    return new Promise(function (resolve) {
      resolve()
    })
  })
}


  deleteProposal(id) {
    return this.#fetchAdvanced(this.#deleteProposalURL(id), {
      method: 'DELETE'
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }


  /**
   * Returns a Promise, which resolves to an Array of StudentKnowledgeBOs
   *
   * @public
   */
   getStudentKnowledge() {
    return this.#fetchAdvanced(this.#getStudentKnowledgesURL()).then((responseJSON) => {
      let StudentKnowledgeBO = StudentKnowledgeBO.fromJSON(responseJSON);

      return new Promise(function (resolve) {
        resolve(StudentKnowledgeBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a StudentKnowledgeBOs
   *
   * @param {id} ID to be retrieved
   * @public
   */
  getStudentKnowledge(id) {
    return this.#fetchAdvanced(this.#getStudentKnowledgeURL(id)).then((responseJSON) => {
      let responseStudentKnowledgeBO = StudentKnowledgeBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseStudentKnowledgeBO);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a ProposalBO
   *
   * @param {studentknowledges} studentknowledge to be updated
   * @public
   */
  updatetStudentKnowledge(studentknowledges) {
    let studentknowledgesCopy = new ArrivalBO(studentknowledges.getOccurrence());
    studentknowledgesCopy.setId(studentknowledges.getId());
    studentknowledgesCopy.formatDatesJSONReady();
    return this.#fetchAdvanced(this.#updateStudentKnowledgeURL(studentknowledgesCopy.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(studentknowledgesCopy),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }

  /**
  * Returns a Promise, which resolves to a StudentknowledgeBO
  *
  * @param {studentknowledge} studentknowledge to be retrieved
  * @public
  */
  addStudentKnowledge(studentknowledge) {
    let studentknowledgesCopy = new StudentKnowledgeBO(studentknowledge.getOccurrence());
    studentknowledgesCopy.setId(studentknowledge.getId());
    studentknowledgesCopy.formatDatesJSONReady();
    console.log(studentknowledgesCopy);
    return this.#fetchAdvanced(this.#addStudentKnowledgeURL(), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(studentknowledgesCopy),
    }).then((responseJSON) => {
      let responseStudentKnowledgeBO = StudentKnowledgeBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseStudentKnowledgeBO)
      })
    })
  }

  deleteStudentKnowledge(id) {
    return this.#fetchAdvanced(this.#deleteStudentKnowledgeURL(id), {
      method: 'DELETE'
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }


  /**
   * Returns a Promise, which resolves to a SubjectBO
   *
   * @param {id} Subject ID to be retrieved
   * @public
   */
   getSubjects(id) {
    return this.#fetchAdvanced(this.#getSubjectsURL(id)).then((responseJSON) => {
      let responseSubjectBO = SubjectBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSubjectBO);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a SubjectBO
   *
   * @param {id} Subject ID to be retrieved
   * @public
   */
  getSubject(id) {
    return this.#fetchAdvanced(this.#getSubjectURL(id)).then((responseJSON) => {
      let responseSubjectBO = SubjectBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSubjectBO);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a SubjectBO
   *
   * @param {subject} Subject to be updated
   * @public
   */
  updateSubject(subject) {
    let subjectCopy = new SubjectBO(subject.getOccurrence());
    subjectCopy.setId(leave.getId());
    subjectCopy.formatDatesJSONReady();
    return this.#fetchAdvanced(this.#updateSubjectURL(subjectCopy.getId()), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(subjectCopy),
    }).then(() => {
      return new Promise(function (resolve) {
        resolve()
      })
    })
  }

  /**
  * Returns a Promise, which resolves to a SubjectBO
  *
  * @param {subject} subject to be retrieved
  * @public
  */
  addSubject(subject) {
    let subjectCopy = new SubjectBO(subject.getOccurrence());
    subjectCopy.setId(leave.getId());
    subjectCopy.formatDatesJSONReady();
    return this.#fetchAdvanced(this.#addSubjectURL(), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(subjectCopy),
    }).then((responseJSON) => {
      let responseSubjectBO = SubjectBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responseSubjectBO)
      })
    })
  }

  deleteSubject(id) {
    return this.#fetchAdvanced(this.#deleteSubjectURL(id), {
      method: 'DELETE'
    }).then(() => {
      return new Promise(function (resolve) {
        resolve();
      });
    });
  }
}
