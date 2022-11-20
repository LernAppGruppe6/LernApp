from server.bo.Participation import Participation
from server.db.Mapper import Mapper


class JoinGroupRequestMapper(Mapper):
    """
    Mapper class that maps learning group objects to a relational database.
    The class enables the conversion of objects into database structures and vice versa.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Read out all study group-requests.
        :return A collection of study group-request objects representing all existing study group-requests.
        """

        result = []

        cursor = self._connector.cursor()
        cursor.execute("SELECT * FROM join_group_request")
        tuples = cursor.fetchall()

        for (id, student_id, group_id, accepted_at) in tuples:
            participation = Participation()
            participation.set_id(id)
            participation.set_student_id(student_id)
            participation.set_group_id(group_id)
            participation.set_accepted_at(accepted_at)

        self._connector.commit()
        cursor.close()

        return result

    def find_by_id(self, key):
        result = None

        cursor = self._connector.cursor()
        command = "SELECT * FROM join_group_request WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, student_id, group_id, accepted_at) = tuples[0]
            participation = Participation()
            participation.set_id(id)
            participation.set_student_id(student_id)
            participation.set_group_id(group_id)
            participation.set_accepted_at(accepted_at)
            result = participation
        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._connector.commit()
        cursor.close()

        return result

    def insert(self, participation):
        cursor = self._connector.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM join_group_request ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """
                If a max ID is recognized, we count this
                by 1 and assign this value as ID to the participation object. 
                """
                participation.set_id(maxid[0] + 1)
            else:
                """
                If a max ID is not recognized, we assume that the table is empty
                and that we can start with 1 as ID. 
                """

                participation.set_id(1)

        command = "INSERT INTO join_group_request (id, student_id, group_id, accepted_at) VALUES (%s,%s,%s,%s)"
        data = (participation.get_id(), participation.get_student_id(), participation.get_group_id(), participation.get_accepted_at())
        cursor.execute(command, data)

        self._connector.commit()
        cursor.close()

        return participation

    def update(self, key, participation):
        cursor = self._connector.cursor()

        command = "UPDATE join_group_request " + "SET accepted_at=%s WHERE id=%s"
        data = (participation.get_id(), participation.get_student_id(), participation.get_group_id(), participation.get_accepted_at())
        cursor.execute(command, data)

        self._connector.commit()
        cursor.close()

    def delete(self, participation):
        cursor = self._connector.cursor()

        command = "DELETE FROM join_group_request WHERE id={}".format(participation.get_id())
        cursor.execute(command)

        self._connector.commit()
        cursor.close()
