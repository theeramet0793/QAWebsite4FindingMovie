
import pymysql

connection = pymysql.connect(host='localhost', user='root', password='root',db='qadb')
mycursor = connection.cursor()