import mysql.connector
import os
from contextlib import AbstractContextManager
from abc import ABC, abstractmethod

'''
Abstrakte Basisklasse aller Mapper-Klassen
'''

class Mapper (AbstractContextManager,ABC):
    """Abstrakte Basisklasse für alle Mapper-Klassen"""

    def __init__(self):
        self._connector = None

    def __enter__(self):
        """Festlegen, was passiert, sobald mit dem Mapper gearbeitet wird"""
        if os.getenv('GAE_ENV', '').startswith('standard'):
            """Verbindung zur Google Cloud"""
            self._connector = mysql.connector.connect(user="",
                                                      passwd="",
                                                      unix_socket=""
                                                                  ":",
                                                      db="")

        else:
            """Lokale MySQL DB"""

            self._connector = mysql.connector.connect(host="127.0.0.1",
                                                      user="root",
                                                      passwd="",
                                                      db="")
        return self


    def __exit__(self, exc_type, exc_val, exc_tb):
        """Festlegen, was passiert sobald die Arbeit mit dem Mapper beendet wurde"""
        self._connector.close()
