# from server.bo.BusinessObject import BusinessObject


class NamedBusinessObject (BusinessObject):
    """
    Base Class for all Businessobjects with a name.
    """

    def __init__(self):
        self._name = None

    def set_name(self, name):
        """Defining a name."""
        self._name = name

    def get_name(self):
        """Return of a name."""
        return self._name

