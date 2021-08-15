from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'



class FacilatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facilator
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'




class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id','title','content','anonymous','get_username']



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['get_username','content']


class UnansweredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unanswered_question
        fields = ['id','get_username','question']


