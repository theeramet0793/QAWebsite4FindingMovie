#server side
import pymysql
from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
import json
import collections
from ClassGetAllComment import GetAllComment

from ClassGetAllPost import GetAllPost
from ClassGetAllSolvedPost import GetAllSolvedPost
from ClassGetAllUnsolvePost import GetAllUnsolvedPost

from ClassGetMovieName import GetMovieName
from ClassGetSomeComment import GetSomeComment
from ClassGetSomePost import GetSomePost



#connect to database
conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
myCursor = conn.cursor()
myCursor.execute("SELECT * FROM post ")
getAllpost = myCursor.fetchall()
myCursor.execute("SELECT * FROM comment")
getAllcomment = myCursor.fetchall()
conn.commit()
conn.close()



"""
#===================================================================
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
#===================================================================
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
"""
#===================================================================
#design resource
app = Flask(__name__)
api = Api(app)
CORS(app)
@app.route("/")

@app.route('/postByUser', methods=['POST'])
def process_json1():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("INSERT INTO post(post, poster, date) VALUES (%s, %s, %s); ",(data['text'],data['poster'],data['date']))
    conn.commit()
    conn.close()  
    return 'Recieved'

@app.route('/commentByUser', methods=['POST'])
def process_json4():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("INSERT INTO comment(PID, body, userID, userName, createdAt) VALUES (%s, %s, %s, %s, %s); ",(data['pid'],data['body'],data['userID'],data['userName'],data['date']))
    conn.commit()
    conn.close()  
    return 'Recieved'

@app.route('/deletePost', methods=['POST'])
def process_json2():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("DELETE FROM post WHERE id = %s; ",(data['Pid']))
    conn.commit()
    conn.close()  
    return 'Recieved'

@app.route('/deleteComment', methods=['POST'])
def process_json5():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("DELETE FROM comment WHERE cid = %s; ",(data['cid']))
    conn.commit()
    conn.close()  
    return 'Recieved'

@app.route('/updatePost', methods=['POST'])
def process_json3():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("UPDATE post SET  post = %s, poster = %s, date =%s WHERE id = %s; ",(data['post'],data['poster'],data['date'],data['pid']))
    conn.commit()
    conn.close()  
    return 'Recieved'

@app.route('/foundMovieName', methods=['POST'])
def process_json6():
    data = json.loads(request.data)
    print(data)
    conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
    myCursor = conn.cursor()
    myCursor.execute("INSERT INTO moviename(PID, movieName) VALUES (%s, %s); ",(data['PID'],data['movieName']))
    conn.commit()
    conn.close()  
    return 'Recieved'

"""
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
"""
"""
class GetAllSolvedPost(Resource):
    def get(self):
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM post WHERE pid IN (SELECT PID FROM moviename) ")
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
"""
"""    
class GetAllUnsolvePost(Resource):
    def get(self):
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM post WHERE pid NOT IN (SELECT PID FROM moviename) ")
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
"""
"""
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
"""
"""    
class GetSomeComment(Resource):
    def get(self,postID): 
        #connect to database
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM comment WHERE PID = %s",postID)
        SpcficComm = myCursor.fetchall()
        conn.commit()
        conn.close()
        #convert to json format
        rowarray_list = []
        for row in SpcficComm:
            t = (row[0],row[1],row[2],row[3],row[4],row[5],row[6])
            rowarray_list.append(t)
        l = json.dumps(rowarray_list)

        object_list = []
        for row in SpcficComm:
            d = collections.OrderedDict()
            d['CID'] = row[0]
            d['PID'] = row[1]
            d['body'] = row[2]
            d['userID'] = row[3]
            d['userName'] = row[4]
            d['parentID'] = row[5]
            d['createdAt'] = row[6]
            object_list.append(d)
        l = json.dumps(object_list)
        return json.loads(l)
"""
"""    
class GetSomePost(Resource):
    def get(self,postID): 
        #connect to database
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM post WHERE id = %s",postID)
        getsomepost = myCursor.fetchall()
        conn.commit()
        conn.close()
         #convert python object to json for post
        rowarray_list = []
        for row in getsomepost:
            t = (row[0],row[1],row[2],row[3])
            rowarray_list.append(t)
        j = json.dumps(rowarray_list)

        object_list = []
        for row in getsomepost:
            d = collections.OrderedDict()
            d['id'] = row[0]
            d['post'] = row[1]
            d['poster'] = row[2]
            d['date'] = row[3]
            object_list.append(d)
        j = json.dumps(object_list)
        return json.loads(j)    
"""
"""    
class GetMovieName(Resource):
    def get(self,postID): 
        #connect to database
        conn = pymysql.connect(host='localhost', user='root', password='',db='qadb')
        myCursor = conn.cursor()
        myCursor.execute("SELECT * FROM moviename WHERE PID = %s",postID)
        getsomepost = myCursor.fetchall()
        conn.commit()
        conn.close()
         #convert python object to json for post
        rowarray_list = []
        for row in getsomepost:
            t = (row[0],row[1],row[2])
            rowarray_list.append(t)
        j = json.dumps(rowarray_list)

        object_list = []
        for row in getsomepost:
            d = collections.OrderedDict()
            d['id'] = row[0]
            d['PID'] = row[1]
            d['movieName'] = row[2]
            object_list.append(d)
        j = json.dumps(object_list)
        return json.loads(j)
"""    
    
#if frontend call then return allPost 
api.add_resource(GetAllPost,"/GetAllPost")
api.add_resource(GetAllSolvedPost,"/GetAllPostSolve")
api.add_resource(GetAllUnsolvedPost,"/GetAllPostUnsolve")
api.add_resource(GetAllComment,"/GetAllComment")
api.add_resource(GetSomeComment,"/GetSomeComment/<int:postID>")
api.add_resource(GetSomePost,"/GetSomePost/<int:postID>")
api.add_resource(GetMovieName,"/GetMovieName/<int:postID>")

if __name__ == "__main__":
    app.run(debug=True)