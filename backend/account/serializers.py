from .models import User
from rest_framework import serializers
from django import forms

# 유저
class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            userID = validated_data['userID'],
            password = validated_data['password'],
            email = validated_data['email'],
            realname = validated_data['realname'],
            nickname = validated_data['nickname'],
            phoneNum = validated_data['phoneNum'],
        )
        return user
    class Meta:
        model = User
        fields = ['userID','password','email','realname','nickname', 'phoneNum']

# 프로필
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fiels = ('userID','email','nickname','realname', 'groupID','OTTname','phoneNum')