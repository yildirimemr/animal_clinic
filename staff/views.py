from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializer import UserSerializer, UserSerializerWithToken

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(["GET"])
@permission_classes([IsAdminUser])
def getStaffs(request):
    staffs = User.objects.all()
    serializer = UserSerializer(staffs, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def createStaff(request):
    data = request.data
    try:
        User.objects.create(
            first_name=data["first_name"],
            last_name=data["last_name"],
            email=data["email"],
            password=make_password(data["password"]),
        )
    except:
        return Response({"message": "This staff has already exists."})
    return Response({"message": "Staff record was successfully created."})


@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteStaff(request, pk):
    try:
        staff = User.objects.get(id=pk)
        staff.delete()
    except:
        return Response({"message": "Something went wrong."})
    return Response({"message": "Staff record was successfully deleted."})
