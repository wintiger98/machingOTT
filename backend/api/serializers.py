from rest_framework import serializers
from .models import Group
from account.models import User


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'numOfUser', 'groupID', 'OTTname', 'isFull', 'created_at', 'user1code', 'user2code', 'user3code','user4code')

class SelectOTTSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userID', 'OTTname']