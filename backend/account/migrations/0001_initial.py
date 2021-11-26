# Generated by Django 3.2.7 on 2021-11-26 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('userID', models.CharField(default='', max_length=100)),
                ('email', models.EmailField(default='', max_length=100, unique=True)),
                ('nickname', models.CharField(default='', max_length=100, unique=True)),
                ('realname', models.CharField(default='', max_length=100)),
                ('groupID', models.CharField(default='아직 그룹에 참가하지 않았습니다.', max_length=20, verbose_name='그룹 아이디')),
                ('OTTname', models.CharField(default='아직 OTT를 선택하지 않았습니다.', max_length=20, verbose_name='OTT')),
                ('phoneNum', models.CharField(default='휴대폰 번호를 입력해주세요. (- 제외)', max_length=11, verbose_name='휴대폰 번호')),
                ('is_netflix', models.BooleanField(default=False, verbose_name='넷플릭스')),
                ('is_watcha', models.BooleanField(default=False, verbose_name='왓챠')),
                ('is_wavve', models.BooleanField(default=False, verbose_name='웨이브')),
                ('is_laftel', models.BooleanField(default=False, verbose_name='라프텔')),
                ('is_tving', models.BooleanField(default=False, verbose_name='티빙')),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]