from pymongo import MongoClient
from mongo_setup import URL


class ProjectService:
    def __init__(self):
        self.client = MongoClient(URL)
        self.database = self.client['Lancers']
        self.collection = self.database['Project']
        self.id_collection = self.database['Indexes']

    def get_next_id(self):
      doc = self.id_collection.find_one_and_update({}, {'$inc': {'project_id': 1}}, upsert=True, return_document=True)
      return doc['project_id']

    def read_all(self):
        documents = self.collection.find()
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

        # Get contracts by id
    def get_Project_by_id(self, id):
        document = self.collection.find_one({"idProject": id})
        if document:
            output = {item: document[item] for item in document if item != '_id'}
            return output
        else:
            return {'Status': 'Project not found.'}

    # Get contracts by email of demandeur
    def get_projects_by_owner_email(self, email):
        documents = self.collection.find({"ownerEmail": email})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output

    def write(self, new_document):
        new_document['idProject'] = self.get_next_id()
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted', 'Document_ID': str(response.inserted_id)}
        return output

    def update(self, filt, updated_data):
        response = self.collection.update_one(filt, {"$set": updated_data})
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output

    def delete(self, filt):
        response = self.collection.delete_one(filt)
        output = {'Status': 'Successfully Deleted' if response.deleted_count > 0 else "Document not found."}
        return output


