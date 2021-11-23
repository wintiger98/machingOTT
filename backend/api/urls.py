from django.urls import path
from .views import GroupView, DetailGroupView

urlpatterns = [
    path('group/<int:pk>/', DetailGroupView.as_view()),
    path('group/', GroupView.as_view()),
]
