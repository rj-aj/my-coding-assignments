# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
#from datetime import datetime


# Create your views here.
def index(request):
    response = "Hello, I am your first request!"
    return HttpResponse(response)

