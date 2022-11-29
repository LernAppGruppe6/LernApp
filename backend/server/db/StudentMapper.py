from .Mapper import Mapper
from .NotFoundException import NotFoundException
from ..bo.Student import Student
import mysql.connector


class StudentMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self) -> list:
        cursor = self._connection.cursor(buffered=True, dictionary=True)
        cursor.execute("SELECT * FROM student")
        self._connection.commit()
        cursor.close()

        students = []
        studentsData = cursor.fetchall()

        for row in studentsData:
            students.append(Student.from_database_row(row))

        cursor.close()

        return students

    def find_by_id(self, id) -> Student:
        cursor = self._connection.cursor(buffered=True, dictionary=True)
        cursor.execute("SELECT * FROM student WHERE id = %s LIMIT 1", (id,))

        self._connection.commit()
        cursor.close()

        result = cursor.fetchone()

        if result is None:
            raise NotFoundException("Student with id {} not found".format(str(id)))

        return Student.from_database_row(result)

    def find_by_email(self, email: str) -> Student:
        cursor = self._connection.cursor(buffered=True, dictionary=True)
        cursor.execute("SELECT * FROM student WHERE email = %s LIMIT 1", (email,))

        self._connection.commit()
        cursor.close()

        result = cursor.fetchone()

        if result is None:
            raise NotFoundException("Student with email {} not found".format(email))

        return Student.from_database_row(result)

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
                "Test", # TODO
                23, # TODO
                "f", # TODO
                "Palme", # TODO
                3 # TODO
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