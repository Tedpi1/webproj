from django.forms import ModelForm
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, SetPasswordForm
from .models import Profile


class SignUpForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["password1"].widget.attrs.update(
            {
                "name": "password1",
                "id": "password1",
                "placeholder": "Enter Your Password",
                "class": "input-box",
                "type": "text",
            }
        )
        self.fields["password2"].widget.attrs.update(
            {
                "name": "password2",
                "id": "password2",
                "placeholder": "Confirm Your Password",
                "class": "input-box",
                "type": "text",
            }
        )
        self.fields["username"].widget.attrs.update(
            {
                "name": "username",
                "id": "username",
                "placeholder": "Enter Username",
                "class": "input-box",
                "type": "text",
            }
        )
        self.fields["email"].widget.attrs.update(
            {
                "name": "email",
                "id": "email",
                "placeholder": "Enter Your Email",
                "class": "input-box",
                "type": "email",
            }
        )
        self.fields["last_name"].widget.attrs.update(
            {
                "name": "lastname",
                "id": "lastname",
                "placeholder": "Enter Your Last Name",
                "class": "input-box",
                "type": "text",
            }
        )

    class Meta:
        model = User
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
            "password1",
            "password2",
        ]
