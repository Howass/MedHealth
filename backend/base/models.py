from django.db import models
from django.contrib.auth.models import User
# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    DOB = models.DateTimeField(auto_now=True)
    sex = models.CharField(max_length=10, default='Individual')
    alergy = models.CharField(max_length=128, default='Individual')
    history = models.CharField(max_length=128, default='Individual')
    doctor = models.CharField(max_length=128, default='Individual')
    email = models.CharField(max_length=128, default='Individual')
    phone_number = models.IntegerField(default=0)
    health_card = models.IntegerField(default=0)
    emergency_contact = models.IntegerField(default=0)

class Provider(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    location = models.CharField(max_length=128, default='Individual')
    open_time = models.CharField(max_length=128, default='Individual')
    wait_time = models.IntegerField(default=0)
    video_call = models.BooleanField(default=False)
    book_appointment = models.BooleanField(default=False)
    url = models.CharField(max_length=128, default='Individual')
    phone = models.IntegerField(default=0)
    services = models.TextField(max_length=1000, default='Individual')

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()
