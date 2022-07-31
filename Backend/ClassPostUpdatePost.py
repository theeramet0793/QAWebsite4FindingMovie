from flask import  request
from flask_restful import Resource
import json
import pymysql

class UpdatePost(Resource):
    def post(self):
        data = json.loads(request.data)
        print(data)
        connection = pymysql.connect(host='localhost', user='root', password='root',db='qadb')
        mycursor = connection.cursor()
        mycursor.execute("UPDATE TblPost SET  PostDetail = %s, PostType = %s, Movie =%s, LastUpdate =%s, IsDeleted =%s WHERE PostId = %s; ",(data['postDetail'],data['postType'],data['movie'],data['lastUpdate'],data['isDeleted'],data['PostId']))
        connection.commit()
        connection.close()  
        return 'Recieved'