from rest_framework import serializers
from .models import test_model,picture_origin
from django.core.files.base import ContentFile

import uuid
import base64
import json


class test_model_serializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = test_model
        fields = ("id","url","name","exclude")


class picture_origin_serializer(serializers.HyperlinkedModelSerializer):
     
    file = serializers.ImageField(source='imagens', required=False)
    uu_id = serializers.UUIDField(required=False)

    class Meta:
        model = picture_origin
        fields = ("id","file","logdata","uu_id","exclude","url","data64")

    def create(self,arg):
        image_b64 = arg['data64'] 
        format, imgstr = image_b64.split(";base64,")
        ext = format.split("/")[-1]
        u_id = uuid.uuid4()
        data = ContentFile(base64.b64decode(imgstr), name=str(u_id)+"." + ext)
        return picture_origin.objects.create(file=data,data64 = arg['data64'],uu_id = u_id,exclude = arg['exclude'] )