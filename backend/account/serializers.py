from .models import User
from rest_framework import serializers
from django import forms
from rest_framework_jwt.settings import api_settings


# 유저
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userID','password','email','realname','nickname', 'OTTname','groupID']


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'userID','password','email','realname','nickname', 'OTTname','groupID')

# # 프로필
# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fiels = ('userID','email','nickname','realname', 'groupID','OTTname')

# class ProfileSerializerWithToken(serializers.ModelSerializer):
#     token = serializers.SerializerMethodField()

#     def get_token(self, obj):
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

#         payload = jwt_payload_handler(obj)
#         token = jwt_encode_handler(payload)
#         return token

#     class Meta:
#         model = User
#         fields = ('token', 'userID','email','nickname','realname', 'groupID','OTTname')