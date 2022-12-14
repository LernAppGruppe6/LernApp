from datetime import datetime


class Student:
    """
    Class Person, which implements a simple person with attributes for firstname, lastname, email, username,
    google-id and semester.
    """

    def __init__(self, name, first_name, last_name, email, google_id, age, gender, university,
                degree_program, study_subject, content_interests, self_assesment,  semester):

        self._id = None
        self._name = name
        self._first_name = first_name
        self._last_name = last_name
        self._email = email
        self._google_id = google_id
        self._age = age
        self.gender = gender
        self.university = university
        self.degree_programm = degree_program
        self.study_subject = study_subject
        self.content_interests = content_interests
        self.self_assesment = self_assesment
        self._semester = semester
        #self._creation_time = datetime.now()

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

    def debug(self):
        """Converting the object's attribute values to a string for debugging pupropse """
        return "Person: {}, {}, {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                   self.get_name(), self.get_first_name(),
                                                                   self.get_last_name(), self.get_email(),
                                                                   self.get_google_id(), self.get_semester())

    @staticmethod
    def from_database_row(dictionary):
        """
        Converting a Python dict() containing all our database columns to a Person() object
        """

        student = Student(
            dictionary["email"],
            dictionary["first_name"],
            dictionary["last_name"],
            dictionary["email"],
            dictionary["email"],  # TODO: check whats the google id
            dictionary["age"],
            dictionary["university"],
            dictionary["degree_program"],
            dictionary["study_subject"],
            dictionary["content_interests"],
            dictionary["self_assesment"],
            dictionary["semester"],
        )
        student.set_id(dictionary["id"])

        return student
