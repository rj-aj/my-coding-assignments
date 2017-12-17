from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index), # (index)a GET - calls the index method to display all the users.
    url(r'^new/$', views.new),# (new) GET request to /users/new - calls the new method to display a form allowing users to create a new user. 
    url(r'^create$', views.create), # (create) POST to /users/create - calls the create method to insert a new user record into the database.
    url(r'^(?P<id>\d+)$', views.show),  # (edit)GET /users/<id> template display the info for a particular user with given id.
    url(r'^(?P<id>\d+)/edit$', views.edit),# (show) GET request /users/<id>/edit - calls the edit method to display a form allowing users to edit an existing user with the given id.
    url(r'^users/(?P<user_id>\d+)/update$', views.update), # (update) POST /users/update - calls the update method to process the submitted form sent from /users/<id>/edit
    url(r'^(?P<id>\d+)/destroy$', views.destroy),# (destroy) GET /users/<id>/destroy - calls the destroy method to remove a particular user with the given id
]

