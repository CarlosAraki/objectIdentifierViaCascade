from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('test_model',views.teste_model_view)


urlpatterns = [
    path('',include(router.urls))
]
