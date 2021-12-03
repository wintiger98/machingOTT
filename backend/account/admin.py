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
        ('Personal info', {'fields': ('email', 'realname', 'nickname', 'groupID', 'OTTname', 'phoneNum')}),
        ('Permissions', {'fields': ('is_admin','is_active')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('userID',  'password1', 'password2', 'email', 'realname', 'nickname', 'phoneNum')}
         ),
    )
    search_fields = ('userID',)
    ordering = ('userID',)
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
