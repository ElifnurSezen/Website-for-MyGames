import random

while True:
    choices = ["rock", "paper", "scissors"]
    player = None
    flag = True
    computer = random.choice(choices)

    while player not in choices:
        player = input("rock, paper, scissors?: ").lower()

        if player == computer:
            print("computer: ", computer)
            print("player: ", player)
            print("Tie")
        elif player == "rock":
            if computer == "paper":
                print("computer: ", computer)
                print("player: ", player)
                print("You lose :(")
                flag = False
            if computer == "scissors":
                print("computer: ", computer)
                print("player: ", player)
                print("You win :)")
        elif player == "paper":
            if computer == "rock":
                print("computer: ", computer)
                print("player: ", player)
                print("You win :)")
            if computer == "scissors":
                print("computer: ", computer)
                print("player: ", player)
                print("You lose :(")
                flag = False
        elif player == "scissors":
            if computer == "rock":
                print("computer: ", computer)
                print("player: ", player)
                print("You lose :(")
                flag = False
            if computer == "paper":
                print("computer: ", computer)
                print("player: ", player)
                print("You win :)")

    if flag == False:
        break;