from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'full_name', 'email', 'isAdmin', 'last_login', 'date_joined',)

    def get_full_name(self, obj):
        full_name = f"{obj.first_name} {obj.last_name}"
        if full_name == "":
            full_name = obj.email
        return full_name

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('token', 'id', 'full_name', 'email', 'isAdmin', 'last_login', 'date_joined',)

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
