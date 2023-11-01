from django.shortcuts import get_object_or_404, render
from .models import MyProjects
from django.shortcuts import render
from telegram import Bot

# Create your views here.
def home(request):  
    projects = MyProjects.objects.all() # Trae todos lo proyectos dentro de la DB
    return render(request, "home.html", {"projects": projects})

def proyect_details(request, proyect_id):
    proyect = get_object_or_404(MyProjects, pk=proyect_id)
    return render(request, "proyect_details.html", {"single_proyect": proyect})
