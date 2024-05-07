#to execute this file enter this "flask --app main.py run"

from flask import Flask, request, json, Response
from flask_cors import CORS
from controller.Administrateur import *
from controller.Commentaire import  *
from controller.Contract import *
from controller.Lancer import *
from controller.Profile import *
from controller.Project import *
from controller.Restriction import *
from controller.Services import *
from controller.Skill import *
app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:8100"}})
# CORS(app, resources={r"/*": {"origins": "http://localhost:4200"}})
CORS(app)

@app.route('/')
def base():
    return Response(response=json.dumps({"Application": "Lancers"}),
                    status=200,
                    mimetype='application/json')

#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Administrateur
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/admin', methods=['GET'])
def admin_read_all_():
    return admin_readall()

@app.route('/admin/email', methods=['GET'])
def admin_get_by_email_():
    return admin_getByEmail()


@app.route('/admin', methods=['POST'])
def admin_write_():
    return admin_write()


@app.route('/admin', methods=['PUT'])
def admin_update_():
    return admin_update()


@app.route('/admin', methods=['DELETE'])
def admin_delete_():
    return admin_delete()

#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Commentaire
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/comment', methods=['GET'])
def comment_read_all_():
    return comment_readall()

@app.route('/comment/email', methods=['GET'])
def get_comments_by_email_():
    return get_comments_by_email()

@app.route('/comment/email/date', methods=['GET'])
def get_comments_by_email_and_date_():
    return get_comments_by_email_and_date()

@app.route('/comment/service', methods=['GET'])
def get_comments_by_service_id_():
    return get_comments_by_service_id()

@app.route('/comment/service/date', methods=['GET'])
def get_comments_by_service_id_and_date_():
    return get_comments_by_service_id_and_date()

@app.route('/comment/service/email', methods=['GET'])
def get_comments_by_service_id_and_email_():
    return get_comments_by_service_id_and_email()

@app.route('/comment/service/email/date', methods=['GET'])
def get_comments_by_service_id_and_email_and_date_():
    return get_comments_by_service_id_and_email_and_date()

@app.route('/comment', methods=['POST'])
def comment_write_():
    return comment_write()


@app.route('/comment', methods=['PUT'])
def comment_update_():
    return comment_update()


@app.route('/comment', methods=['DELETE'])
def comment_delete_():
    return comment_delete()



#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Contract
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/contract', methods=['GET'])
def contract_read_all_():
    return contract_readall()

@app.route('/contract/id', methods=['GET'])
def get_contract_by_id_():
    return  get_contract_by_id()

@app.route('/contract/requestee', methods=['GET'])
def get_contracts_by_requestee_email_():
    return get_contracts_by_requestee_email()

@app.route('/contract/email', methods=['GET'])
def get_contract_by_email_():
    return  get_contract_by_email()

@app.route('/contract/email/date', methods=['GET'])
def get_contract_by_email_and_date_():
    return  get_contract_by_email_and_date()

@app.route('/contract/email/etat', methods=['GET'])
def get_contract_by_email_and_etat_():
    return  get_contract_by_email_and_etat()


@app.route('/contract/service/id', methods=['GET'])
def get_service_by_contract_id():
  return get_service_By_contract_Id()

@app.route('/contract/service', methods=['GET'])
def get_contract_by_service_():
    return  get_contract_by_service()

@app.route('/contract/service/date', methods=['GET'])
def get_contract_by_service_and_date_():
    return  get_contract_by_service_and_date()

@app.route('/contract/service/etat', methods=['GET'])
def get_contract_by_service_and_etat_():
    return  get_contract_by_service_and_etat()

@app.route('/contract/service/email', methods=['GET'])
def get_contract_by_service_and_email_():
    return  get_contract_by_service_and_email()
@app.route('/contract/service/email/date', methods=['GET'])
def get_contract_by_service_and_email_and_date_():
    return  get_contract_by_service_and_email_and_date()

@app.route('/contract/service/email/etat', methods=['GET'])
def get_contract_by_service_and_email_and_etat_():
    return  get_contract_by_service_and_email_and_etat()

