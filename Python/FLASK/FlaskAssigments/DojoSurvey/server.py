from flask import Flask, render_template, request, redirect
app = Flask(__name__)

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
    return render_template("submit.html", name=name, dojo_location=dojo_location, fav_language=fav_language, comment=comment)


app.run(debug=True)