import mongoengine

URL  = "mongodb://localhost:27017/"
DATABASE = "Lancers"

#COLLECTIONS
ADMINS = "Administrateur"
COMMEN = "Commentaire"
CONTRA = "Contract"
LANCER = "Lancer"
PROFIL = "Profile"
PROJEC = "Project"
RESTRI = "Restricition"
SERVIC = "Services"
SKILLS = "Skill"
# GENDER = "Sexe"
# AVANCE = ""
# PRIVIL = ""

def global_init():
    mongoengine.register_connection(alias='lancers', name='Lancers')

