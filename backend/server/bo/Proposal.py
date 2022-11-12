#from server.bo.NamedBusinessObject import NamedBusinessobject

class Proposal (NamedBusinessObject):
    """
    Class Proposal, which implements a proposal with attributes for profile_proposals and matches.
    """

    def __init__(self, profile_proposal, matches):
        super().__init__()
        self._profile_proposal = profile_proposal
        self._matches = matches

    def set_profile_proposal(self, profile_proposal: str):
        self._profile_proposal = profile_proposal

    def get_profile_profosal(self) -> str:
        return self._profile_proposal

    def set_matches(self, matches: list):
        self._matches = matches

    def get_matches(self) -> list:
        return self._matches

    def str(self):
        """Converting the object's attribute values ​​to a string"""
        return "Proposal: {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(), self.get_name(), self.get_profile_profosal(), self.get_matches())

    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a Proposal() object"""
        obj = Proposal()
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"])
        obj.set_profile_proposal(dictionary["profile_proposal"])
        obj.set_matches(dictionary["matches"])
        return obj

