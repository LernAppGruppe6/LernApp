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
        :return A collection of study group objects representing all existing study groups.
        """

        result = []

        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM group")
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) in tuples:
            group = StudyGroup()
            group.set_id(id)
            group.set_creation_time(creation_time)
            group.set_name(name)
            group.set_max_participant(max_participants)
            group.set_place_of_learning(place_of_learning)
            group.set_frequency(frequency)
            group.set_subject_id(subject_id)

        self._connection.commit()
        cursor.close()

        return result


    def find_by_id(self, id):
        """
        read out a study group with a specific id.
        :return: a study group object that identifies with the id
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, name FROM group WHERE id='{}'".format(id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) in tuples:
            group = StudyGroup()
            group.set_id(id)
            group.set_creation_time(creation_time)
            group.set_name(name)
            group.set_max_participant(max_participants)
            group.set_place_of_learning(place_of_learning)
            group.set_frequency(frequency)
            group.set_subject_id(subject_id)
            result.append(group)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_name(self, name):
        """
        Read out a study group with a specific name
        :param name is the name of a study group in the database
        :return a study group object that identifies with the name
        """
        result = []
        cursor = self._connection.cursor()
        command = "SELECT * FROM lerngruppen WHERE name={}".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) in tuples:
            group = StudyGroup()
            group.set_id(id)
            group.set_creation_time(creation_time)
            group.set_name(name)
            group.set_max_participant(max_participants)
            group.set_place_of_learning(place_of_learning)
            group.set_frequency(frequency)
            group.set_subject_id(subject_id)
            result.append(group)

        self._connection.commit()
        cursor.close()

        return result


    def find_by_creation_time(self, creation_time):
        """
        Read out a study group with a specific name
        :param name is the name of a study group in the database
        :return a study group object that identifies with the name
        """
        result = []
        cursor = self._connection.cursor()
        command = "SELECT * FROM lerngruppen WHERE creation_time={}".format(creation_time)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) in tuples:
            group = StudyGroup()
            group.set_id(id)
            group.set_creation_time(creation_time)
            group.set_name(name)
            group.set_max_participant(max_participants)
            group.set_place_of_learning(place_of_learning)
            group.set_frequency(frequency)
            group.set_subject_id(subject_id)
            result.append(group)

        self._connection.commit()
        cursor.close()

        return result

    def find_by_learning_preferences(self, learning_preferences):
        """
        Read out a study group with a specific name
        :param name is the name of a study group in the database
        :return a study group object that identifies with the name
        """
        result = []
        cursor = self._connection.cursor()
        command = "SELECT * FROM lerngruppen WHERE learning_preferences={}".format(learning_preferences)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) in tuples:
            group = StudyGroup()
            group.set_id(id)
            group.set_creation_time(creation_time)
            group.set_name(name)
            group.set_max_participant(max_participants)
            group.set_place_of_learning(place_of_learning)
            group.set_frequency(frequency)
            group.set_subject_id(subject_id)
            result.append(group)

        self._connection.commit()
        cursor.close()

        return result

    """ 
    def find_group_by_google_user_id(self, key):
    """

    def insert(self, group):
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM group ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                group.set_id(maxid[0] + 1)
            else:
                """Wenn wir KEINE maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                group.set_id(1)

        command = "INSERT INTO group (id, creation_time, name, max_participants, place_of_learning, frequency, subject_id) VALUES (%s,%s,%s,%s,%s,%s,%s)"
        data = (group.get_id(), group.get_creation_time(), group.get_name(), group.get_max_participantsl(), group.get_place_of_learning(), group.get_frequency(), group.get_subject_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return group

    def update(self, group):
        cursor = self._cnx.cursor()

        command = "UPDATE group " + "SET name=%s, max_participants=%s, place_of_learning=%s, frequency=%s WHERE id=%s"
        (group.get_id(), group.get_creation_time(), group.get_name(), group.get_max_participantsl(), group.get_place_of_learning(), group.get_frequency(), group.get_subject_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, group):
        """
        Deleting the data of a study group object in the database
        """
        cursor = self._connection.cursor()

        command = "DELETE FROM group WHERE id={}".format(group.get_id())
        cursor.execute(command)

        self._connection.commit()
        cursor.close()