from django.shortcuts import render 
from rest_framework import viewsets
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import test_model,picture_origin
from .serializers import test_model_serializer,picture_origin_serializer

import pdb
import json
import numpy as np
import cv2

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

@csrf_exempt
def returnImageByUUId(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        if "uuid" in json_data:
            face_cascade = cv2.CascadeClassifier('C:\\opencv\\build\\etc\\haarcascades\\haarcascade_frontalface_default.xml')
            uuid = (json_data['uuid'])
            path = './imagens/'+uuid+".jpg";
            img = cv2.imread(path)
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray,scaleFactor=1.3, minNeighbors=2)

            for (x,y,w,h) in faces:
                img = cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
                pass

            cv2.imshow(uuid,img)
            cv2.waitKey(0)
            cv2.destroyAllWindows()
          
            return HttpResponse('POST_ok')
        
        return HttpResponse('Fail_POST_uuid')
    else:
        return HttpResponse('GET_ok')
    pass



