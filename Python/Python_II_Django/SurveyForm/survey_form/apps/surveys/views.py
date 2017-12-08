# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, HttpResponse, redirect


def index(request):
    request.session['form_count'] = 0
    return  render(request,'surveys/index.html')


def process(request):
    request.session['form_count'] += 1
    request.session['name']=request.POST['name']
    request.session['location']=request.POST['location']
    request.session['lang']=request.POST['lang']
    request.session['comment']=request.POST['comment']
    return redirect('/results')

def results(request):
    return render(request,'surveys/results.html')


# Create your views here.
