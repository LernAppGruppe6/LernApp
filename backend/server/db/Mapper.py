import mysql.connector
import os
from contextlib import AbstractContextManager
from abc import ABC, abstractmethod


class Mapper (AbstractContextManager,ABC):
    """Abstract base class of all mapper-classes"""

    def __init__(self):
        self._connector = None

    def __enter__(self):
        """Specify what happens when you start working with the mapper"""
        if os.getenv('GAE_ENV', '').startswith('standard'):
            """Connection to Google Cloud. This is the connection between Google App Engine and Cloud SQL."""

            self._connector = mysql.connector.connect(user="root",
                                                      password="",
                                                      unix_socket=""
                                                                  ":",
                                                      db="")

        else:
            """Connection to a local mysql database."""

            self._connector = mysql.connector.connect(host="127.0.0.1",
                                                      user="root",
                                                      password="demo",
                                                      db="lernapp")
        return self


    def __exit__(self, exc_type, exc_val, exc_tb):
        """Specify what happens when work with the mapper is finished."""
        self._connector.close()

    @abstractmethod
    def find_all(self):
        """Read all data."""
        pass

    @abstractmethod
    def find_by_id(self, key):
        """Read a specific record using the key."""
        pass

    @abstractmethod
    def find_by_name(self, name):
        """Read a specific record using the name."""
        pass

    @abstractmethod
    def find_by_creation_time(self, creation_time):
        """Read a specific record using the creation time."""
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
    def delete(self, key):
        """Delete a record using the key."""
        pass
