class Proposal():
    """
    Class Proposal, which implements a proposal with attributes for profile_proposals and matches.
    """

    def __init__(self, profile_proposal, matches):
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