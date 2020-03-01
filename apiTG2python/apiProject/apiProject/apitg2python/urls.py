from django.conf.urls import url
from rest_framework import routers
from apiProject.apitg2python.views import LoginViewSet,CustomView
from . import views


router = routers.DefaultRouter()
router.register(r'login', LoginViewSet)
router.register(r'login2', LoginViewSet)

urlpatterns = router.urls
urlpatterns = [
    url(r'customview', CustomView.as_view()),
    url(r'define', views.defineimage,name = "defineImage"),
]
 
urlpatterns += router.urls