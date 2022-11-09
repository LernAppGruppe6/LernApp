class Message:
    """
    Class Message, which implements a simple message with attributes for text_message.
    """

    def _init_(self, text_message ):
        self._text_message = text_message


    def set_text_message(self, text_message: str):
        """
        Defines the text_message of a Message.
        """
        self._text_message = text_message

    def get_text_message(self) -> str:
        """
        Returns the text_message of a message.
        """
        return self._text_message