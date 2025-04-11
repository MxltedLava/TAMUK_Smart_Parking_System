from django.urls import path
from .views import check_clearance
from . import views
urlpatterns = [
   path('api/unauthorized-attempts/', views.get_unauthorized_attempts),
]