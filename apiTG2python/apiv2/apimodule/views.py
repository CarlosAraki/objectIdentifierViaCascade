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
import os

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
            card_cascade = cv2.CascadeClassifier('C:\\xampp\\htdocs\\TG2\\apiTG2python\\apiv2\\cascade\\cascade_number3_20200524.xml')
            uuid = (json_data['uuid'])
            path = './imagens/'+uuid+".jpg";
            img = cv2.imread(path)
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray,scaleFactor=1.3, minNeighbors=2)
            cards = card_cascade.detectMultiScale(gray,scaleFactor=5, minNeighbors=5)

            for (x,y,w,h) in faces:
                # img = cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
                pass
            
            for (x,y,w,h) in cards:
                img = cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,255),2) 
                # font = cv2.FONT_HERSHEY_SIMPLEX
                # cv2.putText(img,'CARD',(w,h), font, 0.5, (0,255,0), 1, cv2.LINE_AA)
                pass
           
            cv2.imshow(uuid,img)
            cv2.waitKey(0)
            cv2.destroyAllWindows()
          
            return HttpResponse('POST_ok')
        
        return HttpResponse('Fail_POST_uuid')
    else:
        return HttpResponse('GET_ok')
    pass


@csrf_exempt
def generateCascadeByPath(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        if "path" in json_data:
            path = json_data['path'];
            files = os.listdir(path)
            print(files)
            if "type" in  json_data:
                if(json_data['type'] == 'positive'):
                    return makePositiveCascade(path,files)
                if(json_data['type'] == 'negative'):
                    return makeNegativeCascade(path,files)
                else:
                    return HttpResponse('Fail_POST_type')
            else:
                return HttpResponse('Fail_POST_type')
            return HttpResponse('POST_ok')
        
        return HttpResponse('Fail_POST_path')
    else:
        return HttpResponse('GET_ok')
    pass
        

def makePositiveCascade(path,files):
    f = open('pos.dat','w')
    try:
        f.write('')
    finally:
        f.close()
        
    for file in files:
        img = cv2.imread(path+'/'+file , cv2.IMREAD_UNCHANGED)
        roi = defineROI(img)
        if roi[2] != -1:
            line = path+'/'+file+' 1 '+str(roi[0])+' '+str(roi[1])+' '+str(roi[2])+' '+str(roi[3])+'\n'
            f = open('pos.dat','a')
            try:
                f.write(line)
            finally:
                f.close()
            pass

    return HttpResponse('POST_path_pos_OK')

def makeNegativeCascade(path,files):
    f = open('neg.txt','w')
    try:
        f.write('')
    finally:
        f.close()

    for file in files:
        line = path+'/'+file+'\n'
        f = open('neg.txt','a')
        try:
            f.write(line)
        finally:
            f.close()

    return HttpResponse('POST_path_neg_OK')


def defineROI(image):
    r = cv2.selectROI(image)
    value    = []
    value.append(r[0])
    value.append(r[1])
    if r[0] == 0 and r[1] == 0 and r[2] == 0 and r[3] == 0:
        height, width, channels = image.shape
        value.append(-1); #imagem muito grande para ser apresentado
        value.append(-1);
    else:        
        value.append(r[2]);
        value.append(r[3]);
        pass
    return value

