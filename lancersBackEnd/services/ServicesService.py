from pymongo import MongoClient
from mongo_setup import URL
import datetime


class ServicesService:
    def __init__(self):
        self.client = MongoClient(URL)
        self.database = self.client['Lancers']
        self.collection = self.database['Services']
        self.id_collection = self.database['Indexes']

    def get_next_id(self):
      doc = self.id_collection.find_one_and_update({}, {'$inc': {'service_id': 1}}, upsert=True, return_document=True)
      return doc['service_id']

    def get_services_by_date(self, current_year, current_month=0):
      if current_month != 0:
        start_date = datetime.datetime(current_year, current_month, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
        end_date = datetime.datetime(current_year, current_month + 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
      else:
        start_date = datetime.datetime(current_year, 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
        end_date = datetime.datetime(current_year + 1, 1, 1).strftime('%Y-%m-%dT%H:%M:%S.%fZ')
      query = {"datePublication": {"$gte": start_date, "$lt": end_date}}
      documents = self.collection.find(query)
      output = [{item: data[item] for item in data if item != '_id'} for data in documents]
      return output


    def read_all(self):
        documents = self.collection.find()
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

        # Get service by id
    def get_service_by_id(self, service_id):
        service_id = int(service_id)
        document = self.collection.find_one({"idService": service_id})
        if document:
            output = {item: document[item] for item in document if item != '_id'}
            return output
        else:
            return {'Status': 'Service not found.'}

    # Get services by email of owner
    def get_services_by_owner_email(self, owner_email):
        documents = self.collection.find({"ownerEmail": owner_email})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get services by email of owner and approved
    def get_services_by_owner_email_and_approved(self, owner_email):
        documents = self.collection.find({"ownerEmail": owner_email, "approved": True})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    # Get services by email of owner and not approved
    def get_services_by_owner_email_and_not_approved(self, owner_email):
        documents = self.collection.find({"ownerEmail": owner_email, "approved": False})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    def write(self, new_document):
        new_document['idService'] = self.get_next_id()
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted', 'Document_ID': str(new_document['idService'])}
        return output

    def update(self, filt, updated_data):
        response = self.collection.update_one(filt, {"$set": updated_data})
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output

    def delete(self, filt):
        response = self.collection.delete_one(filt)
        output = {'Status': 'Successfully Deleted' if response.deleted_count > 0 else "Document not found."}
        return output


