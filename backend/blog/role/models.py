from django.db import models
from django.contrib.auth.models import User
from django import template
from django.urls import reverse
from django.utils import timezone
# Create your models here.




class Student(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE)
	std_name = models.CharField(max_length=20)
	school = models.CharField(max_length=30)
	std = models.IntegerField()
	age = models.IntegerField()
	mobileno = models.IntegerField()

	def __str__(self):
		return self.std_name



class Facilator(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE)
	fac_name = models.CharField(max_length=20)
	email = models.EmailField()

	def __str__(self):
		return self.fac_name









class Blog(models.Model):
	title = models.CharField(max_length=100)
	content = models.TextField()
	date_posted = models.DateTimeField(auto_now_add = True)
	author = models.ForeignKey(User, on_delete = models.CASCADE)
	anonymous = models.BooleanField(default=False)
	likes = models.IntegerField(default=0)
	def __str__(self):
		return self.title

	@property
	def get_username(self):
		return self.author.username
	


class Comment(models.Model):
	blog = models.ForeignKey(Blog,on_delete=models.CASCADE)
	user = models.ForeignKey(User,on_delete=models.CASCADE)
	content = models.TextField()
	anonymous = models.BooleanField(default=False)

	def __str__(self):
		return f'{self.blog.title} by {self.user.username}'

	@property
	def get_username(self):
		return self.user.username



class Unanswered_question(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE)
	question = models.TextField()

	def get_username(self):
		return self.user.username