@app.route('/contract', methods=['POST'])
def contract_write_():
    return contract_write()


@app.route('/contract', methods=['PUT'])
def contract_update_():
    return contract_update()


@app.route('/contract', methods=['DELETE'])
def contract_delete_():
    return contract_delete()


#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Lancer
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/lancer', methods=['GET'])
def lancer_read_all_():
    return lancer_readall()


@app.route('/lancer/email', methods=['GET'])
def get_lancer_by_email_():
    return  get_lancer_by_email()


@app.route('/lancer', methods=['POST'])
def lancer_write_():
    return lancer_write()


@app.route('/lancer', methods=['PUT'])
def lancer_update_():
    return lancer_update()


@app.route('/lancer', methods=['DELETE'])
def lancer_delete_():
    return lancer_delete()


#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Profile
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/profile', methods=['GET'])
def profile_read_all_():
    return profile_readall()

@app.route('/profile/email', methods=['GET'])
def get_profile_by_email_():
    return  get_profile_by_email()


@app.route('/profile', methods=['POST'])
def profile_write_():
    return profile_write()


@app.route('/profile', methods=['PUT'])
def profile_update_():
    return profile_update()


@app.route('/profile', methods=['DELETE'])
def profile_delete_():
    return profile_delete()



#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Project
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/project', methods=['GET'])
def project_read_all_():
    return project_readall()

@app.route('/project/id', methods=['GET'])
def get_project_by_id_():
    return  get_project_by_id()

@app.route('/project/email', methods=['GET'])
def get_project_by_email_():
    return  get_projects_by_owner_email()

@app.route('/project', methods=['POST'])
def project_write_():
    return project_write()


@app.route('/project', methods=['PUT'])
def project_update_():
    return project_update()


@app.route('/project', methods=['DELETE'])
def project_delete_():
    return project_delete()


#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Restricition
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/restriction', methods=['GET'])
def restriction_read_all_():
    return restriction_readall()

@app.route('/restriction/id', methods=['GET'])
def get_restriction_by_id_():
    return  get_restriction_by_id()

@app.route('/restriction/email', methods=['GET'])
def get_restriction_by_email_():
    return  get_restriction_by_owner_email()

@app.route('/restriction/email/date', methods=['GET'])
def get_restriction_by_email_and_date_():
    return  get_restriction_by_owner_email_and_date()

@app.route('/restriction', methods=['POST'])
def restriction_write_():
    return restriction_write()


@app.route('/restriction', methods=['PUT'])
def restriction_update_():
    return restriction_update()


@app.route('/restriction', methods=['DELETE'])
def restriction_delete_():
    return restriction_delete()



#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Services
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/services/all', methods=['GET'])
def services_read_all_():
    return services_readall()


@app.route('/services', methods=['GET'])
def services_all_():
    return services_all()


@app.route('/services/id', methods=['GET'])
def get_services_by_id_():
    return  get_Service_By_Id()

@app.route('/services/email', methods=['GET'])
def get_services_by_email_():
    return  get_Service_By_email()

@app.route('/services/email/approved', methods=['GET'])
def get_services_by_email_approved_():
    return  get_Service_By_email_and_approved()

@app.route('/services/email/notapproved', methods=['GET'])
def get_services_by_email_not_approved_():
    return  get_Service_By_email_and_not_approved()

@app.route('/services', methods=['POST'])
def services_write_():
    return services_write()


@app.route('/services', methods=['PUT'])
def services_update_():
    return services_update()


@app.route('/services', methods=['DELETE'])
def services_delete_():
    return services_delete()



#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------
#                           Skill
#-------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------

@app.route('/skill', methods=['GET'])
def skill_read_all_():
    return skill_readall()


@app.route('/skill', methods=['POST'])
def skill_write_():
    return skill_write()


@app.route('/skill', methods=['PUT'])
def skill_update_():
    return skill_update()


@app.route('/skill', methods=['DELETE'])
def skill_delete_():
    return skill_delete()


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
