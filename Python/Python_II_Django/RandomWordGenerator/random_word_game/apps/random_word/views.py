
from django.shortcuts import render, redirect, HttpResponse
from django.utils.crypto import get_random_string

def index(request):
    request.session['attempt'] = request.session.setdefault('attempt', 0)
    return render(request, 'random_word/index.html', request.session)

def generate(request):
    request.session['string'] = get_random_string(length=14).upper()
    request.session['attempt'] += 1
    return redirect('/')

def reset(request):
    request.session['attempt'] = 0
    if 'string' in request.session: del request.session['string']
    return redirect('/')