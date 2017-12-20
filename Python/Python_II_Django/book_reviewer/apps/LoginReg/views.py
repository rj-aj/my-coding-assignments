# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User
from ..books_reviews_app.models import Book
from django.shortcuts import render, redirect, HttpResponseRedirect, reverse
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'LoginReg/index.html')

def register(request):
    result = User.objects.validate_registration(request.POST)
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/')
    request.session['user_id'] = result.id
    messages.success(request, "Successfully registered!")
    #return redirect('/success')
    return HttpResponseRedirect (reverse('books_reviews_apps:index'))

def login(request):
    result = User.objects.validate_login(request.POST)
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/')
    request.session['user_id'] = result.id
    messages.success(request, "Successfully logged in!")
    return HttpResponseRedirect(reverse("review:index"))

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/')

def success(request):
    try:
        request.session['user_id']
    except KeyError:
        return redirect('/')
    context = {
        'user': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'LoginReg/success.html', context)

def show(request, user_id):
    user=User.objects.get(id=user_id)
    unique_ids = user.userreviews.all().values("book").distinct()
    unique_books=[]
    for book in unique_ids:
        unique_books.append(Book.objects.get(id=book['book']))
    context = {
        'user':user,
        'unique_book_reviews': unique_books
    }
    return render(request,'LoginReg/show.html',context)
