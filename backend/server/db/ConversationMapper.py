from server.bo.Conversation import Conversation
from server.db.Mapper import Mapper
from uuid import UUID


class ConversationMapper(Mapper):

    def __int__(self):
        super().__init__()


    def find_all(self):
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM conversation")
        tuples = cursor.fetchall()

        for (id, requesting_student_id, receiving_student_id, subject_id, accepted_at) in tuples:
            conversation = Conversation()
            conversation._set_id(UUID(id))
            conversation._set_requesting_student_id()
            conversation._set_receiving_student_id(receiving_student_id)
            conversation._set_subject_id(subject_id)
            conversation._set_accepted_at(accepted_at)
            result.append(conversation)

        self._connection.commit()
        cursor.close()

        return result

    def find_by_id(self, id):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT id FROM conversation WHERE id='{}'".format(id))
        tuples = cursor.fetchall()

        try:
            (id, requesting_student_id, receiving_student_id, subject_id, accepted_at) = tuples[0]
            conversation = Conversation()
            conversation._set_id(UUID(id))
            conversation._set_requesting_student_id()
            conversation._set_receiving_student_id(receiving_student_id)
            conversation._set_subject_id(subject_id)
            conversation._set_accepted_at(accepted_at)
            result = conversation
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_subject_id(self, subject_id):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT subject_id FROM subject WHERE id='{}'".format(subject_id))
        tuples = cursor.fetchall()
        try:
            (id, requesting_student_id, receiving_student_id, subject_id, accepted_at) = tuples[0]
            conversation = Conversation()
            conversation._set_id(UUID(id))
            conversation._set_requesting_student_id()
            conversation._set_receiving_student_id(receiving_student_id)
            conversation._set_subject_id(subject_id)
            conversation._set_accepted_at(accepted_at)
            result = conversation
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, conversation: Conversation):
        cursor = self._connection.cursor()
        query = "INSERT INTO conversation (id, requesting_student_id, receiving_student_id, subject_id, accepted_at) VALUES (%s, %s, %s, %s, %s)"
        data = (
            str(conversation._get_id(UUID(id))),
            conversation._get_requesting_student_id(),
            conversation._get_receiving_student_id(),
            conversation._get_subject_id(),
            conversation._get_accepted_at(),
                )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return conversation

    def update(self, conversation: Conversation):
        cursor = self._connection.cursor()
        query = "UPDATE conversation SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(conversation._get_id(UUID(id))),
            conversation._get_requesting_student_id(),
            conversation._get_receiving_student_id(),
            conversation._get_subject_id(),
            conversation._get_accepted_at(),
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def update_by_id(self, conversation: Conversation):
        cursor = self._connection.cursor()
        query = "UPDATE conversation SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(conversation._get_id(UUID(id))),
            conversation._get_requesting_student_id(),
            conversation._get_receiving_student_id(),
            conversation._get_subject_id(),
            conversation._get_accepted_at(),
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, conversation: Conversation):
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM conversation WHERE id = '{}'".format(str(conversation._get_id())))

        self._connection.commit()
        cursor.close()