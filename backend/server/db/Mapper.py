import mysql.connector
import os
from contextlib import AbstractContextManager
from abc import ABC, abstractmethod


class Mapper(AbstractContextManager, ABC):
    """Abstract base class of all mapper-classes"""

    def __init__(self):
        self._connection = None

    def __enter__(self):
        self._connection = mysql.connector.connect(
            user="root",
            password="root",
            host="127.0.0.1",
            port=3308,
            database="app",
            use_pure=False
        )

        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """Specify what happens when work with the mapper is finished."""
        self._connection.close()

    @abstractmethod
    def find_by_id(self, key):
        """Read a specific record using the key."""
        pass

    @abstractmethod
    def insert(self, object):
        """"Add an object as a record."""
        pass

    @abstractmethod
    def update(self, key, object):
        """Modify a specific object using the key."""
        pass

    @abstractmethod
    def delete(self, object):
        """Delete a record using the key."""
        pass
