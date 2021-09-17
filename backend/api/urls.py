from django.urls import path
from api import views

urlpatterns = [
    path('api/tutorials', views.tutorial_list),
    path('api/tutorials/published', views.tutorial_list_published),
    path('api/tutorials/<pk>', views.tutorial_detail),
]
