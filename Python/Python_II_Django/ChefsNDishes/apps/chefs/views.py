# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Chef, Dish, Like

def verify_session_user(request):
    try:
        request.session['id']
    except KeyError:
        return redirect('/')

# Create your views here.
def index(request):

    return render(request, "chefs/index.html")

def login_view(request):
    return render(request, 'chefs/login.html')

def register_view(request):
    return render(request, 'chefs/registration.html')

def login(request):
    errors_or_user = Chef.objects.validate_login(request.POST)

    if errors_or_user[0]:
        for fail in errors_or_user[0]:
            messages.error(request, fail)
        return redirect('/login_view')
    request.session['id'] = errors_or_user[1].id
    return redirect('/dashboard')


def register(request):
    errors_or_user = Chef.objects.validate_registration(request.POST)

    if errors_or_user[0]:
        for fail in errors_or_user[0]:
            messages.error(request, fail)
        return redirect('/register_view')
    request.session['id'] = errors_or_user[1].id
    return redirect('/dashboard')

def logout(request):
    del request.session['id']
    return redirect('/')

def dashboard(request):
    context = {
        # SELECT * FROM dishes WHERE chefs.id = request.session['id']
        "user": Chef.objects.get(id=request.session['id']),
        "users_dishes": Dish.objects.filter(creator_id=request.session['id']),
        # ORDER BY DESC
        "most_recently_liked": Dish.objects.all().order_by('-likes__created_at').first(),
        # dishes not faved by logged in user, also dishes not created by user
        "not_been_faved": Dish.objects.exclude(likes__liker_id = request.session['id']).exclude(creator_id=request.session['id']),
        "faved_dishes": Dish.objects.filter(likes__liker_id = request.session['id']).exclude(creator_id=request.session['id'])
    }
    return render(request, 'users/dashboard.html', context)


def create_dish(request):
    Dish.objects.create(
        name = request.POST['name'],
        creator = Chef.objects.get(id = request.session['id'])
    )
    return redirect('/dashboard')

def favorite(request, dish_id):
    # steps
    # 1) create the like
    Like.objects.create(
        liker_id = request.session['id'],
        dish_id = dish_id
    )


    return redirect('/dashboard')

def unfavorite(request, like_id):
    # # steps
    # # 1) get reference to Dish from dish_id
    # dish = Dish.objects.get(id=dish_id)
    # # 2) get reference to Chef from session id
    # chef = Chef.objects.get(id=request.session['id'])
    # # 3) set fans field on Dish reference (.add())
    # dish.fans.remove(chef)

    return redirect('/dashboard')

