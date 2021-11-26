from .models import User
from rest_framework import serializers

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