""" from server.bo.NamedBusinessObject import NamedBusinessObject    """

class Message(NamedBusinessObject):

    def _init_(self, text_message, user_id, group_id ):
        super().__init__()
        self._text_message = text_message
        self._user_id = user_id
        self._group_id = group_id


    def set_text_message(self, text_message: str):
        self._text_message = text_message

    def get_text_message(self) -> str:
        return self._text_message

    def set_user_id(self, user_id: int ):
        self._user_id = user_id

    def get_user_id(self) -> int:
        return self._user_id

    def set_group_id(self, group_id: int):
        self._group_id = group_id

    def get_group_id(self) -> int:
        return self._group_id

    def str(self):
        """Converting the object's attribute values ​​to a string"""
        return "Message: {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                        self.get_name(), self.get_text_message(),
                                                                        self.get_user_id(), self.get_group_id())
    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a User() object"""
        obj = Message()
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set.name(dictionary["name"])
        obj.set_text_message(dictionary["text_message"])
        obj.set_user_id(dictionary["user_id"])
        obj.set_group_id(dictionary["get_group_id"])
        return obj
