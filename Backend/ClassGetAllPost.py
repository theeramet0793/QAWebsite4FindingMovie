
import collections
import json
from flask_restful import Resource
import pymysql


class GetAllPost(Resource):
    def get(self):
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM post ")
        getAllpost = myCursor.fetchall()
        conn.commit()
        conn.close()
        #convert python object to json for post
        rowarray_list = []
        for row in getAllpost:
            t = (row[0],row[1],row[2],row[3])
            rowarray_list.append(t)
        j = json.dumps(rowarray_list)

        object_list = []
        for row in getAllpost:
            d = collections.OrderedDict()
            d['id'] = row[0]
            d['post'] = row[1]
            d['poster'] = row[2]
            d['date'] = row[3]
            object_list.append(d)
        j = json.dumps(object_list)
        return json.loads(j)