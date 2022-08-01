from statistics import mode
from django.db import models

# Create your models here.


class Employee(models.Model):
    employee_name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Work(models.Model):
    employee = models.ForeignKey(
        Employee, on_delete=models.CASCADE, related_name='work')
    work_in = models.DateTimeField()
    work_out = models.DateTimeField()
