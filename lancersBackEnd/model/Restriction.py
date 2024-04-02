from datetime import datetime

class Restriction:
    def __init__(self, idRestriction: int, lancerEmail: str, debut: datetime, fin: datetime, raison: str, enExecution: bool):
        self._idRestriction = idRestriction
        self._lancerEmail = lancerEmail
        self._debut = debut
        self._fin = fin
        self._raison = raison
        self._enExecution = enExecution

    @property
    def idRestriction(self) -> int:
        return self._idRestriction

    @idRestriction.setter
    def idRestriction(self, value: int):
        self._idRestriction = value

    @property
    def lancerEmail(self) -> str:
        return self._lancerEmail

    @lancerEmail.setter
    def lancerEmail(self, value: str):
        self._lancerEmail = value

    @property
    def debut(self) -> datetime:
        return self._debut

    @debut.setter
    def debut(self, value: datetime):
        self._debut = value

    @property
    def fin(self) -> datetime:
        return self._fin

    @fin.setter
    def fin(self, value: datetime):
        self._fin = value

    @property
    def raison(self) -> str:
        return self._raison

    @raison.setter
    def raison(self, value: str):
        self._raison = value

    @property
    def enExecution(self) -> bool:
        return self._enExecution

    @enExecution.setter
    def enExecution(self, value: bool):
        self._enExecution = value
