from flask import Flask, render_template
app=Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninjas')
def ninjas():
    return render_template("ninjas.html")

@app.route('/dojo/new')
def new_dojo():
	return render_template('dojo.html')


app.run(debug=True)