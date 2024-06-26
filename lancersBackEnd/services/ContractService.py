from pymongo import MongoClient
from mongo_setup import URL
from .ServicesService import ServicesService
import datetime

class ContractService:
    def __init__(self):
        self.client = MongoClient(URL)
        self.database = self.client['Lancers']
        self.collection = self.database['Contract']
        self.id_collection = self.database['Indexes']
        self.services_service = ServicesService()

    def get_next_id(self):
      doc = self.id_collection.find_one_and_update({}, {'$inc': {'contract_id': 1}}, upsert=True, return_document=True)
      return doc['contract_id']

    def read_all(self):
      documents = self.collection.find()
      output = []
      for data in documents:
        contract_info = {item: data[item] for item in data if item != '_id'}
        service_id = data.get('idService')
        if service_id:
          service_info = self.services_service.get_service_by_id(service_id)
          contract_info['service'] = service_info  # Add service information to the contract
        output.append(contract_info)
      return output

    # Get contracts by id
    def get_contracts_by_demandeur_id(self, id):
        id = int(id)
        document = self.collection.find_one({"id": id})
        if document:
            output = {item: document[item] for item in document if item != '_id'}
            service_id = document.get('idService')
            if service_id:
              service_info = self.services_service.get_service_by_id(service_id)
              output['service'] = service_info  # Add service information to the output
            return output
        else:
            return {'Status': 'Contract not found.'}

    # Get contracts by email of demandeur
    def get_contracts_by_demandeur_email(self, email, current_year,current_month = 0):
        query = {"email": email}
        # If a specific month is provided, add conditions for month and year
        if current_month != 0:
          start_date = datetime.datetime(current_year, current_month, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
          end_date = datetime.datetime(current_year, current_month + 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
          query["dateDebut"] = {"$gte": start_date, "$lt": end_date}
        else:
          start_date = datetime.datetime(current_year, 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
          end_date = datetime.datetime(current_year + 1, 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
          query["dateDebut"] = {"$gte": start_date, "$lt": end_date}
        documents = self.collection.find(query)
        output = []
        for data in documents:
          contract_info = {item: data[item] for item in data if item != '_id'}
          service_id = data.get('idService')
          if service_id:
            service_info = self.services_service.get_service_by_id(service_id)
            contract_info['service'] = service_info  # Add service information to the contract
          output.append(contract_info)
        return output

    # Get contracts by email of demandeur and etat
    def get_contracts_by_demandeur_email_and_etat(self, email, etat):
        documents = self.collection.find({"email": email, "Etat": etat})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by email of demandeur and date
    def get_contracts_by_demandeur_email_and_date(self, email, date):
        documents = self.collection.find({"email": email, "dateDebut": date})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service
    def get_contracts_by_service_id(self, service_id):
        documents = self.collection.find({"idService": service_id})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service and date
    def get_contracts_by_service_id_and_date(self, service_id, date):
        documents = self.collection.find({"idService": service_id, "dateDebut": date})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service and etat
    def get_contracts_by_service_id_and_etat(self, service_id, etat):
        documents = self.collection.find({"idService": service_id, "Etat": etat})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service and email of demandeur
    def get_contracts_by_service_id_and_demandeur_email(self, service_id, email):
        documents = self.collection.find({"idService": service_id, "email": email})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service and email of demandeur and date
    def get_contracts_by_service_id_and_demandeur_email_and_date(self, service_id, email, date):
        documents = self.collection.find({"idService": service_id, "email": email, "dateDebut": date})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get contracts by id of Service and email of demandeur and etat
    def get_contracts_by_service_id_and_demandeur_email_and_etat(self, service_id, email, etat):
        documents = self.collection.find({"idService": service_id, "email": email, "Etat": etat})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    def write(self, new_document):
        new_document['id'] = self.get_next_id()
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted', 'Document_ID': str(new_document['id'])}
        return output

    def update(self, filt, updated_data):
        response = self.collection.update_one(filt, {"$set": updated_data})
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output

    def delete(self, filt):
        response = self.collection.delete_one(filt)
        output = {'Status': 'Successfully Deleted' if response.deleted_count > 0 else "Document not found."}
        return output

