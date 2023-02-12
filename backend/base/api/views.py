from urllib import response
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializers import NoteSerializer
from base.models import Note, Patient, Provider

from django.contrib.auth.models import User
from geopy.geocoders import Nominatim

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/notes',
        '/api/create',
    ]
    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createNote(request):
    user = request.user
    # note =
    Note.objects.create(
        user = user,
        body = "Test Note"
    )
    return Response()

@api_view(['PUT'])
def putPatient(request):
    print(request.data)
    username = User.objects.get(username=request.data['user'])
    try:
        username = Patient.objects.get(user=username)
    except:
        username = Patient.objects.create(user=username)
    print(request.data)
    patient = Patient.objects.get(user=username)
    patient.DOB = request.data['DOB']
    patient.sex = request.data['sex']
    patient.alergy = request.data['alergies']
    patient.history = request.data['history']
    patient.doctor = request.data['doctor']
    patient.email = request.data['email']
    patient.phone_number = request.data['phone']
    patient.health_card = request.data['healthCard']
    patient.emergency_contact = request.data['contact']
    patient.save()
    return Response()


@api_view(['PUT'])
def putProvider(request):
    try:
        user_model = User.objects.get(username=request.data['username'])
    except:
        user_model = User.objects.create(username=request.data['username'])
    print(user_model)
    try:
        provider = Provider.objects.get(user=user_model)
    except:
        provider = Provider.objects.create(user = user_model)
    print(request.data)
    provider.location = request.data['location']
    provider.open_time = request.data['open_time']
    provider.wait_time = request.data['wait_time']
    provider.video_call = request.data['video_call']
    provider.book_appointment = request.data['book_appointment']
    provider.url = request.data['url']
    provider.phone = request.data['phone']
    provider.services = request.data['services']
    provider.save()
    return Response()
