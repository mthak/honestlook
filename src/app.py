from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from pymongo import MongoClient
import hashlib
import logging
app = Flask(__name__)
CORS(app)


@app.route('/adduser', methods=['POST'])
def parse_message():
    '''POST method to parse messages message 
        and return sha1sum for the message
        and save it in the mongodb
    '''
    req = request.get_json()
    data =  req['data']
    result = db.collection.find_one({'name': data['name']})
    if result is None:
        retval = db.collection.insert_one(data)
        return jsonify("User updated successfully")
    else:
        exception = dict(
            {"message": "A user  with this value already exist"})
        raise Exception(exception)
    return retval

@app.route('/getuser/<username>', methods=['GET'])
def message_retrieve(username):
    ''' GET method check if a message with provided sha1sum 
        exists in the data store
        is yes return the msssage
    '''
    result = db.collection.find_one(
        {"name": username},{ "_id": 0})
    print "result is ", result
    if result is not None:
        return jsonify(**result)
    else:
        return abort(404,'{"Err_msg User  not found"}')
 
@app.route('/updatemeta', methods=['POST'])
def update_meta():
    metadata = request.get_json()
    print "metadata is " , metadata
    if 'name' and 'video' not in metadata:
        raise Exception("wrong data sent")
    query = db.collection.find_one({'name': metadata['name']})
    print "got you" , query
    if query:
       videos = query.get('videos', None)
       if videos:
          videos.append(metadata['video'])
       else:
           videos = [metadata['video']]
    data = {'name': metadata['name'] }
    update_val = { '$set': { 'videos': videos } }       
    updated = db.collection.update_one(data, update_val)   
    print "updated", updated  
    return updated

if __name__ == "__main__":
    LOG_FORMAT = '[%(asctime)s] %(process)d %(module)-12s %(levelname)-8s %(message)s'
    DATE_FORMAT = '%d/%b/%Y %H:%M:%S %z'
    logging.basicConfig(level=logging.INFO,
                        format=LOG_FORMAT, datefmt=DATE_FORMAT)
    client = MongoClient('mongodb://localhost/27017')
    db = client['hlook']
    collection = db['userinfo']
    app.run(debug=True, host='0.0.0.0')
