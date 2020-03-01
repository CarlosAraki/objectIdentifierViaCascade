from django.shortcuts import render

from rest_framework import viewsets
from .models import Login
from .serializers import LoginSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer