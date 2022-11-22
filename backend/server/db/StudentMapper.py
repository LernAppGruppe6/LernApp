from ..bo import Person
from . import Mapper
from uuid import UUID

"""
"""


class StudentMapper(Mapper):
    """
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        """
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM student")
        tuples = cursor.fetchall()
        for (id, email, password, first_name, last_name, semester, course_of_study, age, gender,
             place_of_learning, frequency, google_id) in tuples:
            student = Person(email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id)
            student._set_id(UUID(id))
            result.append(student)
        self._connection.commit()
        cursor.close()

        return result

    def find_by_id(self, key):
        """
        """
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM student WHERE id='{}'".format(key))
        tuples = cursor.fetchall()
        try:
            (id, email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id) = tuples[0]
            student = Person(email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id)
            student._set_id(UUID(id))
            result = student
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_last_name(self, last_name):
        """
        """
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM student WHERE last_name='{}'".format(last_name))
        tuples = cursor.fetchall()
        try:
            (id, email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id) = tuples[0]
            student = Person(email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id)
            student._set_id(UUID(id))
            result = student
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_google_id(self, g_id):
        """
        """
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM student WHERE google_id='{}'".format(g_id))
        tuples = cursor.fetchall()
        try:
            (id, email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id) = tuples[0]
            student = Person((email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id))
            student._set_id(UUID(id))
            result = student
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_email(self, email):
        """
        """
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM student WHERE email='{}'".format(email))
        tuples = cursor.fetchall()
        try:
            (id, email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id) = tuples[0]
            student = Person(email, password, first_name, last_name, semester, course_of_study, age, gender,
            place_of_learning, frequency, google_id)
            student._set_id(UUID(id))
            result = student
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, student: Person):
        """
        """
        cursor = self._connection.cursor()
        query = "INSERT INTO student (id, email, password, first_name, last_name, semester, course_of_study, age, gender, place_of_learning, frequency, google_id)" \
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        data = (
                str(student._get_id()),
                student._get_email(),
                student.get_password(),
                student.get_first_name(),
                student.get_last_name(),
                student.get_semester(),
                student.get_course_of_study(),
                student.get_age(),
                student.get_gender,
                student.get_place_of_learning,
                student.get_frequency,
                student.get_google_id(),
                )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return student



    def update(self, student: Person):
        """
        """
        cursor = self._connection.cursor()
        query = "UPDATE persons SET email=%s,..."
        data = (
                str(student.get_id()),
                student.get_email(),
                student.get_password(),
                student.get_first_name(),
                student.get_last_name(),
                student.get_semester(),
                student.get_course_of_study(),
                student.get_age(),
                student.get_gender,
                student.get_place_of_learning,
                student.get_frequency,
                student.get_google_id(),
                )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, student_id):
        """
        """
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM student WHERE id='{}'".format(student_id))

        self._connection.commit()
        cursor.close()
