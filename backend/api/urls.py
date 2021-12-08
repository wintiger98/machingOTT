from django.urls import path
from .views import GroupView, DetailGroupView, selectOTT

urlpatterns = [
    path('group/<int:pk>/', DetailGroupView.as_view()),
    path('group/', GroupView.as_view()),
    path('select/', selectOTT.as_view()),
]
