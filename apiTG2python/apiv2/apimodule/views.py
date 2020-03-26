from django.shortcuts import render
from rest_framework import viewsets
from .models import test_model
from .serializers import test_model_serializer

class teste_model_view(viewsets.ModelViewSet): 
    queryset = test_model.objects.all()
    serializer_class = test_model_serializer