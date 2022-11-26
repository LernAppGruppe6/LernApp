from ..bo import LearningPreferences
from . import Mapper
from uuid import UUID



class GroupMessageMapper(Mapper):

    def __int__(self):
        super().__init__()


    def find_all(self):
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM message")
        tuples = cursor.fetchall()

        for (id, conversation_id, sender_id, receiver_id, text, sent_at) in tuples:
            message = Message()
            message._set_id(id)
            message._set_conversation_id(conversation_id)
            message._set_sender_id(sender_id)
            message._set_receiver_id(receiver_id)
            message._set_text(text)
            message._set_sent_at(sent_at)
            result.append(message)

        self._connection.commit()

        return result

    def find_by_key(self, key):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM message WHERE id='{}'".format(key))
        tuples = cursor.fetchall()

        try:
            (id, conversation_id, sender_id, receiver_id, text, sent_at) = tuples[0]
            message = Message()
            message._set_id(id)
            message._set_conversation_id(conversation_id)
            message._set_sender_id(sender_id)
            message._set_receiver_id(receiver_id)
            message._set_text(text)
            message._set_sent_at(sent_at)
            result = message
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, message: Message):
        cursor = self._connection.cursor()
        query = "INSERT INTO message (id, conversation_id, sender_id, receiver_id, text, sent_at) VALUES (%s, %s, %s, %s, %s, %s)"
        data = (
            str(message._get_id()),
            message._get_conversation_id(),
            message._get_sender_id(),
            message._get_receiver_id(),
            message._get_text(),
            message._get_sent_at(),
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return message

    def update(self, message: Message):
        cursor = self._connection.cursor()
        query = "UPDATE message SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            message._get_conversation_id(),
            message._get_sender_id(),
            message._get_receiver_id(),
            message._get_text(),
            message._get_sent_at(),
            str(message._get_id())
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, message: Message):
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM message WHERE id = '{}'".format(str(message._get_id())))

        self._connection.commit()
        cursor.close()
