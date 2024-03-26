class Skill:
    def __init__(self, skill: str):
        self._skill = skill

    @property
    def skill(self) -> str:
        return self._skill

    @skill.setter
    def skill(self, value: str):
        self._skill = value

