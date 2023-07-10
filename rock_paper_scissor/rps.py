import random

options = ["rock", "paper", "scissors"]

points_table = {"user": 0, "computer": 0, "tie": 0}


def check_winner(user_choice, computer_choice):
    if (user_choice == computer_choice):
        return "tie"
    elif (user_choice == "rock" and computer_choice == "scissors") or \
        (user_choice == "scissors" and computer_choice == "paper") or \
            (user_choice == "paper" and computer_choice == "rock"):
        return "user"
    else:
        return "computer"


def print_score():
    print(points_table, "\n")


def start_game():
    while True:
        user_choice = input(
            "Please eneter your choice rock , paper , scissors and q for quit:")
        if (user_choice == "q"):
            break

        if (user_choice not in options):
            print("invalid choice \n")

        computer_choice = random.choice(options)

        print("computer selected : ", computer_choice, "\n")

        ans = check_winner(user_choice, computer_choice)

        if (ans == "user"):
            points_table["user"] += 1
            print("user scored 1 point\n")
        elif (ans == "computer"):
            points_table["computer"] += 1
            print("computer scored 1 point\n")
        else:
            points_table["tie"] += 1
            print("both choosed same \n")

        print_score()


start_game()