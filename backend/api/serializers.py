from django.db import models
from rest_framework import serializers
from rest_framework.utils import field_mapping
from api.models import Tutorial

class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = ('id', 'title', 'description', 'published')
