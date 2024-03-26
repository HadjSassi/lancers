from Skill import Skill

class Lancer:
    def __init__(self, email: str, score: int, skills: Skill, description: str):
        self._email = email
        self._score = score
        self._skills = skills
        self._description = description

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, value: str):
        self._email = value

    @property
    def score(self) -> int:
        return self._score

    @score.setter
    def score(self, value: int):
        self._score = value

    @property
    def skills(self) -> Skill:
        return self._skills

    @skills.setter
    def skills(self, value: Skill):
        self._skills = value

    @property
    def description(self) -> str:
        return self._description

    @description.setter
    def description(self, value: str):
        self._description = value
