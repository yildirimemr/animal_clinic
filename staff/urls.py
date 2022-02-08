from django.urls import path
from . import views

urlpatterns = [
    path('staffs/', views.getStaffs, name='staffs'),
    path('staffs/create/', views.createStaff, name='create_staff'),
    path('staffs/delete/<int:pk>/', views.deleteStaff, name='delete_staff'),
    path('staffs/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
