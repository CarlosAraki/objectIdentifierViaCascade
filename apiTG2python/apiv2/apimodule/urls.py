from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('test_model',views.teste_model_view)
router.register('picture_origin',views.picture_origin_view)

urlpatterns = [
    path('',include(router.urls)),
    path('funcaopaola',views.funcaopaola)
]
