from flask import Flask, render_template, redirect,request,session
app=Flask(__name__)
app.secret_key="KeepitSecretKeppitSafe"
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/process', methods=['POST'])
def process():
    #do some validation here!
    return redirect('/')
app.run(debug=True)
