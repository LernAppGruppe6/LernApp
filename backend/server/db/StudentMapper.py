from .Mapper import Mapper
from .NotFoundException import NotFoundException
from ..bo.Student import Student
import mysql.connector


class StudentMapper(Mapper):

    def __init__(self):
        super().__init__()

    """
    Create a Student object from the db data
    """
    def _map_database_fields_to_student(self, id, email, first_name, last_name, semester, course_of_study, age, gender,
                                        place_of_learning,
                                        frequency) -> Student:
        student = Student(
            email,
            first_name,
            last_name,
            email,
            email,  # TODO: check whats the google id
            age,
            semester,
        )
        student.set_id(id)

        return student

    def find_all(self) -> list:
        cursor = self._connection.cursor(buffered=True)
        cursor.execute("SELECT * FROM student")
        self._connection.commit()
        cursor.close()

        students = []
        studentsData = cursor.fetchall()

        for (id, email, first_name, last_name, semester, course_of_study, age, gender, place_of_learning,
             frequency) in studentsData:
            students.append(
                self._map_database_fields_to_student(id, email, first_name, last_name, semester, course_of_study, age,
                                                     gender, place_of_learning,
                                                     frequency))

        return students

    def find_by_id(self, id) -> Student:
        cursor = self._connection.cursor(buffered=True)
        cursor.execute("SELECT * FROM student WHERE id = %s LIMIT 1", (id,))

        self._connection.commit()
        cursor.close()

        result = cursor.fetchone()

        if result is None:
            raise NotFoundException("Student with id {} not found".format(str(id)))

        (id, email, first_name, last_name, semester, course_of_study, age,
                                                     gender, place_of_learning,
                                                     frequency) = result

        return self._map_database_fields_to_student(
            id,
            email,
            first_name,
            last_name,
            semester,
            course_of_study,
            age,
            gender,
            place_of_learning,
            frequency,
        )

    def find_by_email(self, email: str) -> Student:
        cursor = self._connection.cursor(buffered=True)
        cursor.execute("SELECT * FROM student WHERE email = %s LIMIT 1", (email,))

        self._connection.commit()
        cursor.close()

        result = cursor.fetchone()

        if result is None:
            raise NotFoundException("Student with email {} not found".format(email))

        (id, email, first_name, last_name, semester, course_of_study, age,
                                                     gender, place_of_learning,
                                                     frequency) = result

        return self._map_database_fields_to_student(
            id,
            email,
            first_name,
            last_name,
            semester,
            course_of_study,
            age,
            gender,
            place_of_learning,
            frequency,
        )

    def insert(self, student) -> Student:
        if student.get_id() is not None:
            raise Exception('Ups, I was already inserted')

        cursor = self._connection.cursor(buffered=True)

        cursor.execute(
            '''
                INSERT INTO student
                    (email, first_name, last_name, semester, course_of_study, age, gender, place_of_learning, frequency)
                VALUES
                    (%s, %s, %s, %s, %s, %s, %s, %s, %s);
            ''',
            (
                student.get_email(),
                student.get_first_name(),
                student.get_last_name(),
                student.get_semester(),
                "Test",
                23,
                "f",
                "Palme",
                3
            )
        )


        self._connection.commit()
        cursor.close()

        return self.find_by_email(student.get_email())


    def update(self, key, student: Student):
        # TODO: pending implementation
        pass

    def delete(self, id) -> None:
        cursor = self._connection.cursor(buffered=True)
        cursor.execute("DELETE FROM student WHERE id = %s", (id,))

        self._connection.commit()
        cursor.close()