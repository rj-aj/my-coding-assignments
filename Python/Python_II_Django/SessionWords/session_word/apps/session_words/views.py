from django.shortcuts import render, redirect, HttpResponse 
from datetime import datetime
from time import strftime


# Create your views here.
def index(request):
    try:
        request.session['words_total']
    except KeyError:
        request.session['words_total']=[]
    return render(request,'session_words/index.html')

def add_word(request):
    size = request.POST.get('big', '')
    #print size
    color = request.POST.get('color', '')
    newword = dict(word = request.POST['word'], color = color, size = size, created_at = datetime.now().strftime("%H:%M %p, %B %d, %Y"))
    wordslist = request.session['words_total']    
    wordslist.append(newword)
    request.session['words_total'] = wordslist
    return redirect('/')
    
def clear_session(request):
    #clear session 
    del request.session['words_total']
    return redirect ('/')
