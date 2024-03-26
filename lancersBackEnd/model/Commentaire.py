from datetime import datetime

class Commentaire:
    def __init__(self, email: str, idService: int, contenu: str, dateComment: datetime):
        self._email = email
        self._idService = idService
        self._contenu = contenu
        self._dateComment = dateComment

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, value: str):
        self._email = value

    @property
    def idService(self) -> int:
        return self._idService

    @idService.setter
    def idService(self, value: int):
        self._idService = value

    @property
    def contenu(self) -> str:
        return self._contenu

    @contenu.setter
    def contenu(self, value: str):
        self._contenu = value

    @property
    def dateComment(self) -> datetime:
        return self._dateComment

    @dateComment.setter
    def dateComment(self, value: datetime):
        self._dateComment = value
