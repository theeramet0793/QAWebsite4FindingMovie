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


"""
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

    
# API
api.add_resource(GetAllPost,"/GetAllPost")
api.add_resource(GetAllSolvedPost,"/GetAllPostSolve")
api.add_resource(GetAllUnsolvedPost,"/GetAllPostUnsolve")
api.add_resource(GetAllComment,"/GetAllComment")
api.add_resource(GetSomeComment,"/GetSomeComment/<int:postID>")
api.add_resource(GetSomePost,"/GetSomePost/<int:postID>")
api.add_resource(GetMovieName,"/GetMovieName/<int:postID>")

if __name__ == "__main__":
    app.run(debug=True)