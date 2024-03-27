from flask import request, json, Response
from services.ProjectService import ProjectService

project_service = ProjectService()

def project_readall():
    response = project_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_projects_by_owner_email():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = project_service.get_projects_by_owner_email(email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_project_by_id():
    id = request.args.get('id')
    if id is None:
        return Response(response=json.dumps({"Error": "Please provide a project ID"}), status=400, mimetype='application/json')
    response = project_service.get_Project_by_id(id)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def project_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = project_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def project_update():
    data = request.json
    if data is None or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = project_service.update(data['Filter'],data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def project_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = project_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
