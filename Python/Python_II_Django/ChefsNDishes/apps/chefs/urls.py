from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^register_view$', views.register_view),
    url(r'^login_view$', views.login_view),
# DISH STUFF
    url(r'^dashboard$', views.dashboard),
    url(r'^create$', views.create_dish, name="create"),
    url(r'^favorite/(?P<dish_id>\d+)$', views.favorite, name="like_it"),
    url(r'^unfavorite/(?P<dish_id>\d+)$', views.unfavorite, name="dislike_it")
    #unfavorite
]
    