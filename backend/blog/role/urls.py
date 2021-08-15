from django.urls import path
from .views import *


urlpatterns = [
    path('studentlogin/', std_login, name='std_login'),
    path('facilitatorlogin/',facilitator_login,name='facilitator_login'),
    path('studentregister/',student_register,name='student_register'),
    path('gettingotp/',gettingotp,name='gettingotp'),
    path('studentlist/',student_list,name='student_list'),
    path('blogdisplay/',blog_display,name='blogdisplay'),
    path('blognewpost/',blog_new_post,name='blognewpost'),
    path('commentpost/',comment_post,name='commentpost'),
    path('postdetail/',post_detail,name='postdetail'),
    path('addcomment/',addcomment,name='addcomment'),
    path('question/',unanswered_question,name='question'),
    path('questiondel/',unanswered_question_del,name='questiondel'),    

]