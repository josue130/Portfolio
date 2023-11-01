from django.db import models
from django.db.models.fields import CharField, DateField, URLField
from django.db.models.fields.files import ImageField
from datetime import date


# Create your models here.


class MyProjects(models.Model):
    title = CharField(max_length=100)
    description = CharField(max_length=2000)
    image = ImageField(upload_to='images/')
    url = URLField(blank=True)
    date = DateField(default=date.today)
