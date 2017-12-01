from flask import Flask, render_template, redirect, request
from mysqlconnection import MySQLConnector
# import the Connector function
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'mydb')
# an example of running a query
print mysql.query_db("SELECT * FROM users")
app.run(debug=True)
