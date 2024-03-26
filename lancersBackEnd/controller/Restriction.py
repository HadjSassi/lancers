from flask import  request, json, Response
from services.RestrictionService import RestrictionService

def restriction_readall():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=444,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.read_all()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def get_restriction_by_owner_email():
    data = request.json
    if data is None or data == {} or 'email' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.get_projects_by_lancer_email(data['email'])
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')
def get_restriction_by_owner_email_and_date():
    data = request.json
    if data is None or data == {} or 'email' not in data or 'date' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.get_projects_by_lancer_email_and_date(data['email'],data['date'])
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')
def get_restriction_by_id():
    data = request.json
    if data is None or data == {} or 'id' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.get_Restriction_by_id(data['id'])
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')

def restriction_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')


def restriction_update():
    data = request.json
    if data is None or data == {} or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.update()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def restriction_delete():
    data = request.json
    if data is None or data == {} or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = RestrictionService(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response),
                    status=202,
                    mimetype='application/json')

