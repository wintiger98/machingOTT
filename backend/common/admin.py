from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserChangeForm, UserCreationForm
from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('userID','email', 'OTTname', 'is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        (None, {'fields': ('userID', 'password')}),
        ('Personal info', {'fields': ('email', 'realName', 'userName', 'groupID', 'OTTname', 'phoneNum', 'userCode')}),
        ('Permissions', {'fields': ('is_admin','is_Login', 'isAttend')}),
        ('Permissions', {'fields': ('is_netflix', 'is_watcha', 'is_wavve', 'is_laftel', 'is_tving')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('userID',  'password1', 'password2', 'email', 'realName', 'userName', 'phoneNum')}
         ),
    )
    search_fields = ('userID',)
    ordering = ('userID',)
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
