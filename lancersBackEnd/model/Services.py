from datetime import datetime

class Services:
    def __init__(self, idService: int, ownerEmail: str, name: str, description: str, score: int, approved: bool, datePublication: datetime, prix: float, durre: str, hidden: bool):
        self._idService = idService
        self._ownerEmail = ownerEmail
        self._name = name
        self._description = description
        self._score = score
        self._approved = approved
        self._datePublication = datePublication
        self._prix = prix
        self._durre = durre
        self._hidden = hidden

    @property
    def idService(self) -> int:
        return self._idService

    @idService.setter
    def idService(self, value: int):
        self._idService = value

    @property
    def ownerEmail(self) -> str:
        return self._ownerEmail

    @ownerEmail.setter
    def ownerEmail(self, value: str):
        self._ownerEmail = value

    @property
    def name(self) -> str:
        return self._name

    @name.setter
    def name(self, value: str):
        self._name = value

    @property
    def description(self) -> str:
        return self._description

    @description.setter
    def description(self, value: str):
        self._description = value

    @property
    def score(self) -> int:
        return self._score

    @score.setter
    def score(self, value: int):
        self._score = value

    @property
    def approved(self) -> bool:
        return self._approved

    @approved.setter
    def approved(self, value: bool):
        self._approved = value

    @property
    def datePublication(self) -> datetime:
        return self._datePublication

    @datePublication.setter
    def datePublication(self, value: datetime):
        self._datePublication = value

    @property
    def prix(self) -> float:
        return self._prix

    @prix.setter
    def prix(self, value: float):
        self._prix = value

    @property
    def durre(self) -> str:
        return self._durre

    @durre.setter
    def durre(self, value: str):
        self._durre = value

    @property
    def hidden(self) -> bool:
        return self._hidden

    @hidden.setter
    def hidden(self, value: bool):
        self._hidden = value

