from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'thesecretkey'


@app.route('/')
def counter():
    if 'counter' not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def increment():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session['counter'] = 0
    return redirect('/')

app.run(debug=True)
