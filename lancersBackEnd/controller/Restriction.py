from flask import request, json, Response
from services.RestrictionService import RestrictionService

restriction_service = RestrictionService()

def restriction_readall():
    response = restriction_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')


def get_restriction_by_owner_email():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = restriction_service.get_projects_by_lancer_email(email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_restriction_by_owner_email_and_date():
    email = request.args.get('email')
    date = request.args.get('date')
    if email is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide owner's email and date"}), status=400, mimetype='application/json')
    response = restriction_service.get_projects_by_lancer_email_and_date(email, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_restriction_by_id():
    id = request.args.get('id')
    if id is None:
        return Response(response=json.dumps({"Error": "Please provide a restriction ID"}), status=400, mimetype='application/json')
    response = restriction_service.get_Restriction_by_id(id)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def restriction_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = restriction_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def restriction_update():
    data = request.json
    if data is None or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = restriction_service.update(data['Filter'],data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def restriction_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = restriction_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
