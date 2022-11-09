class Participation:
    pass
    "" "Eine Klasse die den Status des Users bestimmen soll."""

    print(help(Participation))

    def __init__(self, status, datetime, userid, name):
        self._status = status
        self._datetime = datetime
        self._userid = userid
        self._name = name

    def set_status(self, status: str):
        self._status = status

    def set_datetime(self, datetime: int):
        self._datetime = datetime
        return self._status

    def set_userid(self, userid: str):
        self._userid = userid
        return self._datetime

    def set_name(self, name: str):
        self._name = name
        return self._userid









