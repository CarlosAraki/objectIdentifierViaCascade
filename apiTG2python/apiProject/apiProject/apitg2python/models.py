from django.db import models

class Login(models.Model):
    id = models.IntegerField
    login = models.CharField(max_length=50)
    senha = models.CharField(max_length=50)
 
    class Meta:
        verbose_name = "Login"
        verbose_name_plural = "Logins"
 
    def __unicode__(self):
        return '%s %s' % (self.login, self.senha)