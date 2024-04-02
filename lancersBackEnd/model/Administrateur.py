from enum import Enum

class Previliege(Enum):
    tous = 1
    validerContract = 2
    attribuerScoreLancer = 3
    attribuerScoreService = 4
    deverouillerLancer = 5
    restreindreLancer = 6
    supprimerLancer = 7
    validerService = 8
    modifierService = 9
    supprimerService = 10

class Administrateur:
    def __init__(self, email: str, privileges: list[Previliege]):
        self._email = email
        self._privileges = privileges

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, value: str):
        self._email = value

    @property
    def privileges(self) -> list[Previliege]:
        return self._privileges

    @privileges.setter
    def privileges(self, value: list[Previliege]):
        self._privileges = value

