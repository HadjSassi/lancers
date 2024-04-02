from flask import request, json, Response
from services.SkillService import SkillService

skill_service = SkillService()

def skill_readall():
    response = skill_service.read_all()
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def skill_write():
    data = request.json
    if data is None or 'Document' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = skill_service.write(data['Document'])
    return Response(response=json.dumps(response), status=201, mimetype='application/json')

def skill_update():
    data = request.json
    if data is None or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = skill_service.update(data['Filter'],data['DataToBeUpdated'])
    return Response(response=json.dumps(response), status=200, mimetype='application/json')

def skill_delete():
    data = request.json
    if data is None or 'Filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}), status=400, mimetype='application/json')
    response = skill_service.delete(data['Filter'])
    return Response(response=json.dumps(response), status=202, mimetype='application/json')
