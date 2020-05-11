from django.shortcuts import render 
from rest_framework import viewsets
from .models import test_model,picture_origin
from .serializers import test_model_serializer,picture_origin_serializer
import pdb
import json
from django.http import HttpResponse,JsonResponse

class teste_model_view(viewsets.ModelViewSet): 
    queryset = test_model.objects.filter(exclude = "nao")
    serializer_class = test_model_serializer

class picture_origin_view(viewsets.ModelViewSet): 
    queryset = picture_origin.objects.filter(exclude = "nao")
    serializer_class = picture_origin_serializer


def funcaopaola(request):
    queryset = picture_origin.objects.filter(exclude = "nao").only('id')

    _v = []
    for _data in queryset:
        _v2 = []
        _v2.append(_data.id)
        _v.append(_v2)
        pass
    
    dic = {
        'label':_v,
    }
    return render(request,"hello.html",context=dic)
    # return HttpResponse('ola')