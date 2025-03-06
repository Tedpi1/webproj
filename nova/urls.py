from django.urls import path
from nova import views

app_name = "nova"

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("login/", views.login, name="login"),
    path("contact/", views.contact, name="contact"),
    path("about/", views.about, name="about"),
    path("", views.home, name="home"),
]
