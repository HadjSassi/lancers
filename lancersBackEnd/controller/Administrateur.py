from flask import request, json, Response
from services.AdministrateurService import AdministrateurService

administrateur_service = AdministrateurService()

def admin_readall():
    response = administrateur_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def admin_getByEmail():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = administrateur_service.get_by_email(email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def admin_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = administrateur_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def admin_update():
    data = request.json
    if data is None or 'Filter' not in data or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = administrateur_service.update(data['Filter'], data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def admin_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = administrateur_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
