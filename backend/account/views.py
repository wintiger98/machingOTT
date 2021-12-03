from django.shortcuts import render
from rest_framework.response import Response
from .serializers import UserSerializer, ProfileSerializer
from .models import User
from rest_framework import generics, status

# 회원가입
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def post(self, request, format=None):
        return Response(status=status.HTTP_200_OK)
    

class ProfileUpdateAPI(generics.UpdateAPIView):
    lookup_field = "userID"
    queryset = User.objects.all()
    serializer_class = ProfileSerializer