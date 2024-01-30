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

def play_game(request):
    if request.method == 'POST':
        p1_choice = request.POST.get('p1_choice')
        p2_choice = request.POST.get('p2_choice')

        # Add your game logic here to determine the winner

        result = {"result": "Player 1 won", "p1_choice": p1_choice, "p2_choice": p2_choice}
        return JsonResponse(result)