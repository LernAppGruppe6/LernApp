"""from server.bo.StudyGroup import StudyGroup
from server.bo.Person import Person"""
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

        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM join_group_request")
        tuples = cursor.fetchall()

        for (id, student_id, group_id, accepted_at) in tuples:
            jgr = StudyGroup()
            jgr.set_id(id)
            jgr.set_student_id()
            jgr.set_group_id()
            jgr.set_accepted_at()

        self._connection.commit()
        cursor.close()

        return result


