

class Group ():
    """A class that should determine the Study Group of the participants"""

    def __init__(self,name, participant, max_participant, participant_list, approved, group_profile):
        self._id = None
        self._name = name
        self._participant = participant
        self._max_participant = max_participant
        self._participant_list = participant_list
        self._approved = approved
        self._group_profile = group_profile

    def set_id(self, id: int):
        """Defining a id."""
        self._id = id

    def get_id(self) -> int:
        """Return of an id."""
        return self._id

    #def set_creation_time(self, creation_time: datetime):
    #    """Defining a creation time."""
    #    self._creation_time = creation_time

    #def get_creation_time(self) -> datetime:
    #    """Return of a creation time as a string."""
    #    return self._creation_time

    def set_name(self, name):
        """Defining a name."""
        self._name = name

    def get_name(self):
        """Return of a name."""
        return self._name

    def get_participant(self) -> str:
        return self._participant

    def set_participant(self, participant: str):
        self._participant = participant

    def get_max_participant(self) -> int:
        return self._max_participant

    def set_max_participant(self, max_participant: int):
        self._max_participant = max_participant

    def get_participant_list(self) -> str:
        return self._participant_list

    def set_participant_list(self, participant_list: str):
        self._participant_list = participant_list

    def get_approved(self) -> str:
        return self._approved

    def set_approved(self, approved: str):
        self._approved = approved

    def get_group_profile(self) -> str:
        return self._group_profile

    def set_group_profile(self, group_profile: str):
        self._group_profile = group_profile




    def str(self):
        """Converting the object's attribute values to a string"""
        return "StudyGroup: {}, {}, {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                   self.get_name(), self.get_participant(),
                                                                   self.get_max_participant(),
                                                                   self.get_participant_list(), self.get_approved(),
                                                                   self.get_group_profile())


    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a StudyGroup() object"""
        obj = Group()
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"])
        obj.set_participant(dictionary["participant"])
        obj.set_max_participant(dictionary["max_participant"])
        obj.set_participant_list(dictionary["participant_list"])
        obj.set_approved(dictionary["approved"])
        obj.set_group_profile(dictionary["group_profile"])
        return obj

