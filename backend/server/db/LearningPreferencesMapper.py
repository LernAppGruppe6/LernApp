from ..bo import LearningPreferences
from . import Mapper
from uuid import UUID


class LearningPreferencesMapper(Mapper):

    def __int__(self):
        super().__init__()


    def find_all(self):
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM learning_preferences")
        tuples = cursor.fetchall()

        for (id, learning_type, time, days, frequency, group_size, place_of_learning, prior_knowledge, extroversion) in tuples:
            learning_preferences = LearningPreferences()
            learning_preferences._set_id(UUID(id))
            learning_preferences._set_learning_type(learning_type)
            learning_preferences._set_time(time)
            learning_preferences._set_days(days)
            learning_preferences._set_frequency(frequency)
            learning_preferences._set_group_size(group_size)
            learning_preferences._set_place_of_learning(place_of_learning)
            learning_preferences._set_prior_knowledge(prior_knowledge)
            learning_preferences._set_extroversion(extroversion)
            result.append(learning_preferences)

        self._connection.commit()
        cursor.close()

        return result

    def find_by_id(self, id):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT id FROM learning_preferences WHERE id='{}'".format(id))
        tuples = cursor.fetchall()

        try:
            (id, learning_type, time, days, frequency, group_size, place_of_learning, prior_knowledge, extroversion) = tuples[0]
            learning_preferences = LearningPreferences()
            learning_preferences._set_id(UUID(id))
            learning_preferences._set_learning_type(learning_type)
            learning_preferences._set_time(time)
            learning_preferences._set_days(days)
            learning_preferences._set_frequency(frequency)
            learning_preferences._set_group_size(group_size)
            learning_preferences._set_place_of_learning(place_of_learning)
            learning_preferences._set_prior_knowledge(prior_knowledge)
            learning_preferences._set_extroversion(extroversion)
            result = learning_preferences
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_learning_type(self, learning_type):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT learning_type FROM learning_preferences WHERE id='{}'".format(learning_type))
        tuples = cursor.fetchall()
        try:
            (id, learning_type, time, days, frequency, group_size, place_of_learning, prior_knowledge, extroversion) = tuples[0]
            learning_preferences = LearningPreferences()
            learning_preferences._set_id(UUID(id))
            learning_preferences._set_learning_type(learning_type)
            learning_preferences._set_time(time)
            learning_preferences._set_days(days)
            learning_preferences._set_frequency(frequency)
            learning_preferences._set_group_size(group_size)
            learning_preferences._set_place_of_learning(place_of_learning)
            learning_preferences._set_prior_knowledge(prior_knowledge)
            learning_preferences._set_extroversion(extroversion)
            result = learning_preferences
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, learning_preferences: LearningPreferences):
        cursor = self._connection.cursor()
        query = "INSERT INTO learning_preferences (id, learning_type, time, days, frequency, group_size, place_of_learning, prior_knowledge, extroversion) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        data = (
            str(learning_preferences._get_id()),
            learning_preferences._get_learning_type(),
            learning_preferences._get_time(),
            learning_preferences._get_days(),
            learning_preferences._get_frequency(),
            learning_preferences._get_group_size(),
            learning_preferences._get_place_of_learning(),
            learning_preferences._get_prior_knowledge(),
            learning_preferences._get_extroversion()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return learning_preferences

    def update(self, learning_preferences: LearningPreferences):
        cursor = self._connection.cursor()
        query = "UPDATE learning_preferences SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(learning_preferences._get_id()),
            learning_preferences._get_learning_type(),
            learning_preferences._get_time(),
            learning_preferences._get_days(),
            learning_preferences._get_frequency(),
            learning_preferences._get_group_size(),
            learning_preferences._get_place_of_learning(),
            learning_preferences._get_prior_knowledge(),
            learning_preferences._get_extroversion()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def update_by_id(self, learning_preferences: LearningPreferences):
        cursor = self._connection.cursor()
        query = "UPDATE learning_preferences SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(learning_preferences._get_id()),
            learning_preferences._get_learning_type(),
            learning_preferences._get_time(),
            learning_preferences._get_days(),
            learning_preferences._get_frequency(),
            learning_preferences._get_group_size(),
            learning_preferences._get_place_of_learning(),
            learning_preferences._get_prior_knowledge(),
            learning_preferences._get_extroversion()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, learning_preferences: LearningPreferences):
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM learning_preferences WHERE id = '{}'".format(str(learning_preferences._get_id())))

        self._connection.commit()
        cursor.close()