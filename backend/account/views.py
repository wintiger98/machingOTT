from django.shortcuts import render
from .serializers import UserSerializer, ProfileSerializer
from .models import User
from rest_framework import generics

# 회원가입
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileUpdateAPI(generics.UpdateAPIView):
    lookup_field = "userID"
    queryset = User.objects.all()
    serializer_class = ProfileSerializer