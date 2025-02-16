from django.urls import path
from nova import views
urlpatterns = [
    path('', views.signup, name='home')

    
]