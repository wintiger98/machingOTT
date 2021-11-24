from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from common.forms import UserChangeForm


def signup(request):
    """
    계정생성
    """
    if request.method == "POST":
        form = UserChangeForm(request.POST)
        if form.is_valid():
            form.save()
            userID = form.cleaned_data.get('userID')
            raw_password = form.cleaned_data.get('password1')
            email = form.cleaned_data.get('email')
            phonenum = form.cleaned_data.get('phonenum')
            realname = form.cleaned_data.get('realname')
            user = authenticate(userID=userID, password=raw_password, email=email,phonenum=phonenum, realname=realname)  # 사용자 인증
            login(request, user)  # 로그인
            return redirect('index')
    else:
        form = UserChangeForm()
    return render(request, 'common/signup.html', {'form': form})