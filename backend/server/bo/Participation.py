"""from server.bo.NamedBusinessObject import NamedBusinessObject"""

class Participation (NamedBusinessObject):
    "" "A class that should determine the status of the user."""

    def __init__(self, status, user_id, group_id):
        super().__init__()
        self._status = status
        self._user_id = user_id
        self._group_id = group_id

    def get_status(self) -> str:
        return self._status

    def set_status(self, status: str):
        self._status = status

    def get_user_id(self) -> int:
        return self._user_id

    def set_user_id(self, user_id: int):
        self._user_id = user_id

    def get_group_id(self) -> int:
        return self._group_id

    def set_group_id(self, group_id: int):
        self._group_id = group_id

    def str(self):
        """Converting the object's attribute values ​​to a string"""
        return "Profile: {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                        self.get_name(), self.get_status(),
                                                                        self.get_group_id(), self.get_user_id())

    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a Participation() object"""
        obj = Participation()
        obj.set_name(dictionary["name"])
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_group_id(dictionary["group_id"])
        obj.set_status(dictionary["status"])
        obj.set_user_id(dictionary["user_id"])
        return obj
