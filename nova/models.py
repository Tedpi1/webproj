from django.db import models


# Create your models here.
class Customers(models.Model):
    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=10)
    email = models.EmailField()
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.full_name
