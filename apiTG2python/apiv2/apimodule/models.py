import base64

from django.db import models
import uuid
class test_model(models.Model):
    name                = models.CharField(max_length = 50)
    exclude             = models.CharField(max_length = 3)

class picture_origin(models.Model):
    id                  = models.AutoField(primary_key=True,unique=True)
    data64              = models.TextField()
    file                = models.ImageField(upload_to = 'imagens')
    uu_id               = models.UUIDField(default=uuid.uuid4(), editable=False,unique=True)
    logdata             = models.DateTimeField(auto_now=True);
    exclude             = models.CharField(default = 'nao',max_length = 3)

class algorithm(models.Model):
    label               = models.TextField()
    logdata             = models.DateTimeField(auto_now=True)
    exclude             = models.CharField(max_length=3)

class picture_processed(models.Model):
    id_picture_origin   = models.ForeignKey(picture_origin,on_delete=models.CASCADE)
    id_algorithm        = models.ForeignKey(algorithm,on_delete=models.CASCADE)
    file                = models.ImageField(upload_to = 'imagens')
    logdata             = models.DateTimeField(auto_now=True)
    exclude             = models.CharField(max_length = 3)
