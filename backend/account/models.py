from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self, userID, email, realname, nickname, password=None):
        if not userID:
            raise ValueError('must have userID')
        if not email:
            raise ValueError('must have user email')
        if not realname:
            raise ValueError('must have user realname')
        if not nickname:
            raise ValueError('must have user nickname')
        user = self.model(
            userID = userID,
            email = self.normalize_email(email),
            realname = realname,
            nickname = nickname
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, userID, password):
        user = self.model(
            userID = userID,
            password=password,
        )
        user.is_admin = True
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    userID = models.CharField(max_length=20, unique=True, null=False, default="", verbose_name='ID')
    email = models.EmailField(
        verbose_name='이메일 주소',
        max_length=255,
        unique=True,
    )
    nickname = models.CharField(default='', max_length=100, null=True, blank=False, unique=True, verbose_name="사용자 별명")
    realname = models.CharField(default='', max_length=100, null=True, blank=False, verbose_name="이름(실명)")
    
    groupID = models.CharField(max_length=20, null=True, default="아직 그룹에 참가하지 않았습니다.", verbose_name='그룹 아이디')
    OTTname = models.CharField(max_length=20, null=True, default="아직 OTT를 선택하지 않았습니다.", verbose_name='OTT 이름')

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)

    # 헬퍼 클래스 사용
    objects = UserManager()

    # 사용자의 username field는 userID으로 설정
    USERNAME_FIELD = 'userID'
    # 필수로 작성해야하는 field
    #REQUIRED_FIELDS = ['email', '', 'realname']

    def __str__(self):
        return self.userID

    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin
    # User 모델의 필수 field
    # userID,email,nickname,realname, groupID,OTTname,phoneNum,is_active,is_admin,