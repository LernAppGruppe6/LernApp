from ..bo import Profile
from . import Mapper
from uuid import UUID


class SubjectMapper(Mapper):

    def __int__(self):
        super().__init__()


    def find_all(self):
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM subject")
        tuples = cursor.fetchall()

        for (id, name) in tuples:
            subject = Profile()
            subject._set_id(UUID(id))
            subject._set_name(name)
            result.append(subject)

        self._connection.commit()
        cursor.close()

        return result

    def find_by_id(self, id):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT id FROM subject WHERE id='{}'".format(id))
        tuples = cursor.fetchall()

        try:
            (id, name) = tuples[0]
            subject = Profile()
            subject._set_id(UUID(id))
            subject._set_name(name)
            result = subject
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_name(self, name):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT name FROM subject WHERE id='{}'".format(name))
        tuples = cursor.fetchall()
        try:
            (id, name) = tuples[0]
            subject = Profile()
            subject._set_id(UUID(id))
            subject._set_name(name)
            result = subject
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, subject: Profile):
        cursor = self._connection.cursor()
        query = "INSERT INTO subject (id, name) VALUES (%s, %s)"
        data = (
            str(subject._get_id()),
            subject._get_name(),
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return subject

    def update(self, subject: Profile):
        cursor = self._connection.cursor()
        query = "UPDATE subject SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            subject._get_name(),
            str(subject._get_id())
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def update_by_id(self, subject: Profile):
        cursor = self._connection.cursor()
        query = "UPDATE subject SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            subject._get_name(),
            str(subject._get_id())
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, subject: Profile):
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM subject WHERE id = '{}'".format(str(subject._get_id())))

        self._connection.commit()
        cursor.close()