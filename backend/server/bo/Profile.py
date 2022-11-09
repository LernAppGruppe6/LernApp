# from server.bo.BusinessObject import BusinessObject


class Profile (BusinessObject):
    """
    Class Profile, which implements the profile attributes of an existing person.
    """

    def __init__(self):
        super().__init__()
        self._age = ""                # the age of a person
        self._gender = ""             # the gender of a person
        self._university = ""         # the university of a person
        self._degree_program = ""     # the degree program of a person
        self._study_subject = ""      # the study subjects of a person
        self._content_interests = ""  # the content interests of a person
        self._self_assesment = ""  # the self assesment of a person


    def set_age(self, age):
        """Defines the age of a persons profile."""
        self._age = age

    def get_age(self):
        """Returns the age of a persons profile."""
        return self._age

    def set_gender(self, gender):
        """Defines the gender of a persons profile."""
        self._gender = gender

    def get_gender(self):
        """Returns the gender of a persons profile."""
        return self._gender

    def set_university(self, university):
        """Defines the university of a persons profile."""
        self._university = university

    def get_university(self):
        """Returns the university of a persons profile."""
        return self._university

    def set_degree_program(self, degree_program):
        """Defines the degree program of a persons profile."""
        self._degree_program = degree_program

    def get_degree_program(self):
        """Returns the degree program of a persons profile."""
        return self._degree_program

    def set_study_subject(self, study_subject):
        """Defines the study subjects of a persons profile."""
        self._study_subject = study_subject

    def get_study_subject(self):
        """Returns the study subjects of a persons profile."""
        return self._study_subject

    def set_content_interests(self, content_interests):
        """Defines the content interests of a persons profile."""
        self._content_interests = content_interests

    def get_content_interests(self):
        """Returns the content interests of a persons profile."""
        return self._content_interests

    def set_self_assesment(self, self_assesment):
        """Defines the self assesment of a persons profile."""
        self._self_assesment = self_assesment

    def get_self_assesment(self):
        """Returns the self assesment of a persons profile."""
        return self._self_assesment



    def __str__(self):
        """Converting the object's attribute values ​​to a string"""
        return "Profile: {}, {}, {}, {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(), self.get_age(), self.get_gender(), self.get_university(), self.get_degree_program(), self.get_study_subject(), self.get_content_interests(), self.get_self_assesment())

    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a User() object"""
        obj = Profile()
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_age(dictionary["age"])
        obj.set_gender(dictionary["gender"])
        obj.set_university(dictionary["university"])
        obj.set_degree_program(dictionary["degree_program"])
        obj.set_study_subject(dictionary["study_subject"])
        obj.set_content_interests(dictionary["content_interests"])
        obj.set_self_assesment(dictionary["self_assesment"])
        return obj

