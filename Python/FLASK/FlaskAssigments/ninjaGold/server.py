from flask import Flask,render_template, request, redirect, session
from datetime import datetime
import random

app=Flask(__name__)
app.secret_key="NinjaGold"


@app.route('/')
def index():
    if 'totalgold' not in session:
        session['totalgold']=0
        session['activities']= []
    return render_template("index.html", totalgold=session['totalgold'], activites=session['activities'])

@app.route('/process_money', methods=['POST'])
def process_money():
    building = request.form['building']
    if building == "farm":
        newgold=random.randrange(10,21)
    elif building == "cave":
        newgold=random.randrange(5,11)
    elif building =="house":
        newgold=random.randrange(2,6)
    else:
        newgold=random.randrange(-50,51)
    print"GOT NEW GOLD !!!!!!", newgold
    session['totalgold']+= newgold
    time = datetime.now().strftime("%Y/%m/%d %I:%M %p")
    if newgold >= 0:
        adventure = "Earned {} from {}! {}".format(newgold,building, time)
    else:
        adventure = "Entered a {} and lost {} gold.... Ouch! {}".format(building, -1*newgold, time)
    print "The current time !!!!", adventure
    return redirect('/')

app.run(debug=True)

