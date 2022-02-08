from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import *
from .serializer import *
from django.contrib.auth.hashers import make_password


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getAnimals(request):
    animals = AnimalModels.objects.all()
    serializer = AnimalSerializer(animals, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getCustomers(request):
    customers = CustomerModels.objects.all()
    serializer = CustomerSerializer(customers, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getAnimal(request, pk):
    animals = AnimalModels.objects.get(id=pk)
    serializer = AnimalSerializer(animals, many=False)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getCustomer(request, pk):
    customers = CustomerModels.objects.get(id=pk)
    serializer = CustomerSerializer(customers, many=False)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def searchAnimalFromName(request, name):
    animals = AnimalModels.objects.filter(name=name)
    if len(animals) != 0:
        serializer = AnimalSerializer(animals, many=True)
        return Response(serializer.data)
    name = name.split(" ")
    customers = CustomerModels.objects.filter(first_name=name[0], last_name=name[1])
    if len(customers) != 0:
        animals_list = []
        for customer in customers:
            animal = customer.animalmodels_set.all()
            serializer = AnimalSerializer(animal, many=True)
            animals_list.append(serializer.data)
        return Response(animals_list)
    return Response({"message": "No animals or customers with this name were found."})


# BURAYA GİRMEDEN ÖNCE getCustomers REQUEST AT TÜM KULLANICILARI AUTOCOMPLETE İLE SEÇİLEBİLİR YAP.
# İSTERSE BURADAN SEÇSİN İSTERSE YENİ KULLANICI AÇSIN.
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createAnimalRecord(request):
    data = request.data
    try:
        customer = CustomerModels.objects.get(first_name=data["first_name"], last_name=data["last_name"])
        customer.first_name = data["first_name"]
        customer.last_name = data["last_name"]
        customer.email = data["email"]
        customer.contactInformation = data["contactInformation"]
        customer.phoneNumber = data["phoneNumber"]
        customer.save()
    except:
        customer = CustomerModels.objects.create(
            first_name=data["first_name"],
            last_name=data["last_name"],
            email=data["email"],
            contactInformation=data["contactInformation"],
            phoneNumber=data["phoneNumber"]
        )
    try:
        AnimalModels.objects.create(
            customer=customer,
            name=data["animal_name"],
            species=data["animal_species"],
            genus=data["animal_genus"],
            age=data["animal_age"],
            comment=data["animal_comment"],
        )
    except:
        return Response({"message": "This animal record has already exists."})
    return Response({"message": "New record was successfully saved."})


# HAYVAN VE MÜŞTERİ İSİMLERİNİ SEÇİLEBİLİR YAP
# HAYVANI SEÇERSE BURAYA GİRSİN
@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def changeAnimalAttributes(request, pk):
    data = request.data
    try:
        animal = AnimalModels.objects.get(id=pk)
    except:
        return Response({"message": "The searched animal record could not be found."})
    try:
        animal.name = data["name"]
        animal.species = data["species"]
        animal.genus = data["genus"]
        animal.age = data["age"]
        animal.comment = data["comment"]
        animal.save()
    except:
        return Response({"message": "Please check your data and try again."})

    return Response({"message": "Animal records were successfully updated."})


# HAYVAN VE MÜŞTERİ İSİMLERİNİ SEÇİLEBİLİR YAP
# MÜŞTERİYİ SEÇERSE BURAYA GİRSİN
@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def changeCustomerAttributes(request, pk):
    data = request.data
    try:
        customer = CustomerModels.objects.get(id=pk)
    except:
        return Response({"message": "The searched customer record could not be found."})
    try:
        customer.first_name = data["first_name"]
        customer.last_name = data["last_name"]
        customer.email = data["email"]
        customer.contactInformation = data["contactInformation"]
        customer.phoneNumber = data["phoneNumber"]
        customer.save()
    except:
        return Response({"message": "Please check your data and try again."})
    return Response({"message": "Customer records were successfully updated."})


@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteCustomer(request, pk):
    try:
        customer = CustomerModels.objects.get(id=pk)
        customer.delete()
    except:
        return Response({"message": "Something went wrong."})
    return Response({"message": "Customer and related animal records were successfully deleted."})


@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteAnimal(request, pk):
    try:
        animal = AnimalModels.objects.get(id=pk)
        animal.delete()
    except:
        return Response({"message": "Something went wrong."})
    return Response({"message": "Animal record were successfully deleted."})
