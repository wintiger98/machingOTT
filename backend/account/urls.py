from django.urls import path, include
from . import views
from rest_framework import urls
from django.contrib.auth import views as auth_views

urlpatterns =[
    path('signup/', views.UserCreate.as_view()),
    path('profile/<str:userID>/', views.ProfileUpdateAPI.as_view()),
    path('login/', auth_views.LoginView.as_view(template_name='src/components/LoginPage.js'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('api-auth/', include('rest_framework.urls')),
]