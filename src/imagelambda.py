import boto3
import json
import time
import os
from boto3 import client
import boto3
import os
import sys
import uuid
from urllib import unquote_plus

dataset = {}

def detect_faces(photo, bucket):

    client=boto3.client('rekognition')

    response = client.detect_faces(Image={'S3Object':{'Bucket':bucket,'Name':photo}},Attributes=['ALL'])


    for faceDetail in response['FaceDetails']:
        print('The detected face is between ' + str(faceDetail['AgeRange']['Low']) 
              + ' and ' + str(faceDetail['AgeRange']['High']) + ' years old')
        #print(json.dumps(faceDetail['Emotions'], indent=4, sort_keys=True))
        for data in faceDetail['Emotions']:
            if int(data['Confidence']) > 50:
                emotion = data['Type']
                if emotion in dataset:
                    dataset[emotion] = dataset[emotion] +1
                else:
                     dataset[emotion] = 1
                print(" dataset ::", dataset)                 
      
    return len(response['FaceDetails'])
        
def handler(event, context):
    conn = client('s3')
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = unquote_plus(record['s3']['object']['key'])
        if 'jpg' in key:
           face_count=detect_faces(key, bucket)
           print("Faces detected: " + str(face_count))
    timestamp = int(time.time())
    datefile = "datetime_{}".format(timestamp)
    with open(os.path.join("/tmp",datefile), 'w') as fh:
         fh.write(json.dumps(dataset))
    conn.upload_file(os.path.join("/tmp",datefile), 'worklook2', datefile)

def get_videos():
    conn = client('s3')
    for videos in conn.list_objects(Bucket='videolook2')['Contents']:
        if 'mp4' in videos['Key']:
            print " file name is " , videos['Key']
            conn.download_file('videolook2', videos['Key'], videos['Key'])
            create_frame(videos['Key'])


def create_frame(pathIn):
    count = 0
    cwd = os.getcwd()
    pathOut = os.path.join(cwd, 'frames')

    vidcap = cv2.VideoCapture(os.path.join(cwd, pathIn))
    success,image = vidcap.read()
    success = True
    while success:
      #vidcap.set(cv2.CV_CAP_PROP_POS_MSEC,(count*1000))    # added this line 
      success,image = vidcap.read()
      print ('Read a new frame: ', success)
      cv2.imwrite( pathOut + "/frame%d.jpg" % count, image)     # save frame 
      count = count + 1

