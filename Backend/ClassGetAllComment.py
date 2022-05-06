
import collections
import json
from flask_restful import Resource
import pymysql


class GetAllComment(Resource):
    def get(self):
        #connect to database
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM comment")
        getAllcomment = myCursor.fetchall()
        conn.commit()
        conn.close()
        #convert python object to json for comment
        rowarray_list = []
        for row in getAllcomment:
            t = (row[0],row[1],row[2],row[3],row[4],row[5],row[6])
            rowarray_list.append(t)
        k = json.dumps(rowarray_list)

        object_list = []
        for row in getAllcomment:
            d = collections.OrderedDict()
            d['CID'] = row[0]
            d['PID'] = row[1]
            d['body'] = row[2]
            d['userID'] = row[3]
            d['userName'] = row[4]
            d['parentID'] = row[5]
            d['createdAt'] = row[6]
            object_list.append(d)
        k = json.dumps(object_list)
        return json.loads(k)