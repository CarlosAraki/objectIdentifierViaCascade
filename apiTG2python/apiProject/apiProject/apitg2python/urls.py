from django.conf.urls import url
from rest_framework import routers
from apiProject.apitg2python.views import LoginViewSet


router = routers.DefaultRouter()
router.register(r'login', LoginViewSet)

urlpatterns = router.urls