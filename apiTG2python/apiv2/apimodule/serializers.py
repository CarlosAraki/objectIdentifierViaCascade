from rest_framework import serializers
from .models import test_model

class test_model_serializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = test_model
        fields = ("id","url","name","exclude")