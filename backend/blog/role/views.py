from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from role.serializers import StudentSerializer, UserSerializer, BlogSerializer, CommentSerializer, UnansweredSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
import json
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
import os
import math
import random
import smtplib




@csrf_exempt
def std_login(request,*args,**kwargs):
	if request.method == 'POST':
		data=json.loads(request.body)
		print(data)
		username = data['username']
		password = data['password']
		user = authenticate(request, username=username,password=password)
		if user is not None:
			std = Student.objects.filter(user = user)[0]
			auth_login(request, user)
			return JsonResponse({'message' : 'success'})
		else:
			return JsonResponse({'message' : 'failure'})
	return JsonResponse({'not reqd' : 'hello'})




@csrf_exempt
def facilitator_login(request,*args,**kwargs):
	if request.method == 'POST':
		data=json.loads(request.body)
		print(data)
		username = data['username']
		password = data['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			ft  = Facilator.objects.filter(user = user)[0]
			auth_login(request, user)
			digits="0123456789"
			OTP = ""
			for i in range(6):
				OTP+=digits[math.floor(random.random()*10)]
			otp = OTP + " is your OTP"
			msg= otp
			s = smtplib.SMTP('smtp.gmail.com', 587)
			s.starttls()
			s.login("payal.gupta.rtk@gmail.com", "oxmfdtvnrkftrrcc")
			s.sendmail('&&&&&&&&&&&',ft.email,msg)
			print(OTP)
			wow = OTP
			return JsonResponse({'message' : 'success','otp':OTP})
		else:
			return JsonResponse({'message' : 'failure'})
	return JsonResponse({'not reqd' : 'hello'})


@csrf_exempt
def gettingotp(request,*args,**kwargs):
	if request.method == 'POST':
		data=json.loads(request.body)
		myotp = data['otp']
		print(myotp)
		print(wow)
		if myotp==wow:
			return JsonResponse({'message' : 'success'})
		else:
			return JsonResponse({'message' : 'failure'})
	return JsonResponse({'message' : 'failure'})





@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message' : 'success'})
        return JsonResponse({'message' : 'failure'})


@csrf_exempt
def student_register(request):
	if request.method == 'POST':
		data=json.loads(request.body)
		print(data)
		username = data['username']
		password = data['password']
		usr = User.objects.create_user(username,"",password)
		auth_login(request, usr)
		std = Student.objects.create(user=usr,std_name=data['name'],age=data['age'],std=data['std'],school=data['school'],mobileno=data['mobileno'])
		return JsonResponse({'message' : 'success'})
	else:
		return JsonResponse({'message' : 'make post request'})



@api_view(['GET'])
def blog_display(request):
	blogs =  Blog.objects.all().order_by('-date_posted')
	serializer = BlogSerializer(blogs, many = True)
	return Response(serializer.data)


@csrf_exempt
def blog_new_post(request):
    if request.method == 'POST':
        data=json.loads(request.body)
        username = data['author']
        user = User.objects.filter(username=username)[0]
        blog = Blog.objects.create(author = user,title=data['title'],content=data['content'],anonymous=data['anonymous'])
        return JsonResponse({'message' : 'success'})
    return JsonResponse({'message' : 'Please request post'})



@api_view(['POST'])
def comment_post(request):
    if request.method == 'POST':
        data=json.loads(request.body)
        print(data)
        pk = data['id']
        post = Blog.objects.get(pk=pk)
        comments = Comment.objects.filter(blog=post)
        print(comments)
        serializer = CommentSerializer(comments,many=True)
        return Response(serializer.data)


@csrf_exempt
def post_detail(request,*args,**kwargs):
	data=json.loads(request.body)
	pk = data['id']
	blog = Blog.objects.get(pk=pk)
	return JsonResponse({
    'id' : pk,
    'title' : blog.title,
    'content' : blog.content,
    'get_username' : blog.author.username,
    'anonymous' : blog.anonymous
    })

@csrf_exempt
def addcomment(request):
	data=json.loads(request.body)
	print(data)
	pk = data['id']
	blog = Blog.objects.get(pk=pk)
	username = data['username']
	usr = User.objects.filter(username=username)[0]
	content = data['content']
	comment = Comment.objects.create(user=usr,blog=blog,content=content)
	return JsonResponse({'message' : 'success'})







            
        


@api_view(['GET'])
def unanswered_question(request):
	unanswered_questions = Unanswered_question.objects.all()
	serializer = UnansweredSerializer(unanswered_questions, many = True)
	return Response(serializer.data)


@csrf_exempt
def unanswered_question_del(request):
	if request.method== 'POST':
		data=json.loads(request.body)
		pk = data['id']
		snippet = Unanswered_question.objects.get(pk=pk)
		snippet.delete()
		return JsonResponse({'message' : 'success'})








        
        











