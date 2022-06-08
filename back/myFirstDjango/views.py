from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from .models import Employee
from django.utils import timezone
from django.core import serializers


def index(request):
    empList = serializers.serialize("json", Employee.objects.filter(
        pub_date__lte=timezone.now()
    ))
    res = {
        'data': empList
    }
    return JsonResponse(res)
