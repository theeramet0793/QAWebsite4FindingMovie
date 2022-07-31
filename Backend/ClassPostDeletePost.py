from flask import  request
from flask_restful import Resource
import json
import pymysql


class DeletePost(Resource):
    def post(self):
        data = json.loads(request.data)
        print(data)
        connection = pymysql.connect(host='localhost', user='root', password='root',db='qadb')
        mycursor = connection.cursor()
        mycursor.execute("DELETE FROM TblPost WHERE pid = %s; ",(data['Pid']))
        connection.commit()
        connection.close()  
        return 'Recieved'