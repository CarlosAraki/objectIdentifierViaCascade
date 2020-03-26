from django.db import models

class test_model(models.Model):
    name                = models.CharField(max_length = 50)
    exclude             = models.CharField(max_length = 3)


class file_model(models.Model):
    name_file           = models.TextField()
    logdata             = models.DateTimeField()
    exclude             = models.CharField(max_length = 3)

class picture_origin(models.Model):
    data64              = models.TextField()
    id_file             = models.ForeignKey(file_model,on_delete=models.CASCADE)
    logdata             = models.DateTimeField();
    exclude             = models.CharField(max_length = 3)

class algorithm(models.Model):
    label               = models.TextField()
    logdata             = models.DateTimeField()
    exclude             = models.CharField(max_length=50)

class picture_processed(models.Model):
    id_picture_origin   = models.ForeignKey(picture_origin,on_delete=models.CASCADE)
    id_algorithm        = models.ForeignKey(algorithm,on_delete=models.CASCADE)
    id_file             = models.ForeignKey(file_model,on_delete=models.CASCADE)
    logdata             = models.DateTimeField()
    exclude             = models.CharField(max_length = 3)
