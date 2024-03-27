from flask import request, json, Response
from services.ContractService import ContractService

contract_service = ContractService()

def contract_readall():
    response = contract_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_contract_by_email():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = contract_service.get_contracts_by_demandeur_email(email)
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
