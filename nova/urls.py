from django.urls import path
from nova import views

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("login/", views.login, name="login"),
    path("contact/", views.contact, name="contact"),
]
