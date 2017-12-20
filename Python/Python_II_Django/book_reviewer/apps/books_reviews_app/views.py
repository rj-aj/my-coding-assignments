# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import *
from django.contrib import messages
from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    context = {
        'recent': Review.objects.recent_reviews()[0],
        'more': Review.objects.recent_reviews()[1]
    }
    return render(request, 'books_reviews_app/indext.html', context)

def add(request):
    pass

def create(request):
    pass

def show(request):
    pass

def create_additional(request):
    pass
