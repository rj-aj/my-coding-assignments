from django.conf.urls import url
from . import views
urlpatters = [
    url(r'^$', views.index),
    url(r'^time_display$', views.index)
]