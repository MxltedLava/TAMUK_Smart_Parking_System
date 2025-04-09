# urls.py in sensors or wherever you created the view
from django.urls import path
from .views import take_picture_view

urlpatterns = [
    path('take-picture/', take_picture_view, name='take_picture'),
]