from flask import request, json, Response
from services.CommentaireService import CommentaireService

commentaire_service = CommentaireService()

def comment_readall():
    response = commentaire_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_email():
    email = request.args.get('email')
    if email is None:
        return Response(response=json.dumps({"Error": "Please provide an email address"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_email(email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_email_and_date():
    email = request.args.get('email')
    date = request.args.get('date')
    if email is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide an email address and a date"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_email_and_date(email, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_service_id():
    service_id = request.args.get('service_id')
    if service_id is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_service_id(service_id)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_service_id_and_date():
    service_id = request.args.get('service_id')
    date = request.args.get('date')
    if service_id is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID and a date"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_service_id_and_date(service_id, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_service_id_and_email():
    service_id = request.args.get('service_id')
    email = request.args.get('email')
    if service_id is None or email is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID and an email address"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_service_id_and_email(service_id, email)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def get_comments_by_service_id_and_email_and_date():
    service_id = request.args.get('service_id')
    email = request.args.get('email')
    date = request.args.get('date')
    if service_id is None or email is None or date is None:
        return Response(response=json.dumps({"Error": "Please provide a service ID, an email address, and a date"}), status=400, mimetype='application/json')
    response = commentaire_service.get_comments_by_service_id_and_email_and_date(service_id, email, date)
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def comment_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = commentaire_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def comment_update():
    data = request.json
    if data is None or 'Filter' not in data or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = commentaire_service.update(data['Filter'], data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def comment_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = commentaire_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
