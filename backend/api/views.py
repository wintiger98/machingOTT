from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework import generics, permissions, status
from .serializers import GroupSerializer, SelectOTTSerializer
from .models import Group
from account.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework.decorators import api_view
from account.views import current_user
from account.serializers import UserSerializer, UserSerializerWithToken

@api_view(['GET'])
def validate_jwt_token(request):
    try:
        token = request.META['HTTP_AUTHORIZATION']
        data = {'token': token.split()[1]}
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
    except Exception as e:
        return Response(e)

    return Response(status=status.HTTP_200_OK)

# Create your views here.
class GroupView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class DetailGroupView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class selectOTT(APIView):
    permission_classes = (permissions.AllowAny,)

    queryset = User.objects.all()
    serializer_class = SelectOTTSerializer

    def post(self, request, format=None):
        print("냐",request.data)
        serializer = SelectOTTSerializer(data=request.data)
        print("옹",serializer)
        if serializer.is_valid():
            #serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    



"""
ott 선택 -> 해당 유저의 id가 들어오겠지. 선택한 ott가 오겠지. -> userid, ottname
1)userid의 db에 들어가서 ottname에 ottname을 넣어주고
2)group 배정. 넷플 : 1~5 / 왓차 : 6~10 / 웨이브 : 11~15 / 티빙 : 16~20
3) group 배정할때 그룹 db 들어가서 user#id에 넣기 그리고 isfull도 검사
4) 위의 변경사항들 세이브
"""