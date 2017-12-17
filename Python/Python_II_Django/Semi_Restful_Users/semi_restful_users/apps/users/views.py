from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

def index(request):
    users = User.objects.all()
    context = {'users': users }
    return render(request, 'users/index.html', context)

def new(request):
    return render(request, 'users/new.html')

def create(request):
     errors = User.objects.user_validate(request.POST)
     if len(errors) > 0:
        for tag, error in errors.iteritems():
             messages.error(request, error, extra_tags=tag)
        return redirect('/users/new')
     else:
        new_user = User(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])
        new_user.save()
        return redirect('/')

def show(request, id):
    context = {
        'user': User.objects.get(id=id)
    }
    return render(request, 'users/user.html', context)

def edit(request, id):
    print "edit page"
    user = User.objects.get(id=id)
    context = {'user': user }
    return render(request, 'users/edit.html', context)

def edit(request, id):
    print "edit page"
    user = User.objects.get(id=id)
    context = {'user': user }
    return render(request, 'users/edit.html', context)

def update(request, user_id):
    errors = User.objects.user_validate(request.POST)
    if len(errors) > 0:
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/users/{}/edit'.format(request.POST['id']))

    user_to_update = User.objects.get(id=user_id)
    user_to_update.first_name = request.POST['first_name']
    user_to_update.last_name = request.POST['last_name']
    user_to_update.email = request.POST['email']
    user_to_update.save()
    return redirect('/users')

def edit(request, id):
    print "edit page"
    user = User.objects.get(id=id)
    context = {'user': user }
    return render(request, 'users/edit.html', context)

def destroy(request, id):
     print "destroy"
     User.objects.get(id=id).delete()
     return redirect('/')