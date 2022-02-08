from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerModels
        fields = "__all__"


class AnimalSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(many=False, read_only=True)

    class Meta:
        model = AnimalModels
        fields = "__all__"
