from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secrect_key = 'fullfriendssecretkey'
mysql = MySQLConnector(app, "friendsdb")


@app.route("/")
def index():
    all_friends = mysql.query_db("SELECT * FROM friendsdb.friends;")
    return render_template('index.html', friends=all_friends);


@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friendsdb.friends (first_name, last_name, email, created_at, updated_at)\
     VALUES (:first_name, :last_name, :email, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email']
    }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/')


@app.route('/friends/<id>/edit')
def edit(id):
    data_dictionery = {
        "specific_id": id
    }
    query_string = "SELECT * FROM friendsdb.friends WHERE id = :specific_id"
    try:
        one_friend = mysql.query_db(query_string, data_dictionery)
    except IndexError:
        return redirect('/')
    return render_template("edit.html", friend=one_friend[0])


@app.route('/friends/<id>', methods=["GET", "POST"])
def update(id):
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    query = ''' UPDATE friendsdb.friends SET
                first_name = :first_name,
                last_name = :last_name,
                email = :email,
                updated_at = NOW() WHERE id = :id ;'''
    data = {              
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'id': id
                }
    mysql.query_db(query, data)
    return redirect ('/')

@app.route('/friends/<id>/delete', methods=["POST"])
def delete(id):
    query = " DELETE FROM friendsdb.friends WHERE id = :id ; "
    data = { 'id': id }
    mysql.query_db(query, data)
    return redirect ('/')



app.run(debug=True)

