from flask import  request, json, Response
from services.AdministrateurService import AdministrateurService

def admin_readall():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=444,
                        mimetype='application/json')
    obj1 = AdministrateurService(data)
    response = obj1.read_all()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')

def admin_getByEmail():
    data = request.json
    if data is None or data == {} or 'email' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=444,
                        mimetype='application/json')
    obj1 = AdministrateurService(data)
    response = obj1.get_by_email(data['email'])
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def admin_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = AdministrateurService(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')


def admin_update():
    data = request.json
    if data is None or data == {} or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = AdministrateurService(data)
    response = obj1.update()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def admin_delete():
    data = request.json
    if data is None or data == {} or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = AdministrateurService(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response),
                    status=202,
                    mimetype='application/json')

