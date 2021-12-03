from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)


class UserManager(BaseUserManager):
    def create_user(self, userID, email, password=None):
        if not userID:
            raise ValueError('Users must have an userID')

        user = self.model(
            userID = userID,
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, userID, email,  password):
        user = self.create_user(
            userID = userID,
            email = email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


def __str__(self):
        if self.is_netflix == True:
            self.OTTname = "Netflix"
            return self.OTTname
        elif self.is_watcha == True:
            self.OTTname = "Watcha"
            return self.OTTname
        elif self.is_wavve.default == True:
            self.OTTname = "Wavve"
            return self.OTTname
        elif self.is_laftel == True:
            self.OTTname = "Laftel"
            return self.OTTname
        elif self.is_tving == True:
            self.OTTname = "Tving"
            return self.OTTname

class User(AbstractBaseUser):
    userID = models.CharField(max_length=20, unique=True, null=False, default="", verbose_name='ID')
    email = models.EmailField(
        verbose_name='이메일 주소',
        max_length=255,
        unique=True,
    )

    userName = models.CharField(max_length=20, null=False, default="별명을 입력해주세요", verbose_name='사용자 별명')
    groupID = models.CharField(max_length=20, null=False, default="아직 그룹에 참가하지 않았습니다.", verbose_name='그룹 아이디')
    OTTname = models.CharField(max_length=20, null=False, default="아직 OTT를 선택하지 않았습니다.", verbose_name='OTT')
    phoneNum = models.CharField(max_length=11, null=False, default="휴대폰 번호를 입력해주세요. (- 제외)", verbose_name='휴대폰 번호')
    realName = models.CharField(max_length=20, null=False, default="이름을 입력해주세요.", verbose_name='이름(실명)')
    userCode = models.CharField(max_length=20, null=False, default="", verbose_name='유저 코드')

    # 사용자가 선택한 OTT
    is_netflix = models.BooleanField(default=False, verbose_name='넷플릭스')
    is_watcha = models.BooleanField(default=False, verbose_name='왓챠')
    is_wavve = models.BooleanField(default=False, verbose_name='웨이브')
    is_laftel = models.BooleanField(default=False, verbose_name='라프텔')
    is_tving = models.BooleanField(default=False, verbose_name='티빙')

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False, verbose_name='관리자 권한')
    is_Login = models.BooleanField(default=False, verbose_name='로그인 상태')
    isAttend = models.BooleanField(default=False, verbose_name='그룹 참여 상태')

    
    objects = UserManager()

    USERNAME_FIELD = 'userID'
    # REQUIRED_FIELDS = ['date_of_birth']

    def __str__(self):
        return self.userID

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
