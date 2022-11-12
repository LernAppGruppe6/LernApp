""" from server.bo.NamedBusinessObject import NamedBusinessObject    """

class Message (NamedBusinessObject):

    def _init_(self, text_message, user_id, group_id ):
        super().__init__()
        self._text_message = text_message
        self._user_id = user_id
        self._group_id = group_id


    def set_text_message(self, text_message: str):
        self._text_message = text_message

    def get_text_message(self) -> str:
        return self._text_message

    def set_user_id(self, user_id: int ):
        self._user_id = user_id

    def get_user_id(self) -> int:
        return self._user_id

    def set_group_id(self, group_id: int):
        self._group_id = group_id

    def get_group_id(self) -> int:
        return self._group_id
