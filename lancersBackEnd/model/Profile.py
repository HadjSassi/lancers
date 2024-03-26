from enum import Enum
from datetime import datetime

class Sexe(Enum):
    Male = 1
    Female = 2
    Other = 3

class Profile:
    def __init__(self, isAdmin: bool, email: str, password: str, nom: str, prenom: str, phone: int, adresse: str, fonction: str, birthday: datetime, sexe: Sexe, facebook: str, linkedin: str, github: str, liens: list[str], photoProfile: str):
        self._isAdmin = isAdmin
        self._email = email
        self._password = password
        self._nom = nom
        self._prenom = prenom
        self._phone = phone
        self._adresse = adresse
        self._fonction = fonction
        self._birthday = birthday
        self._sexe = sexe
        self._facebook = facebook
        self._linkedin = linkedin
        self._github = github
        self._liens = liens
        self._photoProfile = photoProfile

    @property
    def isAdmin(self) -> bool:
        return self._isAdmin

    @isAdmin.setter
    def isAdmin(self, value: bool):
        self._isAdmin = value

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, value: str):
        self._email = value

    @property
    def password(self) -> str:
        return self._password

    @password.setter
    def password(self, value: str):
        self._password = value

    @property
    def nom(self) -> str:
        return self._nom

    @nom.setter
    def nom(self, value: str):
        self._nom = value

    @property
    def prenom(self) -> str:
        return self._prenom

    @prenom.setter
    def prenom(self, value: str):
        self._prenom = value

    @property
    def phone(self) -> int:
        return self._phone

    @phone.setter
    def phone(self, value: int):
        self._phone = value

    @property
    def adresse(self) -> str:
        return self._adresse

    @adresse.setter
    def adresse(self, value: str):
        self._adresse = value

    @property
    def fonction(self) -> str:
        return self._fonction

    @fonction.setter
    def fonction(self, value: str):
        self._fonction = value

    @property
    def birthday(self) -> datetime:
        return self._birthday

    @birthday.setter
    def birthday(self, value: datetime):
        self._birthday = value

    @property
    def sexe(self) -> Sexe:
        return self._sexe

    @sexe.setter
    def sexe(self, value: Sexe):
        self._sexe = value

    @property
    def facebook(self) -> str:
        return self._facebook

    @facebook.setter
    def facebook(self, value: str):
        self._facebook = value

    @property
    def linkedin(self) -> str:
        return self._linkedin

    @linkedin.setter
    def linkedin(self, value: str):
        self._linkedin = value

    @property
    def github(self) -> str:
        return self._github

    @github.setter
    def github(self, value: str):
        self._github = value

    @property
    def liens(self) -> list[str]:
        return self._liens

    @liens.setter
    def liens(self, value: list[str]):
        self._liens = value

    @property
    def photoProfile(self) -> str:
        return self._photoProfile

    @photoProfile.setter
    def photoProfile(self, value: str):
        self._photoProfile = value

