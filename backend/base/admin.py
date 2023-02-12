from django.contrib import admin

# Register your models here.

from.models import Note, Patient, Provider
admin.site.register(Patient)
admin.site.register(Provider)
admin.site.register(Note)

