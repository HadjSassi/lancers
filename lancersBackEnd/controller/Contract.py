from flask import request, json, Response
from services.ContractService import ContractService
from services.ServicesService import ServicesService
import datetime


contract_service = ContractService()
services_service = ServicesService()

def contract_readall():
    response = contract_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')


def get_contracts_by_requestee_email():
  requestee_email = request.args.get('email')
  current_year = int(request.args.get('year'))
  current_month = int(request.args.get('month'))

  if requestee_email is None:
    return Response(response=json.dumps({"Error": "Please provide a requestee email"}), status=400,
                    mimetype='application/json')

  # Find services owned by the requestee email
  services_owned_by_requestee = services_service.get_services_by_owner_email(requestee_email)

  if not services_owned_by_requestee:
    return Response(response=json.dumps({"Error": "No services found for the requestee"}), status=400,
                    mimetype='application/json')

  # Get all contracts associated with the services
  contracts = []

  for service in services_owned_by_requestee:
    service_id = service.get('idService')
    service_contracts = contract_service.get_contracts_by_service_id(service_id)

    for contract in service_contracts:
      # Add service information to the contract
      dateDebut = datetime.datetime.strptime(contract['dateDebut'], '%Y-%m-%dT%H:%M:%S.%fZ')
      dateLivraison = datetime.datetime.strptime(contract['dateLivraison'], '%Y-%m-%dT%H:%M:%S.%fZ')

      if current_month != 0:  # Fetch contracts for a specific month of the year
        if dateDebut.month == current_month and dateDebut.year == current_year:
          contract['service'] = service
          contracts.append(contract)
        elif dateLivraison.month == current_month and dateLivraison.year == current_year:
          contract['service'] = service
          contracts.append(contract)
      else:  # Fetch all contracts for the specified year
        if dateDebut.year == current_year:
          contract['service'] = service
          contracts.append(contract)
        elif dateLivraison.year == current_year:
          contract['service'] = service
          contracts.append(contract)


  return Response(response=json.dumps(contracts), status=200, mimetype='application/json')

def get_contract_by_email():
    email = request.args.get('email')
    year_ = int(request.args.get('year'))
    month_ = int(request.args.get('month'))
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')

    response = contract_service.get_contracts_by_demandeur_email(email, year_, month_)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_id():
    id = request.args.get('id')
    if id is None:
        return Response(response=json.dumps({"Error": "Please provide a contract ID"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_demandeur_id(id)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_email_and_etat():
    email = request.args.get('email')
    etat = request.args.get('etat')
    if email is None or etat is None:
        return Response(response=json.dumps({"Error": "Please provide an email address and a state"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_demandeur_email_and_etat(email, etat)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_service_By_contract_Id():
    contract_id = request.args.get('id')
    contract = contract_service.get_contracts_by_demandeur_id(contract_id)
    if not contract:
      return Response(response=json.dumps({"Error": "Contract not found."}), status=404, mimetype='application/json')

    service_id = contract.get('idService')
    if not service_id:
      return Response(response=json.dumps({"Error": "Service ID not found in the contract."}), status=400,
                      mimetype='application/json')

    # Assuming you have a method in your Service class to get service by ID
    service = services_service.get_service_by_id(service_id)
    if not service:
      return Response(response=json.dumps({"Error": "Service not found."}), status=404, mimetype='application/json')

    return Response(response=json.dumps(service), status=200, mimetype='application/json')

def get_contract_by_email_and_date():
    email = request.args.get('email')
    date = request.args.get('date')
    if email is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide an email address and a date"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_demandeur_email_and_date(email, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service():
    service = request.args.get('service')
    if service is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id(service)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service_and_date():
    service = request.args.get('service')
    date = request.args.get('date')
    if service is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID and a date"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id_and_date(service, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service_and_etat():
    service = request.args.get('service')
    etat = request.args.get('etat')
    if service is None or etat is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID and a state"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id_and_etat(service, etat)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service_and_email():
    service = request.args.get('service')
    email = request.args.get('email')
    if service is None or email is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID and an email address"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id_and_demandeur_email(service, email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service_and_email_and_date():
    service = request.args.get('service')
    email = request.args.get('email')
    date = request.args.get('date')
    if service is None or email is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID, an email address, and a date"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id_and_demandeur_email_and_date(service, email, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_service_and_email_and_etat():
    service = request.args.get('service')
    email = request.args.get('email')
    etat = request.args.get('etat')
    if service is None or email is None or etat is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID, an email address, and a state"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_service_id_and_demandeur_email_and_etat(service, email, etat)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def contract_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = contract_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def contract_update():
    data = request.json
    if data is None or 'DataToBeUpdated' not in data or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = contract_service.update(data['Filter'],data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def contract_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = contract_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
