from flask import  request, json, Response
from services.ServicesService import ServicesService

def services_readall():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=444,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.read_all()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')

def get_Service_By_Id():
    data = request.json
    if data is None or data == {} or 'id' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.get_service_by_id(data['id'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_Service_By_email():
    data = request.json
    if data is None or data == {} or 'email' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.get_services_by_owner_email(data['email'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_Service_By_email_and_approved():
    data = request.json
    if data is None or data == {} or 'email' not in data :
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.get_services_by_owner_email_and_approved(data['email'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_Service_By_email_and_not_approved():
    data = request.json
    if data is None or data == {} or 'email' not in data :
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.get_services_by_owner_email_and_not_approved(data['email'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def services_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')


def services_update():
    data = request.json
    if data is None or data == {} or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.update()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def services_delete():
    data = request.json
    if data is None or data == {} or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = ServicesService(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response),
                    status=202,
                    mimetype='application/json')

