from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout


def signup(request):
    return render(request, "signup.html")


def login(request):
    return render(request, "login.html")


def contact(request):
    return render(request, "contact.html")


def product(request):
    return render(request, "product.html")


def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")
