from server.bo.StudyGroup import StudyGroup
from server.db.Mapper import Mapper


class GroupMapper(Mapper):
    """
    Mapper class that maps learning group objects to a relational database.
    The class enables the conversion of objects into database structures and vice versa.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Read out all learning groups.
        :return A collection of study group objects representing all study groups.
        """

        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM group")
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_members, place_of_learning, frequency, subject_id) in tuples:
