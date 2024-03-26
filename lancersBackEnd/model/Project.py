class Project:
    def __init__(self, idProject: int, ownerEmail: str, name: str, description: str, link: list[str], images: list[str], iframes: list[str]):
        self._idProject = idProject
        self._ownerEmail = ownerEmail
        self._name = name
        self._description = description
        self._link = link
        self._images = images
        self._iframes = iframes

    @property
    def idProject(self) -> int:
        return self._idProject

    @idProject.setter
    def idProject(self, value: int):
        self._idProject = value

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
    def link(self) -> list[str]:
        return self._link

    @link.setter
    def link(self, value: list[str]):
        self._link = value

    @property
    def images(self) -> list[str]:
        return self._images

    @images.setter
    def images(self, value: list[str]):
        self._images = value

    @property
    def iframes(self) -> list[str]:
        return self._iframes

    @iframes.setter
    def iframes(self, value: list[str]):
        self._iframes = value

