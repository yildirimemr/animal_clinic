from django.urls import path
from . import views

urlpatterns = [
    path('animals/', views.getAnimals, name='all_animals'),
    path('customers/', views.getCustomers, name='all_customers'),
    path('animals/<int:pk>/', views.getAnimal, name='all_customers'),
    path('customers/<int:pk>/', views.getCustomer, name='all_customers'),
    path('animals/search/<str:name>/', views.searchAnimalFromName, name='search_animals'),
    path('animals/change-attributes/<int:pk>/', views.changeAnimalAttributes, name='change_animal_attributes'),
    path('customers/change-attributes/<int:pk>/', views.changeCustomerAttributes, name='change_customer_attributes'),
    path('animals/create/', views.createAnimalRecord, name="create_new_record"),
    path('animals/delete/<int:pk>/', views.deleteAnimal, name="create_new_record"),
    path('customers/delete/<int:pk>/', views.deleteCustomer, name="create_new_record"),
]
