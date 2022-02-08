from django.db.models.signals import pre_save
from django.contrib.auth.models import User


def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != "":
        user.username = user.email

    if user.first_name == "":
        user.first_name = user.username

    if user.last_name == "":
        user.last_name = user.username


pre_save.connect(updateUser, sender=User)
