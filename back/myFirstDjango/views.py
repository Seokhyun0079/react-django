import re
from tracemalloc import start
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Employee, Work
from django.utils import timezone
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
import json
from datetime import datetime, timedelta, time
from dateutil.parser import parse


def empIndex(request):
    if request.user.is_authenticated is not True:
        return HttpResponse('login plase', status=401)
    empList = Employee.objects.all()
    res = {
        'data': json.loads(serializers.serialize("json", empList))
    }
    return JsonResponse(res)


def workIndex(request):
    request_date = parse(request.GET.get('work_in', None))
    tomorrow = request_date + timedelta(1)
    req_start = datetime.combine(request_date, time())
    req_end = datetime.combine(tomorrow, time())
    if request.user.is_authenticated is not True:
        return HttpResponse('login plase', status=401)
    data = Work.objects.filter(
        work_in__lte=req_end, work_in__gte=req_start)
    res = {
        'data': json.loads(serializers.serialize("json", data))
    }
    return JsonResponse(res)


def signin(request):
    if request.method == 'POST':
        username = request.POST['userName']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        print(user)
        if(user is not None):
            # what is login function
            login(request, user)
            # Redirect to a success page.
            return JsonResponse({'result': True})


def signout(request):
    if request.method == 'POST':
        logout(request)
        # Redirect to a success page.
        return JsonResponse({'result': True})
