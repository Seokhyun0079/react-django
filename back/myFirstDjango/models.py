from statistics import mode
from django.db import models

# Create your models here.


class Employee(models.Model):
    employee_name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
