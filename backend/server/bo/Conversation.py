#from server.bo.NamedBusinessObject import NamedBusinessObject

class Conversation(NamedBusinessObject):
    """A class that should determine the conversation between the participants"""

    def __init__(self, message, user_id, participant):
        super().__init__()
        self._message = message
        self._user_id = user_id
        self._participant = participant

    def set_message(self, message: str):
        self._message = message

    def get_message(self) -> str:
        return self._message

    def set_user_id(self, user_id: str):
        self._user_id = user_id

    def get_user_id(self) -> str:
        return self._user_id

    def set_participant(self, participant: str):
        self._participant = participant

    def get_participant(self) -> str:
        return self._participant

    def str(self):
        """Converting the object's attribute values ​​to a string"""
        return "Conversation: {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                        self.get_name(), self.get_message(),
                                                                        self.get_participant(), self.get_user_id())

    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a User() object"""
        obj = Conversation()
        obj.set_id(dictionary["id"])
        obj.set_name(dictionary["name"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_participant(dictionary["participant"])
        obj.set_get_message(dictionary["get_message"])
        obj.set_get_user_id(dictionary["get_user_id"])
        return obj