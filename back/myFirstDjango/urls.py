from django.urls import path

from . import views

urlpatterns = [
    path('employee', views.empIndex, name='employee'),
    path('work', views.workIndex, name='work'),
    path('login', views.signin, name='login'),
    path('logout', views.signout, name='logout'),
]
