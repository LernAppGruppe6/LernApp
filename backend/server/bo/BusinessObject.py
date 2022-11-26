from abc import ABC, abstractmethod
from datetime import datetime

class BusinessObject (ABC):
    """
    Base Class for all BusinessObjects with an id and creation time.
    """

    def __init__(self):
        """
        None is better than 0 because if I want to persist
        the object using the mapper, it can detect if the object was
        already inserted.
        It does not make sense to insert an already existing object twice.
        """
        self._id = None
        self._creation_time = datetime.now()

    def set_id(self, id: int):
        """Defining a id."""
        self._id = id

    def get_id(self) -> int:
        """Return of an id."""
        return self._id

    def set_creation_time(self, creation_time: datetime):
        """Defining a creation time."""
        self._creation_time = creation_time

    def get_creation_time(self) -> datetime:
        """Return of a creation time as a string."""
        return self._creation_time.strftime("%Y-%m-%d %H:%M:%S")