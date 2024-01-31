from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import JsonResponse
from django.contrib import messages



def index(request):
    if 'user_id' not in request.session:
        user = False
    context = {
        'user': user
    }
    return render(request, 'index.html', context)

def rpsls(request):
    if 'user_id' not in request.session:
        user = False
    context = {
        'user': user
    }
    return render(request, 'rpsls.html', context)