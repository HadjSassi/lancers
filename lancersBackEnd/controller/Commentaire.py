from flask import  request, json, Response
from services.CommentaireService import CommentaireService

def comment_readall():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=444,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.read_all()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')

def get_comments_by_email():
    data = request.json
    if data is None or data == {} or 'email' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_email(data['email'])
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')

def get_comments_by_email_and_date():
    data = request.json
    if data is None or data == {} or 'email' not in data or 'date' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_email_and_date(data['email'],data['date'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_comments_by_service_id():
    data = request.json
    if data is None or data == {} or 'service' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_service_id(data['service'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_comments_by_service_id_and_date():
    data = request.json
    if data is None or data == {} or 'service' not in data or 'date' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_service_id_and_date(data['service'],data['date'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_comments_by_service_id_and_email():
    data = request.json
    if data is None or data == {} or 'email' not in data or 'service' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_service_id_and_email(data['service'],data['email'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')

def get_comments_by_service_id_and_email_and_date():
    data = request.json
    if data is None or data == {} or 'email' not in data or 'service' not in data or 'date' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.get_comments_by_service_id_and_email_and_date(data['service'],data['email'],data['date'])
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')


def comment_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response),
                    status=201,
                    mimetype='application/json')


def comment_update():
    data = request.json
    if data is None or data == {} or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.update()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


def comment_delete():
    data = request.json
    if data is None or data == {} or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = CommentaireService(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response),
                    status=202,
                    mimetype='application/json')

