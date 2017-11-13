from flask import Flask, render_template, request, redirect, flash,session
app = Flask(__name__)
app.secret_key="dojoDurveyKeyTopSecret"
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def result():
    print "Got Post Info"
    name = request.form['name']
    dojo_location = request.form['dojo_location']
    fav_language = request.form['fav_language']
    comment = request.form['comment']
    if len(name)<1:
        flash("Name cannot be empty!") # just pass a string to the flash function
    if len(comment)<1:
        flash("comment cannot be empty!") # just pass a string to the flash function
    elif len(comment)>120:
        flash("comment cannot be longer thatn 120 characters. Please delete some words and resubmit")
    return render_template("submit.html", name=name, dojo_location=dojo_location, fav_language=fav_language, comment=comment)


app.run(debug=True)