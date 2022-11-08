class Person:
    """
    Class Person, which implements a simple person with attributes for firstname, lastname, email, username,
    google-id and semester.
    """

    def __init__(self, first_name, last_name, email, user_name, google_id, semester):
        self._first_name = first_name
        self._last_name = last_name
        self._email = email
        self._user_name = user_name
        self._google_id = google_id
        self._semester = semester

    def set_first_name(self, first_name: str):
        """
        Defines the firstname of a person.
        """
        self._first_name = first_name

    def get_first_name(self) -> str:
        """
        Returns the firstname of a person.
        """
        return self._first_name

    def set_last_name(self, last_name: str):
        """
        Defines the lastname of a person.
        """
        self._last_name = last_name

    def get_last_name(self) -> str:
        """
        Returns the lastname of a person.
        """
        return self._last_name

    def set_email(self, email: str):
        """
        Defines the email of a person.
        """
        self._email = email

    def get_email(self) -> str:
        """
        Returns the email of a person.
        """
        return self._email

    def set_user_name(self, user_name: str):
        """
        Defines the username of a person.
        """
        self._user_name = user_name

    def get_user_name(self) -> str:
        """
        Returns the email of a person.
        """
        return self._user_name

    def set_google_id(self, google_id: str):
        """
        Defines the google-id of a person.
        """
        self._google_id = google_id

    def get_google_id(self) -> str:
        """
        Returns the google-id of a person..
        """
        return self._google_id

    def set_semester(self, semester: int):
        """
        Defines the semester of a person.
        """
        self._semester = semester

    def get_semester(self) -> int:
        """
        Returns the semester of a person.
        """
        return self._semester

