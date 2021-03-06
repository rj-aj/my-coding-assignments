from flask import Flask, render_template, redirect, request, session, flash
import re

app=Flask(__name__)
app.secret_key="registrationFormSecretKey"

email_re = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register', methods=['POST'])
def register():
    fname=request.form['fname']
    lname=request.form['lname']
    email=request.form['email']
    password=request.form['password']
    confirm_password=request.form['confirm_password']

    if len(email) > 0 and len(fname) > 0 and len(lname) > 0 and len(password) > 0 and fname.isalpha() == True and lname.isalpha() == True and len(password) > 8 and password == confirm_password and  EMAIL_REGEX.match(email):
        flash ("Thanks for submitting your information.",'success')

    else:
        if len(email) < 1:
            flash("Email cannot be empty")
        elif not EMAIL_REGEX.match(email):
            flash("please enter a valid email",'error')

        if len(fname) < 1:
            flash("Please enter Firstname")
        elif fname.isalpha() == False:
            flash("Firstname should only contain alphabets",'error')

        if len(lname) < 1:
            flash("Please enter Lastname")
        elif lname.isalpha() == False:
            flash("Lastname should only contain alphabets",'error')

        if len(password) < 1:
            flash("Please enter a password",'error')

        elif len(password) < 8:
            flash("Please choose a password which has more than 8 chars",'error')

        if password != confirm_password:
            flash("Please make sure Password and confirm Password are the same",'error')

    return redirect('/')

app.run(debug=True)