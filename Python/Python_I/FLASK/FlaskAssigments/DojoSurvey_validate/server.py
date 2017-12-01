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
    error = False
    if not name:
        flash('Name is required.')
        error = True
    if not comment:
        flash('Comment is required.')
        error = True
    if len(comment) > 120:
        flash('Comment must be shorter than 120 characters.')
        error = True
    if error:
        return redirect('/')
    return render_template('submit.html',
                           name=name,
                           dojo_location=dojo_location,
                           fav_language=fav_language,
                           comment=comment)


app.run(debug=True)

app.run(debug=True)