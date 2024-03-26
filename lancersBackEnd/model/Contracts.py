from datetime import datetime
from enum import Enum

class Etat(Enum):
    Attente = 1
    EnCours = 2
    Fini = 3
    Retard = 4
    Rejected = 5
    Approved = 6

class Contracts:
    def __init__(self, id: int, email: str, idService: int, dateDebut: datetime, dateLivraison: datetime, prix: float, etat: Etat):
        self._id = id
        self._email = email
        self._idService = idService
        self._dateDebut = dateDebut
        self._dateLivraison = dateLivraison
        self._prix = prix
        self._etat = etat

    @property
    def id(self) -> int:
        return self._id

    @id.setter
    def id(self, value: int):
        self._id = value

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
    def dateDebut(self) -> datetime:
        return self._dateDebut

    @dateDebut.setter
    def dateDebut(self, value: datetime):
        self._dateDebut = value

    @property
    def dateLivraison(self) -> datetime:
        return self._dateLivraison

    @dateLivraison.setter
    def dateLivraison(self, value: datetime):
        self._dateLivraison = value

    @property
    def prix(self) -> float:
        return self._prix

    @prix.setter
    def prix(self, value: float):
        self._prix = value

    @property
    def etat(self) -> Etat:
        return self._etat

    @etat.setter
    def etat(self, value: Etat):
        self._etat = value

