from rest_framework.serializers import ModelSerializer
from base.models import Note, Provider

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ProviderSerializer(ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'