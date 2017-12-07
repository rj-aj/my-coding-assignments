# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
# Create your views here.
def index(request):
    context = {
        "time": datetime.now().strftime("%Y-%m-%d %H:%M %p")
    }
    return render(request, 'timeDisplay/index.html', context)