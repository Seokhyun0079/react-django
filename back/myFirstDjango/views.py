from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Employee
from django.utils import timezone
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
import json


def index(request):
    logout(request)
    if request.user.is_authenticated is not True:
        return HttpResponse('login plase', status=401)
    empList = json.loads(serializers.serialize("json", Employee.objects.filter(
        pub_date__lte=timezone.now()
    )))
    res = {
        'data': empList
    }
    return JsonResponse(res)


def signin(request):
    if request.method == 'POST':
        username = request.POST['userName']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if(user is not None):
            # what is login function
            test = login(request, user)
            # Redirect to a success page.
            return JsonResponse({'result': True})
