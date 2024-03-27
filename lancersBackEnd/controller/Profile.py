from flask import request, json, Response
from services.ProfileService import ProfileService

profile_service = ProfileService()

def profile_readall():
    response = profile_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_profile_by_email():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = profile_service.get_profile_by_email(email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def profile_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = profile_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def profile_update():
    data = request.json
    if data is None or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = profile_service.update(data['Filter'],data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def profile_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = profile_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
