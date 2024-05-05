from flask import request, json, Response
from services.ServicesService import ServicesService

services_service = ServicesService()


def services_readall():
  response = services_service.read_all()
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def services_all():
  year_ = int(request.args.get('year'))
  month_ = int(request.args.get('month'))
  response = services_service.get_services_by_date(year_, month_)
  if len(response) > 5 :
    return Response(response=json.dumps(response), status=200, mimetype='application/json')
  else :
    year_ = int(request.args.get('year'))
    month_ = int(request.args.get('month'))-1
    if month_ == 0:
      year_ -=1
      month_ = 11
    response.extend(services_service.get_services_by_date(year_, month_))
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_Service_By_Id():
  id = request.args.get('id')
  if id is None:
    return Response(response=json.dumps({"Error": "Please provide a service ID"}), status=400,
                    mimetype='application/json')
  response = services_service.get_service_by_id(id)
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def get_Service_By_email():
  email = request.args.get('email')
  if email is None:
    return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400,
                    mimetype='application/json')
  response = services_service.get_services_by_owner_email(email)
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def get_Service_By_email_and_approved():
  email = request.args.get('email')
  if email is None:
    return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400,
                    mimetype='application/json')
  response = services_service.get_services_by_owner_email_and_approved(email)
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def get_Service_By_email_and_not_approved():
  email = request.args.get('email')
  if email is None:
    return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400,
                    mimetype='application/json')
  response = services_service.get_services_by_owner_email_and_not_approved(email)
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def services_write():
  data = request.json
  if data is None or 'Document' not in data:
    return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400,
                    mimetype='application/json')
  response = services_service.write(data['Document'])
  return Response(response=json.dumps(response), status=201, mimetype='application/json')


def services_update():
  data = request.json
  if data is None or 'DataToBeUpdated' not in data:
    return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400,
                    mimetype='application/json')
  response = services_service.update(data['Filter'], data['DataToBeUpdated'])
  return Response(response=json.dumps(response), status=200, mimetype='application/json')


def services_delete():
  data = request.json
  if data is None or 'Filter' not in data:
    return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400,
                    mimetype='application/json')
  response = services_service.delete(data['Filter'])
  return Response(response=json.dumps(response), status=202, mimetype='application/json')
