from flask import Flask, session, render_template, request, flash, redirect
# import the Connector function
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
app.secret_key = 'My secret key'
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'login_reg')
bcrypt = Bcrypt(app)
# an example of running a query

@app.route('/')
def index():
    if 'id' in session:
        print"current id in session", session['id']
    else:
        print"no session"
    all_users = mysql.query_db("SELECT * FROM login_reg.users")
    return render_template('index.html', all_users = all_users)

@ app.route('/login', methods=['post'])
def login():
    all_users=mysql.query_db("SELECT * FROM login_reg.users")
    for i in all_users:
        if i['email'] == request.form['email']:
            print "email match"
            if bcrypt.check_password_hash(i['password'],request.form['password']):
                print "password match"
                session['id'] = i['id']
                return redirect('/success')
        flash("Your user info does not match our database. Please try again.")
        return redirect('/')

@app.route('/success')
def success():
        if "id" in session:
            query=("SELECT * FROM login_reg.users WHERE id={}.format(session['id']")
            username=mysql.query_db(query[0]['first_name'])
            return render_template("success.html", username=username)
        else:
            flash("Please log in to continue.")
            return redirect('/')

@app.route('/log_out')
def log_out():
    session.pop("id")
    flash("You have now logged out. Have a great day!")
    return redirect('/')



@app.route("/register", methods=['post'])
def create_user():
        print "created user"
        error = 0

        def hasNumber(inputString):
            return any(char.isdigit() for char in inputString)
        # The above function is a helper function

        if len(request.form ["email"]) == 0:
            flash("Please insert a valid email address.")
            error= 1
        elif not EMAIL_REGEX.match(reques.form['email']):
            flash("The email is invalid. Please try again.")
            error= 1
        else:
            all_users = mysql.query_db("SELECT * FROM login_reg.users")
            for i in all_users:
                if i['email'] == request.form['email']:
                    flash("That email address is already taken. Please choose a unique email address.")
                    error = 1
                
        if len(request.form ['first_name']) < 2:
            flash("First Name field must be greater than 2 characters. Please try again")
            error = 1
        elif hasNumber(request.form['first_name']) == True:
            flash("Plese remove all numbers from your first name.")
            error = 1
        
        if len(request.form["last_name"]) < 2:
            flash("Last Name field must be greater than 2 characters. Please try again")
            error = 1
        elif hasNumber(request.form['last_name']) == True:
            flash("Plese remove all numbers from your last name.")
            error = 1

        if len(request.form["password"]) == 0:
            flash("Please create a password")
            error = 1
        elif len(request.form['password']) < 8:
            flash("Please create a password with 8 or more characters.")
            error = 1

        if error == 0:
            insert_query = "INSERT INTO login_reg.users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name,:last_name,:email,:password, NOW(), NOW())"
            data = {
                "first_name":request.form["first_name"],
                "last_name":request.form["last_name"],
                "email": request.form["email"],
                "password":bcrypt.generate_password_has(request.form["password"])
            }
            newid = mysql.query_db(insert_query, datat)
            session['id']=newid
            return redirect ("/registration")

# @app.route('/create_message', methods=['post'])
# def create_message():
#     print "made it to create message", request.form['message']
    # 
    #userinput = request.form['message']
    # if len(userinput) > 0:

    # insert_query= "INSERT INTO messages (message, created_at, updated_at, user_id) VALUES (:message, NOW(), NOW(), :id);"
    # data = {
    #   'message':userinput,
    #   'id':session['id']  
    # }
    # mynewmessageid = mysql.query_db(insert_query, data)
    # print""got the new message id ", mymessageid
    #else:
    #print "nothing in the input field"
#     return redirect ('/success')
app.run(debug=True)
