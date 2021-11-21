from django.db import models
import string
import random


def generate_unique_code(): # code 생성 함수
    length = 6
    
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Group.objects.filter(code=code).count() == 0:
            break
    
    return code


# class Users(models.Model):
#     userID = models.CharField(max_length=50, default="", unique=True, verbose_name='사용자아이디') # verbose_name : admin에서 보이는 컬럼명
#     password = models.CharField(max_length=20, default="", verbose_name='비밀번호')
#     nickname = models.CharField(max_length=20, default="", verbose_name='닉네임')
#     groupID = models.CharField(max_length=10, null=True, verbose_name='그룹번호')
#     OTTname = models.CharField(max_length=15, null=True, verbose_name='OTT이름')
#     phoneNum = models.CharField(max_length=11, verbose_name='전화번호')
#     realName = models.CharField(max_length=20, verbose_name='실명')
#     userCode = models.CharField(max_length=8, unique=True, verbose_name='유저코드')
#     mailAddress = models.EmailField(max_length=100, verbose_name='사용자이메일')
    
#     def selectOTT():
        
#     def changeProfile():
        

class Group(models.Model):
    numOfUser = models.IntegerField(default=1, verbose_name='사용자수')
    groupID = models.CharField(max_length=8, unique=True, verbose_name='그룹번호')
    OTTname = models.CharField(max_length=15, verbose_name='OTT이름')
    isFull = models.BooleanField(null=False, default=False, verbose_name='풀방임?')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='그룹생성시간')
    user1code = models.CharField(max_length=50, unique=True, verbose_name='user1 코드')
    user2code = models.CharField(max_length=50, unique=True, null=True, verbose_name='user2 코드')
    user3code = models.CharField(max_length=50, unique=True, null=True, verbose_name='user3 코드')
    user4code = models.CharField(max_length=50, unique=True, null=True, verbose_name='user4 코드')